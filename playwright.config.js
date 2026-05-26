// @ts-check
/// <reference types="node" />
import { defineConfig, devices } from '@playwright/test';
/** @type {'chromium' | 'firefox' | 'webkit'} */
// @ts-ignore
const targetedBrowser = process.env.BROWSER || 'chromium';

/**
 * @see https://playwright.dev/docs/test-configuration
 */

const browserDevices = {
  chromium: devices['Desktop Chrome'],
  firefox: devices['Desktop Firefox'],
  webkit: devices['Desktop Safari'],
};

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    ...browserDevices[targetedBrowser],
    trace: 'on',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure'
  },
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'loginFlow',
      testDir: './tests/login',
    },
    {
      name: 'dataTableFlow',
      testDir: './tests/dataTable',
    },
    {
      name: 'dynamicContentFlow',
      testDir: './tests/dynamicContent',
    },
    {
      name: 'formFlow',
      testDir: './tests/formElements',
    },
    {
      name: 'homePageFlow',
      testDir: './tests/homepage',
    },
    {
      name: 'modalFlow',
      testDir: './tests/modalsDialogs',
    },
    {
      name: 'multiStepFormFlow',
      testDir: './tests/multiStepForm',
    }
  ],
});

