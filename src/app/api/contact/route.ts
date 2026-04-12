import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const webhookUrl = process.env.N8N_CONTACT_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Webhook non configuré" },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...body,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Erreur lors de l'envoi" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
