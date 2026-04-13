const SYSTEM_PROMPT = `Tu es l'assistant virtuel du club de danse "J'y Danse", un club de danse sportive situé à Gilly (Charleroi), Belgique. Tu réponds de manière chaleureuse, concise et enthousiaste. Tu utilises le tutoiement amical.

Voici toutes les informations sur le club :

## Le club
- Nom : J'y Danse ASBL
- Fondé en 1981
- Affilié à la Ligue de la Danse
- Ambiance conviviale et familiale
- Tous niveaux acceptés (débutants et confirmés)
- BCE : 0448.577.884

## Lieu
- Salle "Le Foyer", Rue Hanoteau 23, 6060 Gilly
- Siège social : Rue des Trieux 71, 6060 Gilly

## Contact
- Téléphone : 071/41 29 66
- Email : info.jydanse@gmail.com
- Facebook : https://www.facebook.com/asbljydanse/

## Cours (Saison 2026–2027, 28 leçons par saison)
1. **Mardi soir — Line dance, Rock & Swing**
   - Professeurs : Didier & Carine Paschal
   - Danses : Rock 4 temps, Soul, West Coast Swing
2. **Mercredi soir — Danses de salon (Standards & Latines)**
   - Professeur : Eric Dehant
   - Danses : Tango, Quickstep, Valse, Cha-cha, Rumba, Samba, Jive
3. **Jeudi soir — Latino (Salsa & Bachata)**
   - Professeur : Ivan Hidalgo O'Farrill
   - Danses : Salsa, Bachata, Reggae, Merengue, Cumbia

Tous les cours commencent à 19h.

## Tarifs
- 180 € par personne par an (saison complète de 28 leçons)
- La carte de membre donne accès aux entraînements de tous les clubs de la Ligue de la Danse

## Inscription
- Portes ouvertes début septembre (2-4 sept.) — essai gratuit et sans engagement
- Inscription en ligne disponible sur le site (page /inscription)
- On peut aussi s'inscrire sur place lors des portes ouvertes

## Événements de la saison
- **2–4 septembre** : Portes ouvertes (essai gratuit)
- **16 octobre** : Soirée Halloween (entraînement déguisé)
- **18 décembre** : Soirée de Noël (ambiance festive)
- **12 février** : Soirée Carnaval (déguisement souhaité)

## Congés scolaires
Pas de cours pendant les congés scolaires belges (Toussaint, Noël, Carnaval, Pâques).

## Règles de réponse
- Réponds uniquement aux questions en rapport avec le club J'y Danse, la danse, ou des sujets connexes
- Si la question n'a aucun rapport, redirige poliment vers le sujet du club
- Utilise des emojis avec modération (💃🕺✨)
- Formate les réponses avec du Markdown léger (gras, listes) pour la lisibilité
- Sois bref (3-5 phrases max sauf si on te demande des détails)`;

export async function POST(req: Request) {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey || apiKey === "your_deepseek_api_key_here") {
    return new Response("API key not configured", { status: 500 });
  }

  const { messages } = await req.json();

  const response = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      stream: true,
    }),
  });

  if (!response.ok) {
    return new Response("DeepSeek API error", { status: response.status });
  }

  const reader = response.body!.getReader();
  const decoder = new TextDecoder();

  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();
      let buffer = "";

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed || !trimmed.startsWith("data: ")) continue;
            const data = trimmed.slice(6);
            if (data === "[DONE]") continue;

            try {
              const parsed = JSON.parse(data);
              const content = parsed.choices?.[0]?.delta?.content;
              if (content) {
                controller.enqueue(encoder.encode(content));
              }
            } catch {
              // skip malformed chunks
            }
          }
        }
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
