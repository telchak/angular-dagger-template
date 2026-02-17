import { defineConfig } from 'vitest/config';
import { angular } from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [angular()],
  test: {
    globals: true,
    setupFiles: ['src/test.ts'],
    environment: 'happy-dom',
    include: ['**/*.spec.ts'],
  },
});