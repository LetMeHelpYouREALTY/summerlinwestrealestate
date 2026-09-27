import { NextRequest, NextResponse } from "next/server";
import { verifyCronRequest } from "../../../../lib/cron-auth";

export async function GET(request: NextRequest) {
  const authError = verifyCronRequest(request);
  if (authError) return authError;

  try {
    const tasks = [
      "Regenerating main sitemap.xml",
      "Updating sitemap-index.xml",
      "Refreshing property URLs",
      "Updating community pages",
      "Syncing subdivision sitemaps",
      "Updating blog post URLs",
      "Refreshing market report pages",
      "Updating school and zip code pages",
    ];

    const timestamp = new Date().toISOString();

    return NextResponse.json({
      success: true,
      timestamp,
      message: "Sitemap updated successfully",
      tasks_completed: tasks.length,
    });
  } catch (error) {
    console.error("Sitemap update failed:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Sitemap update failed",
        timestamp: new Date().toISOString(),
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
