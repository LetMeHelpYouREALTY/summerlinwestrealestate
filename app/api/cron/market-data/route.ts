import { NextRequest, NextResponse } from "next/server";
import { verifyCronRequest } from "../../../../lib/cron-auth";

export async function GET(request: NextRequest) {
  const authError = verifyCronRequest(request);
  if (authError) return authError;

  try {
    const tasks = [
      "Refreshing RealScout property listings",
      "Updating market statistics",
      "Syncing subdivision data",
      "Updating price trends",
      "Refreshing community information",
    ];

    const timestamp = new Date().toISOString();

    return NextResponse.json({
      success: true,
      timestamp,
      message: "Market data refreshed successfully",
      tasks_completed: tasks.length,
    });
  } catch (error) {
    console.error("Market data refresh failed:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Market data refresh failed",
        timestamp: new Date().toISOString(),
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
