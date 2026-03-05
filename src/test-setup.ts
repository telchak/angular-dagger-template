import 'zone.js'; // Polyfill for asynchronous operations, required by Angular
import 'zone.js/testing'; // Zone.js testing utilities for Angular's async/fakeAsync

import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// Initialize the Angular testing environment
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);
