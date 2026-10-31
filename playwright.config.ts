import { defineConfig, devices } from '@playwright/test';

const port = 4173;
// Set BASE_URL to test a deployed site instead, e.g. `BASE_URL=https://example.com npx playwright test`.
const baseURL = process.env.BASE_URL;

// Tests run against the static build in `out/`. Run `npm run test:e2e`, which builds first.
export default defineConfig({
  testDir: 'tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  // More parallel browsers starve this machine: assertions time out and Firefox crashes on teardown.
  workers: 3,
  reporter: 'list',
  // Headroom for slow runs; the default 5s was hit under load without any real failure.
  expect: { timeout: 10_000 },
  use: {
    baseURL: baseURL ?? `http://localhost:${port}`,
    // Keep evidence when a test fails, so an intermittent failure can be diagnosed.
    trace: 'retain-on-failure',
  },
  // Browser coverage from the approved scope: Chrome, Firefox and Safari on iOS.
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'mobile-safari', use: { ...devices['iPhone 13'] } },
  ],
  webServer: baseURL
    ? undefined
    : {
        command: 'node scripts/serve-out.mjs',
        port,
        reuseExistingServer: !process.env.CI,
      },
});
