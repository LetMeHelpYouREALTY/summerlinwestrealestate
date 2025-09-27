export async function verifyCloudflareToken() {
  try {
    const response = await fetch('/api/cloudflare');
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to verify token');
    }

    return data;
  } catch (error) {
    console.error('Error verifying Cloudflare token:', error);
    throw error;
  }
}
