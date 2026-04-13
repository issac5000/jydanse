import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const webhookUrl = process.env.N8N_INSCRIPTION_WEBHOOK_URL;
  const ackWebhookUrl = process.env.N8N_INSCRIPTION_ACK_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Webhook non configuré" },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const payload = JSON.stringify({
      ...body,
      timestamp: new Date().toISOString(),
    });

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Erreur lors de l'envoi" },
        { status: 502 }
      );
    }

    // Accusé de réception
    if (ackWebhookUrl) {
      await fetch(ackWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
      }).catch(() => {});
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
