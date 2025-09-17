import { NextResponse } from "next/server";

type Body = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  address?: string;
  fleetSize?: "" | "1-5" | "6-20" | "21-50" | "51+";
  message: string;
  consent: boolean;
  website?: string;
  source?: string;
  timeSinceRender?: number;
};

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(v.trim());

const hits = new Map<string, { count: number; ts: number }>();
const WINDOW_MS = 5 * 60 * 1000; // 5 min
const MAX_PER_WINDOW = 5;

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";
    const now = Date.now();
    const h = hits.get(ip);
    if (!h || now - h.ts > WINDOW_MS) {
      hits.set(ip, { count: 1, ts: now });
    } else if (h.count >= MAX_PER_WINDOW) {
      return NextResponse.json(
        { ok: false, message: "Trop de demandes. Réessayez plus tard." },
        { status: 429 }
      );
    } else {
      h.count += 1;
    }

    const body = (await req.json()) as Partial<Body>;
    const fieldErrors: Record<string, string> = {};

    if (body.website && body.website.trim() !== "") {
      return NextResponse.json({ ok: true }, { status: 200 });
    }
    if ((body.timeSinceRender ?? 0) < 2000) {
      fieldErrors.source = "Soumission trop rapide.";
    }

    if (!body.name?.trim()) fieldErrors.name = "Indiquez votre nom.";
    if (!body.email?.trim()) fieldErrors.email = "Indiquez votre email.";
    else if (!emailOk(body.email)) fieldErrors.email = "Email invalide.";
    if (!body.message?.trim() || body.message.trim().length < 10)
      fieldErrors.message = "Message trop court (min. 10 caractères).";
    if (!body.consent)
      fieldErrors.consent = "Nécessaire pour être recontacté·e.";

    if (Object.keys(fieldErrors).length) {
      return NextResponse.json({ ok: false, fieldErrors }, { status: 400 });
    }

    const payload = {
      name: body.name!.trim(),
      company: body.company?.trim() || "",
      email: body.email!.trim(),
      phone: body.phone?.trim() || "",
      address: body.address?.trim() || "",
      fleetSize: body.fleetSize || "",
      message: body.message!.trim().slice(0, 5000),
      source: body.source || "Contact page",
      ip,
      at: new Date().toISOString(),
    };
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("CONTACT_ERROR", err);
    return NextResponse.json(
      { ok: false, message: "Veuillez réessayer." },
      { status: 500 }
    );
  }
}
