import { defineConfig } from 'vitest/config';
import { browserSync } from 'vite-plugin-browser-sync';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'dist/',
      ]
    }
  },
  plugins: []
});
