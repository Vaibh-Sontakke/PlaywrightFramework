const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Generate timestamp
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const resultsDir = `allure-results-${timestamp}`;

// Create the folder (optional, Playwright will create it)
if (!fs.existsSync(resultsDir)) {
  fs.mkdirSync(resultsDir);
}

// Run tests with custom resultsDir using environment variable
process.env.RESULTS_DIR = resultsDir;

execSync(`npx playwright test`, { stdio: 'inherit' });

// Generate Allure report
execSync(`npx allure generate ${resultsDir} --clean -o allure-report`, { stdio: 'inherit' });
execSync(`npx allure open allure-report`, { stdio: 'inherit' });