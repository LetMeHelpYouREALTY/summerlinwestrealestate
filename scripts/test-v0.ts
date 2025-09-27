import { generateComponent, validateV0Config } from './lib/v0';

/**
 * Test script to validate V0 integration
 * Run with: npx tsx scripts/test-v0.ts
 */

async function testV0Integration() {
  console.log('🧪 Testing V0 Integration...\n');

  // Test 1: Validate configuration
  console.log('1️⃣ Testing V0 Configuration...');
  const isConfigured = validateV0Config();
  console.log(`   Configuration Status: ${isConfigured ? '✅ Valid' : '❌ Invalid'}\n`);

  if (!isConfigured) {
    console.log('❌ V0 configuration is invalid. Please check your V0_API_KEY.');
    return;
  }

  // Test 2: Generate a simple component
  console.log('2️⃣ Testing Component Generation...');
  try {
    const component = await generateComponent(
      'Create a simple property card component for a luxury home in Summerlin West with image, price, and contact button. Use Tailwind CSS and TypeScript.',
      {
        framework: 'next',
        style: 'tailwind',
        includeTypes: true,
      }
    );

    console.log('   ✅ Component generated successfully!');
    console.log('   📝 Generated component preview:');
    console.log(`   ${'─'.repeat(50)}`);
    console.log(`${component.substring(0, 200)}...`);
    console.log(`   ${'─'.repeat(50)}`);
    console.log(`   📊 Component length: ${component.length} characters\n`);
  } catch (error) {
    console.log('   ❌ Component generation failed:');
    console.log(`   Error: ${error instanceof Error ? error.message : 'Unknown error'}\n`);
  }

  // Test 3: Generate a real estate page
  console.log('3️⃣ Testing Real Estate Page Generation...');
  try {
    const { generateRealEstatePage } = await import('./lib/v0');
    const page = await generateRealEstatePage('homepage', {
      community: 'The Vistas',
      features: ['golf course views', 'luxury amenities', 'Red Rock Canyon proximity'],
      seoKeywords: [
        'Summerlin West homes',
        'luxury real estate Las Vegas',
        'The Vistas properties',
      ],
    });

    console.log('   ✅ Real estate page generated successfully!');
    console.log('   📝 Generated page preview:');
    console.log(`   ${'─'.repeat(50)}`);
    console.log(`${page.substring(0, 200)}...`);
    console.log(`   ${'─'.repeat(50)}`);
    console.log(`   📊 Page length: ${page.length} characters\n`);
  } catch (error) {
    console.log('   ❌ Page generation failed:');
    console.log(`   Error: ${error instanceof Error ? error.message : 'Unknown error'}\n`);
  }

  console.log('🎉 V0 Integration Test Complete!');
  console.log('\n📋 Next Steps:');
  console.log('   • Visit http://localhost:3000/v0-test to use the interactive interface');
  console.log('   • Test component generation with different prompts');
  console.log('   • Generate real estate specific components and pages');
  console.log('   • Integrate V0-generated components into your project');
}

// Run the test
testV0Integration().catch(console.error);
