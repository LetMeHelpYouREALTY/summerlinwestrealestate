import { type NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, email, phone, page } = await req.json();
  const apiKey = process.env.FUB_API_KEY;

  // Log the lead for debugging
  console.log('Lead received:', { name, email, phone, page });

  if (!email) {
    return NextResponse.json({ error: 'Missing email' }, { status: 400 });
  }

  // If no API key is configured, just return success (for development/testing)
  if (!apiKey) {
    console.log('No FUB_API_KEY configured, skipping external API call');
    return NextResponse.json({
      success: true,
      message: 'Lead received (no external integration)',
    });
  }

  try {
    // Send lead to Follow Up Boss using native fetch
    const response = await fetch('https://api.followupboss.com/v1/people', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from(`${apiKey}:`).toString('base64')}`,
      },
      body: JSON.stringify({
        email: [email],
        name: name || undefined,
        phones: phone ? [{ number: phone }] : undefined,
        source: 'Summerlin West Website',
        tags: [page || 'Website Lead'],
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to send lead' }, { status: 500 });
  }
}
