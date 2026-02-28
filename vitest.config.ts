import { defineConfig } from 'vitest/config';
import angular from '@angular-eslint/builder/plugins/vite';

export default defineConfig({
  plugins: [angular()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['zone.js/dist/zone-testing'],
    include: ['**/*.spec.ts'],
  },
});
