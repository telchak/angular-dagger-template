import { defineConfig } from 'vitest/config';
import angular from '@angular/vite-plugin-angular'; // Requires installation of @angular/vite-plugin-angular

export default defineConfig({
  plugins: [
    angular(), // Enables Angular-specific compilation and setup for Vite/Vitest
  ],
  test: {
    environment: 'jsdom', // Provides a browser-like environment for DOM testing
    globals: true, // Makes Vitest's APIs (e.g., describe, it, expect) globally available
    setupFiles: ['src/test-setup.ts'], // Path to the file that initializes Angular's testing environment
    include: ['**/*.spec.ts'], // Specifies the glob pattern for test files
  },
});
