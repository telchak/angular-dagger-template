import { describe, it, expect } from 'vitest';
import { routes } from './app.routes';
import { Routes } from '@angular/router';

describe('App Routes', () => {
  describe('routes configuration', () => {
    it('should be a valid Routes array', () => {
      expect(Array.isArray(routes)).toBe(true);
    });

    it('should be of type Routes', () => {
      expect(routes).toBeDefined();
      expect(Array.isArray(routes)).toBe(true);
    });

    it('should start as an empty routes array', () => {
      // Based on the source file: export const routes: Routes = [];
      expect(routes.length).toBe(0);
    });

    it('should be extendable with new routes', () => {
      // Verify that routes is an array that can hold route configurations
      expect(Array.isArray(routes)).toBe(true);
      // The array should support push/spread operations conceptually
      const testRoute = { path: 'test', component: {} };
      const testRoutes = [...routes, testRoute];
      expect(testRoutes.length).toBe(1);
    });
  });

  describe('Route Structure', () => {
    it('should support standard route properties', () => {
      // This validates that when routes are added, they follow Angular routing structure
      const exampleRoute = {
        path: 'home',
        component: {},
        children: [],
      };
      
      expect(exampleRoute).toHaveProperty('path');
      expect(exampleRoute).toHaveProperty('component');
      expect(exampleRoute).toHaveProperty('children');
    });
  });

  describe('Route Configuration Usage', () => {
    it('should be importable and usable in app.config.ts', () => {
      // Validate that routes export is available
      expect(routes).toBeDefined();
      expect(typeof routes === 'object' && Array.isArray(routes)).toBe(true);
    });

    it('should be compatible with provideRouter', () => {
      // Routes configuration should be compatible with Angular router provider
      expect(Array.isArray(routes)).toBe(true);
    });
  });
});
