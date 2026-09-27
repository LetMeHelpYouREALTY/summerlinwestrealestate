import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const cloudflareToken = process.env.CLOUDFLARE_API_TOKEN;
  const fubApiKey = process.env.FOLLOW_UP_BOSS_API_KEY;

  return NextResponse.json({
    message: "Environment variables test",
    cloudflareToken: cloudflareToken ? "Set (hidden)" : "Not set",
    followUpBossApiKey: fubApiKey ? "Set (hidden)" : "Not set",
    allEnvVars: Object.keys(process.env).filter(
      (key) =>
        key.includes("CLOUDFLARE") ||
        key.includes("FUB") ||
        key.includes("FOLLOW_UP_BOSS"),
    ),
  });
}
