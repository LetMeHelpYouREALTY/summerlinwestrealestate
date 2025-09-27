// import { createOpenAI } from '@ai-sdk/vercel';

/**
 * V0 API Configuration for AI-powered development
 *
 * This utility provides access to the v0.app Model API for generating
 * React components and Next.js applications with AI assistance.
 *
 * @see https://v0.app/docs/api/model
 */

// Initialize the OpenAI-compatible client for v0
export const v0 = createOpenAI({
  apiKey: process.env.V0_API_KEY,
  baseURL: 'https://api.v0.app/v1',
});

/**
 * Generate React components using v0's AI model
 *
 * @param prompt - Description of the component to generate
 * @param options - Additional options for generation
 * @returns Promise<string> - Generated React component code
 */
export async function generateComponent(
  prompt: string,
  options: {
    framework?: 'react' | 'next';
    style?: 'tailwind' | 'css' | 'styled-components';
    includeTypes?: boolean;
  } = {}
): Promise<string> {
  const { framework = 'next', style = 'tailwind', includeTypes = true } = options;

  const systemPrompt = `You are an expert React/Next.js developer specializing in real estate websites. 
Generate clean, modern, accessible React components using ${framework} and ${style}.

Requirements:
- Use TypeScript with strict typing
- Follow Next.js 15+ best practices
- Implement responsive design (mobile-first)
- Include proper accessibility attributes
- Use semantic HTML elements
- Optimize for Core Web Vitals
- Follow real estate industry standards
- Include proper SEO considerations

For real estate components, consider:
- Property listings and cards
- Search filters and forms
- Image galleries and virtual tours
- Contact forms and lead capture
- Market data displays
- Community information sections

Generate only the component code, no explanations.`;

  try {
    const result = await v0.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 4000,
    });

    return result.choices[0]?.message?.content || '';
  } catch (error) {
    console.error('Error generating component:', error);
    throw new Error('Failed to generate component with v0 API');
  }
}

/**
 * Generate complete page layouts for real estate websites
 *
 * @param pageType - Type of page to generate
 * @param requirements - Specific requirements for the page
 * @returns Promise<string> - Generated page component code
 */
export async function generateRealEstatePage(
  pageType: 'homepage' | 'property-listing' | 'community' | 'market-report' | 'contact',
  requirements: {
    community?: string;
    features?: string[];
    seoKeywords?: string[];
  } = {}
): Promise<string> {
  const pagePrompts = {
    homepage: `Create a modern, professional homepage for Dr. Janet Duffy's Summerlin West Real Estate business. Include hero section, featured properties, market insights, and contact CTA.`,
    'property-listing': `Create a detailed property listing page with image gallery, property details, neighborhood info, and contact form.`,
    community: `Create a community information page showcasing ${requirements.community || 'Summerlin West'} with amenities, schools, and local attractions.`,
    'market-report': `Create a market report page with data visualization, trends analysis, and expert insights from Dr. Janet Duffy.`,
    contact: `Create a contact page with multiple contact methods, office information, and lead capture form.`,
  };

  const prompt = pagePrompts[pageType];
  return generateComponent(prompt, {
    framework: 'next',
    style: 'tailwind',
    includeTypes: true,
  });
}

/**
 * Validate v0 API configuration
 *
 * @returns boolean - Whether the API is properly configured
 */
export function validateV0Config(): boolean {
  if (!process.env.V0_API_KEY) {
    console.error('V0_API_KEY is not set in environment variables');
    return false;
  }

  if (process.env.V0_API_KEY === 'your_api_key_here') {
    console.error('Please replace the placeholder API key with your actual v0 API key');
    return false;
  }

  return true;
}
