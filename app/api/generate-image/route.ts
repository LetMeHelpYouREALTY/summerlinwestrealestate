import { type NextRequest, NextResponse } from 'next/server';

// Static placeholder images for different prompts
const PLACEHOLDER_IMAGES = {
  'luxury residential neighborhood': '/images/featured-homes/featured-home-1.jpg',
  'summerlin west': '/images/featured-homes/19-DSC03027.jpg',
  'red rock canyon': '/images/featured-homes/47-DJI_20250707145846_0779_D.jpg',
  'las vegas': '/images/featured-homes/19-DSC03027.jpg',
  'modern homes': '/images/featured-homes/02-DSC03093.jpg',
  'desert landscaping': '/images/featured-homes/17-DSC02979.jpg',
  'mountain views': '/images/featured-homes/47-DJI_20250707145846_0779_D.jpg',
  'blue sky': '/images/featured-homes/featured-home-1.jpg',
  'default': '/images/featured-homes/featured-home-1.jpg'
};

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    // Find the best matching placeholder image based on prompt keywords
    const promptLower = prompt.toLowerCase();
    let selectedImage = PLACEHOLDER_IMAGES.default;

    // Check for keyword matches
    for (const [keyword, imagePath] of Object.entries(PLACEHOLDER_IMAGES)) {
      if (keyword !== 'default' && promptLower.includes(keyword)) {
        selectedImage = imagePath;
        break;
      }
    }

    // For now, return the selected placeholder image
    // In the future, you could integrate with actual image generation services like:
    // - OpenAI DALL-E
    // - Midjourney API
    // - Stable Diffusion
    // - Cloudflare AI Workers
    
    return NextResponse.json({
      success: true,
      imagePath: selectedImage,
      placeholder: true,
      message: 'Using placeholder image. Consider integrating with a dedicated image generation service.',
      prompt: prompt
    });

  } catch (error) {
    console.error('Image generation error:', error);
    return NextResponse.json({ 
      error: 'Failed to generate image',
      fallback: '/images/featured-homes/featured-home-1.jpg'
    }, { status: 500 });
  }
}
