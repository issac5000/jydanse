"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send, Music, CreditCard, FileText } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const suggestions = [
  { icon: <Music size={14} />, text: "Quels cours proposez-vous ?" },
  { icon: <CreditCard size={14} />, text: "Quels sont les tarifs ?" },
  { icon: <FileText size={14} />, text: "Comment s'inscrire ?" },
];

/* ── lightweight inline markdown ── */
function renderMarkdown(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length === 0) return;
    elements.push(
      <ul key={`ul-${elements.length}`} className="list-disc pl-4 space-y-0.5 my-1">
        {listItems.map((li, j) => (
          <li key={j}>{inlineFormat(li)}</li>
        ))}
      </ul>
    );
    listItems = [];
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // list items
    if (/^[\-\*•]\s+/.test(line)) {
      listItems.push(line.replace(/^[\-\*•]\s+/, ""));
      continue;
    }

    flushList();

    // headings
    if (/^###\s+/.test(line)) {
      elements.push(
        <p key={i} className="font-semibold text-sm mt-2 mb-0.5">
          {inlineFormat(line.replace(/^###\s+/, ""))}
        </p>
      );
    } else if (/^##\s+/.test(line)) {
      elements.push(
        <p key={i} className="font-bold text-sm mt-2 mb-0.5">
          {inlineFormat(line.replace(/^##\s+/, ""))}
        </p>
      );
    } else if (line.trim() === "") {
      elements.push(<br key={i} />);
    } else {
      elements.push(
        <p key={i} className="my-0.5">
          {inlineFormat(line)}
        </p>
      );
    }
  }
  flushList();
  return elements;
}

function inlineFormat(text: string): React.ReactNode {
  // bold **text**
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipLeaving, setTooltipLeaving] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  // Show tooltip after 5s, hide after 5s more
  useEffect(() => {
    const showTimer = setTimeout(() => {
      if (!tooltipDismissed) setShowTooltip(true);
    }, 5000);
    const leaveTimer = setTimeout(() => {
      if (!tooltipDismissed) setTooltipLeaving(true);
    }, 10000);
    const hideTimer = setTimeout(() => {
      if (!tooltipDismissed) {
        setShowTooltip(false);
        setTooltipLeaving(false);
        setTooltipDismissed(true);
      }
    }, 10400);
    return () => { clearTimeout(showTimer); clearTimeout(leaveTimer); clearTimeout(hideTimer); };
  }, [tooltipDismissed]);

  // Hide tooltip when chat opens
  useEffect(() => {
    if (open) {
      setShowTooltip(false);
      setTooltipDismissed(true);
    }
  }, [open]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || streaming) return;

    const userMessage: Message = { role: "user", content: text.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setStreaming(true);

    // add placeholder for assistant
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!res.ok) throw new Error("API error");

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          const last = updated[updated.length - 1];
          updated[updated.length - 1] = {
            ...last,
            content: last.content + chunk,
          };
          return updated;
        });
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: "Désolé, une erreur est survenue. Réessaie dans un instant.",
        };
        return updated;
      });
    } finally {
      setStreaming(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* ── Floating sphere ── */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Tooltip */}
        {showTooltip && !open && (
          <button
            onClick={() => { setShowTooltip(false); setTooltipDismissed(true); setOpen(true); }}
            className={`absolute bottom-1 right-16 whitespace-nowrap bg-white rounded-2xl shadow-lg shadow-ciel-200/30 border border-ciel-200/40 px-4 py-2.5 text-sm font-medium text-foreground/70 cursor-pointer hover:bg-frost/50 transition-colors ${tooltipLeaving ? "animate-slide-out-right" : "animate-fade-in-up"}`}
          >
            <span>Une question ? Je suis là pour vous !</span>
            <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-3 h-3 bg-white border-r border-b border-ciel-200/40 -rotate-45" />
          </button>
        )}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Fermer l'assistant" : "Ouvrir l'assistant"}
          className={`w-14 h-14 rounded-full bg-gradient-to-br from-ciel-400 to-rose-400 text-white shadow-lg shadow-ciel-300/30 flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:shadow-ciel-300/40 hover:scale-105 cursor-pointer ${
            open ? "" : "animate-breathe"
          }`}
        >
          {open ? <X size={22} /> : <MessageCircle size={22} />}
        </button>
      </div>

      {/* ── Mobile backdrop blur ── */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm sm:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ── Chat modal ── */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-8rem)] rounded-[2rem] bg-[#f4f7fa] shadow-2xl shadow-ciel-200/20 flex flex-col overflow-hidden border border-ciel-200/50">
          {/* Header */}
          <div className="bg-gradient-to-r from-ciel-400 to-rose-400 px-6 py-4 flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle size={18} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="text-white font-semibold text-sm leading-tight">
                  Assistant virtuel
                </p>
                <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                <span className="text-white/60 text-xs">En ligne</span>
              </div>
              <p className="text-white/70 text-xs">J&apos;y Danse</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Fermer le chat"
              className="w-7 h-7 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={14} className="text-white" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-4 py-4 space-y-3 chatbot-scrollbar"
          >
            {/* Welcome */}
            {messages.length === 0 && (
              <div className="bg-frost/50 rounded-2xl rounded-tl-md px-4 py-3 text-sm text-foreground/70 leading-relaxed max-w-[85%]">
                Bonjour ! Je suis l&apos;assistant du club <strong>J&apos;y Danse</strong>. Comment puis-je t&apos;aider ?
              </div>
            )}

            {/* Conversation */}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-ciel-400 to-rose-400 text-white rounded-br-md"
                      : "bg-frost/50 text-foreground/70 rounded-tl-md"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <>
                      {msg.content
                        ? renderMarkdown(msg.content)
                        : streaming && (
                            <span className="inline-block w-1.5 h-4 bg-ciel-400/60 rounded-full animate-pulse" />
                          )}
                    </>
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Suggestions */}
          {messages.length === 0 && (
            <div className="shrink-0 px-4 pt-2 flex flex-col gap-1.5">
              {suggestions.map((s) => (
                <button
                  key={s.text}
                  onClick={() => sendMessage(s.text)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-ciel-100/70 border border-ciel-200/50 text-sm text-foreground/60 hover:bg-ciel-200/60 hover:border-ciel-300 transition-all duration-200 text-left cursor-pointer"
                >
                  <span className="text-ciel-500 shrink-0">{s.icon}</span>
                  {s.text}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="shrink-0 px-4 pb-4 pt-2"
          >
            <div className="flex items-center gap-2 bg-frost/60 border border-ciel-200/50 rounded-full pl-4 pr-1.5 py-1.5">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Pose ta question..."
                disabled={streaming}
                className="flex-1 bg-transparent text-base text-foreground/70 placeholder:text-foreground/30 focus:outline-none disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || streaming}
                className="w-8 h-8 rounded-full bg-gradient-to-r from-ciel-400 to-rose-400 text-white flex items-center justify-center shrink-0 disabled:opacity-40 hover:shadow-md hover:shadow-ciel-200/30 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed"
              >
                <Send size={14} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
