import { defineConfig } from 'vitest/config';
import { getVitestConfig } from '@angular/build';

export default defineConfig(
  getVitestConfig({
    browsers: ['chrome'],
    codeCoverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      exclude: [
        'node_modules/',
        'src/test-setup.ts',
      ]
    },
  })
);
