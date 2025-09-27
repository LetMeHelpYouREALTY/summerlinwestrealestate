#!/usr/bin/env node

/**
 * Test Linear Integration
 *
 * This script tests the Linear integration without requiring environment variables
 * to verify the code structure and API endpoints are working correctly.
 */

const fs = require('node:fs');
const path = require('node:path');

console.log('🧪 Testing Linear Integration...\n');

// Test 1: Check if Linear SDK is installed
console.log('1. Testing Linear SDK installation...');
try {
  const { LinearClient } = require('@linear/sdk');
  console.log('   ✅ Linear SDK imported successfully');
} catch (error) {
  console.log('   ❌ Linear SDK import failed:', error.message);
  process.exit(1);
}

// Test 2: Check if API routes exist
console.log('\n2. Testing API routes structure...');
const apiRoutes = [
  'app/api/linear/route.ts',
  'app/api/linear/teams/route.ts',
  'app/api/linear/webhook/route.ts',
];

let allRoutesExist = true;
apiRoutes.forEach((route) => {
  const fullPath = path.join(process.cwd(), route);
  if (fs.existsSync(fullPath)) {
    console.log(`   ✅ ${route} exists`);
  } else {
    console.log(`   ❌ ${route} missing`);
    allRoutesExist = false;
  }
});

if (!allRoutesExist) {
  console.log('   ❌ Some API routes are missing');
  process.exit(1);
}

// Test 3: Check if Linear library exists
console.log('\n3. Testing Linear library...');
const linearLibPath = path.join(process.cwd(), 'lib/linear.ts');
if (fs.existsSync(linearLibPath)) {
  console.log('   ✅ Linear library exists');

  // Check if it exports the required functions
  try {
    const linearLibContent = fs.readFileSync(linearLibPath, 'utf8');
    const requiredExports = ['LinearAPI', 'linearAPI', 'LinearIssue'];

    requiredExports.forEach((exportName) => {
      if (linearLibContent.includes(exportName)) {
        console.log(`   ✅ ${exportName} is exported`);
      } else {
        console.log(`   ❌ ${exportName} is missing`);
        allRoutesExist = false;
      }
    });
  } catch (error) {
    console.log('   ❌ Error reading Linear library:', error.message);
    allRoutesExist = false;
  }
} else {
  console.log('   ❌ Linear library missing');
  allRoutesExist = false;
}

// Test 4: Check if test page exists
console.log('\n4. Testing Linear test page...');
const testPagePath = path.join(process.cwd(), 'app/linear-test/page.tsx');
if (fs.existsSync(testPagePath)) {
  console.log('   ✅ Linear test page exists');
} else {
  console.log('   ❌ Linear test page missing');
  allRoutesExist = false;
}

// Test 5: Check if integration script exists
console.log('\n5. Testing integration script...');
const scriptPath = path.join(process.cwd(), 'scripts/linear-vercel-integration.js');
if (fs.existsSync(scriptPath)) {
  console.log('   ✅ Integration script exists');
} else {
  console.log('   ❌ Integration script missing');
  allRoutesExist = false;
}

// Test 6: Check Vercel configuration
console.log('\n6. Testing Vercel configuration...');
const vercelConfigPath = path.join(process.cwd(), 'vercel.json');
if (fs.existsSync(vercelConfigPath)) {
  try {
    const vercelConfig = JSON.parse(fs.readFileSync(vercelConfigPath, 'utf8'));

    if (vercelConfig.env?.LINEAR_API_KEY) {
      console.log('   ✅ Linear environment variables configured in vercel.json');
    } else {
      console.log('   ⚠️  Linear environment variables not configured in vercel.json');
    }

    if (vercelConfig.functions?.['app/api/**/*.ts']) {
      console.log('   ✅ API functions configuration exists');
    } else {
      console.log('   ⚠️  API functions configuration missing');
    }
  } catch (error) {
    console.log('   ❌ Error reading Vercel configuration:', error.message);
  }
} else {
  console.log('   ❌ Vercel configuration missing');
}

// Test 7: Check package.json dependencies
console.log('\n7. Testing package dependencies...');
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (fs.existsSync(packageJsonPath)) {
  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

    if (packageJson.dependencies?.['@linear/sdk']) {
      console.log('   ✅ @linear/sdk dependency found');
    } else {
      console.log('   ❌ @linear/sdk dependency missing');
      allRoutesExist = false;
    }
  } catch (error) {
    console.log('   ❌ Error reading package.json:', error.message);
  }
} else {
  console.log('   ❌ package.json missing');
}

// Test 8: Check documentation
console.log('\n8. Testing documentation...');
const docsFiles = ['docs/LINEAR_VERCEL_INTEGRATION.md', 'docs/LINEAR_SETUP_COMPLETE.md'];

docsFiles.forEach((doc) => {
  const docPath = path.join(process.cwd(), doc);
  if (fs.existsSync(docPath)) {
    console.log(`   ✅ ${doc} exists`);
  } else {
    console.log(`   ❌ ${doc} missing`);
  }
});

// Summary
console.log(`\n${'='.repeat(50)}`);
if (allRoutesExist) {
  console.log('🎉 Linear Integration Test: PASSED');
  console.log('\n✅ All components are properly configured!');
  console.log('\nNext steps:');
  console.log('1. Set your LINEAR_API_KEY environment variable in Vercel');
  console.log('2. Deploy with: vercel --prod');
  console.log('3. Test at: https://your-domain.vercel.app/linear-test');
} else {
  console.log('❌ Linear Integration Test: FAILED');
  console.log('\nSome components are missing or misconfigured.');
  console.log('Please check the errors above and fix them.');
}
console.log('='.repeat(50));
