import { type NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET(_req: NextRequest) {
  const apiToken = process.env.CLOUDFLARE_API_TOKEN;

  if (!apiToken) {
    return NextResponse.json(
      {
        error: 'Cloudflare API token not configured',
        message: 'Please add CLOUDFLARE_API_TOKEN to your environment variables',
      },
      { status: 500 }
    );
  }

  try {
    console.log('Testing Cloudflare API token...');

    const response = await fetch('https://api.cloudflare.com/client/v4/user/tokens/verify', {
      headers: {
        Authorization: `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
      },
      cache: 'force-cache',
    });

    const data = await response.json();

    console.log('Cloudflare API response status:', response.status);
    console.log('Cloudflare API response:', data);

    if (!response.ok) {
      return NextResponse.json(
        {
          error: 'Cloudflare API token verification failed',
          status: response.status,
          details: data.errors?.[0]?.message || 'Unknown error',
          fullResponse: data,
        },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Cloudflare API token is valid',
      user: data.result,
      status: response.status,
    });
  } catch (error: unknown) {
    console.error('Cloudflare API Error:', error);
    return NextResponse.json(
      {
        error: 'Failed to verify Cloudflare token',
        details: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
