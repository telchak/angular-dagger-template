import { defineConfig } from 'vitest/config';
import swc from 'vite-plugin-swc';

export default defineConfig({
  plugins: [swc()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test-setup.ts',
    include: ['**/*.spec.ts'],
  },
});
