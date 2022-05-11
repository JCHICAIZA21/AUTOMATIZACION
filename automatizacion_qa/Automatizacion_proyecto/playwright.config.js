// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
 // workers: 3,
  testMatch: /.*.js/,
  timeout: 300000,
  testDir: 'tests',
  //reporter: 'line',
  reporter: 'list',
  //reporter: [ ['html', { outputFolder: 'my-report' }] ],
  //reporter: 'experimental-allure-playwright',
  globalSetup: require.resolve('./global-setup'),
  //retries: 1,
  use: {
    baseURL: 'http://10.11.252.31:8080',
    storageState: 'tokencredenciales.json',
    headless: false,
    //viewport: { width: 100, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
    screenshot: 'on',
    trace: 'on-first-retry',
    launchOptions: {
      slowMo: 50
    },
  },
  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
 /*  webServer: {
    command: 'npm run start',
    port: 3000,
  }, */
};

module.exports = config;

