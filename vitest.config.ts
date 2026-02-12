import { defineConfig } from 'vitest/config';
import angular from '@angular/build';

export default defineConfig({
  plugins: [angular.AngularWebpack({})],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.spec.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/**/*.spec.ts',
      ],
    },
    deps: {
      inline: ['@angular'],
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
