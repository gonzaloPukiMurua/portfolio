import { defineConfig, devices } from '@playwright/test';

const port = 4173;

// Tests run against the static build in `out/`. Run `npm run test:e2e`, which builds first.
export default defineConfig({
  testDir: 'tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  reporter: 'list',
  use: {
    baseURL: `http://localhost:${port}`,
  },
  // Browser coverage from the approved scope: Chrome, Firefox and Safari on iOS.
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'mobile-safari', use: { ...devices['iPhone 13'] } },
  ],
  webServer: {
    command: 'node scripts/serve-out.mjs',
    port,
    reuseExistingServer: !process.env.CI,
  },
});
