import { defineConfig } from 'vitest/config';
import angular from 'vitest-environment-angular';

export default defineConfig({
  test: {
    globals: true,
    environment: angular,
    setupFiles: [
      './src/test-setup.ts'
    ],
    include: [
      'src/**/*.spec.ts'
    ],
    css: false,
  },
});
