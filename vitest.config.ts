import { defineConfig } from 'vitest/config';
import { getVitestConfig } from '@angular/build';

export default defineConfig(
  getVitestConfig({
    browsers: ['jsdom'],
  })
);
