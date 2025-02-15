import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/api/tests/',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://reqres.in/',
    trace: 'on-first-retry',
  },
});
