// vitest.setup.ts
// Uncomment this line in vitest.config.ts if you want to use this setup file:
// setupFiles: ['./vitest.setup.ts']

import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import 'zone.js';
import 'zone.js/testing';

// Initialize the Angular testing environment
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

// Optional: Add custom matchers or global test utilities here
beforeEach(() => {
  // Reset or setup code that runs before each test
});

afterEach(() => {
  // Cleanup code that runs after each test
});
