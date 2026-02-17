import { defineConfig } from 'vitest/config';
import angular from '@analogjs/platform';

export default defineConfig({
  plugins: [angular()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [],
    include: ['**/*.spec.ts'],
    exclude: ['node_modules', 'dist'],
  },
});
