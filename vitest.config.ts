import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['zone.js/dist/zone-testing'],
    include: ['**/*.spec.ts'],
  },
});