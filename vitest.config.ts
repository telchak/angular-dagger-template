import { defineConfig } from 'vitest/config';
import angular from 'vite-plugin-angular';

export default defineConfig({
  plugins: [angular()],
  test: {
    environment: 'jsdom',
    setupFiles: [
      './src/test.ts'
    ],
  },
});
