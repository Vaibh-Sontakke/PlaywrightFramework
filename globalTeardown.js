const { execSync } = require('child_process');
const fs = require('fs');

async function globalTeardown() {
  const resultsDir = 'allure-results';
  const reportDir = 'allure-report';

  if (!fs.existsSync(resultsDir)) {
    console.warn(`⚠️ Directory "${resultsDir}" does not exist. Skipping report generation.`);
    return;
  }

  try {
    console.log('📦 Generating Allure report...');
    execSync(`npx allure generate ${resultsDir} --clean  -o ${reportDir}`, { stdio: 'inherit' });

    // Commented out to avoid issue
    // console.log('🌐 Opening Allure report in browser...');
    // execSync(`npx allure open ${reportDir}`, { stdio: 'inherit' });
  } catch (error) {
    console.error('❌ Failed to generate Allure report:', error);
  }
}

module.exports = globalTeardown;
