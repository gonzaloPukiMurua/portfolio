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
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: 'node scripts/serve-out.mjs',
    port,
    reuseExistingServer: !process.env.CI,
  },
});
