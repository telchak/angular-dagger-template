
import { defineConfig } from 'vitest/config';
import angular from 'vite-plugin-angular';

export default defineConfig({
  plugins: [angular()],
  test: {
    browser: {
      enabled: true,
      name: 'chromium', // or 'firefox', 'webkit'
      provider: 'playwright',
    },
    include: ['src/**/*.spec.ts'],
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
});
