import { type NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET(_req: NextRequest) {
  try {
    const apiToken = process.env.CLOUDFLARE_API_TOKEN;

    return NextResponse.json({
      message: 'Debug info',
      hasToken: !!apiToken,
      tokenLength: apiToken ? apiToken.length : 0,
      tokenStart: apiToken ? `${apiToken.substring(0, 4)}...` : 'none',
      allEnvKeys: Object.keys(process.env).filter((key) => key.includes('CLOUDFLARE')),
    });
  } catch (error: unknown) {
    return NextResponse.json(
      {
        error: 'Debug error',
        message: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
