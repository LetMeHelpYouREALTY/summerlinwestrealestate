import { NextRequest, NextResponse } from "next/server";

/**
 * Validates Vercel Cron requests (`Authorization: Bearer $CRON_SECRET`).
 * Returns a 401 response when invalid, or null when the request may proceed.
 */
export function verifyCronRequest(
  request: NextRequest,
): NextResponse | null {
  const secret = process.env.CRON_SECRET;

  if (!secret) {
    console.error(
      "Unauthorized cron request: CRON_SECRET is not set in Vercel project environment variables",
    );
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const authHeader = request.headers.get("authorization");
  const expectedAuth = `Bearer ${secret}`;

  if (authHeader !== expectedAuth) {
    console.error("Unauthorized cron request - invalid auth header");
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return null;
}
