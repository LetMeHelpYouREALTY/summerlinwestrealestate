import { NextRequest, NextResponse } from "next/server";
import {
  buildFubEventPayload,
  parseLeadBody,
  sendFubLeadEvent,
} from "../../../lib/fub-lead";

export async function POST(req: NextRequest) {
  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (body === null || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = parseLeadBody(body);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const sourceUrl =
    parsed.data.sourceUrl ||
    req.headers.get("referer") ||
    undefined;
  const leadInput = { ...parsed.data, sourceUrl };

  const apiKey = process.env.FOLLOW_UP_BOSS_API_KEY;
  if (!apiKey) {
    console.error(
      "FOLLOW_UP_BOSS_API_KEY is not configured; lead capture is unavailable",
    );
    return NextResponse.json(
      { error: "Lead capture is temporarily unavailable" },
      { status: 503 },
    );
  }

  const payload = buildFubEventPayload(leadInput);
  const result = await sendFubLeadEvent(apiKey, payload);

  if (!result.ok) {
    if (result.status !== undefined) {
      console.error(`Follow Up Boss API error: HTTP ${result.status}`);
    } else {
      console.error("Follow Up Boss API request failed");
    }
    return NextResponse.json(
      { error: "Failed to send lead to CRM" },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
