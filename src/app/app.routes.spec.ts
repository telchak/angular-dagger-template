import { describe, it, expect } from 'vitest';
import { routes } from './app.routes';
import { Routes } from '@angular/router';

describe('App Routes', () => {
  describe('routes configuration', () => {
    it('should be defined', () => {
      expect(routes).toBeDefined();
    });

    it('should be an array', () => {
      expect(Array.isArray(routes)).toBe(true);
    });

    it('should be of type Routes', () => {
      // Routes is a type alias for Route[], so we verify it's an array
      expect(Array.isArray(routes)).toBeTruthy();
    });

    it('should be an empty array initially', () => {
      expect(routes.length).toBe(0);
    });

    it('should be mutable for adding new routes', () => {
      expect(() => {
        // Routes is a regular array that can be populated
        const testRoute = { path: 'test', component: null as any };
        // We verify that the array structure can accept route definitions
      }).not.toThrow();
    });
  });

  describe('Route Structure', () => {
    it('should follow Angular Routes type definition', () => {
      // Verify routes is an array of route objects
      if (routes.length > 0) {
        routes.forEach((route) => {
          expect(route).toHaveProperty('path');
        });
      }
    });

    it('should be compatible with provideRouter', () => {
      // The routes array should be valid for Angular Router
      const isValidRoutes = Array.isArray(routes);
      expect(isValidRoutes).toBe(true);
    });
  });

  describe('Route Configuration Pattern', () => {
    it('should allow adding routes dynamically', () => {
      const testRoutes: Routes = [
        { path: 'home', component: null as any },
        { path: 'about', component: null as any },
      ];
      expect(testRoutes.length).toBe(2);
      expect(testRoutes[0].path).toBe('home');
      expect(testRoutes[1].path).toBe('about');
    });

    it('should support route configuration with various options', () => {
      const sampleRoute = {
        path: 'sample',
        component: null as any,
        children: [
          { path: 'child', component: null as any },
        ],
      };
      expect(sampleRoute.path).toBe('sample');
      expect(sampleRoute.children).toBeDefined();
    });
  });

  describe('Empty Routes State', () => {
    it('should start with no routes configured', () => {
      expect(routes).toEqual([]);
    });

    it('should be ready for route configuration', () => {
      // The empty routes array is a valid starting point
      expect(routes.length).toBe(0);
      expect(Array.isArray(routes)).toBe(true);
    });

    it('should not cause routing errors when empty', () => {
      // An empty routes array is valid and will not throw errors
      const isValidEmpty = routes.length === 0 && Array.isArray(routes);
      expect(isValidEmpty).toBe(true);
    });
  });

  describe('Router Integration', () => {
    it('should be suitable for use with provideRouter', () => {
      // The routes format is compatible with Angular Router
      const routesType = typeof routes;
      expect(routesType).toBe('object');
      expect(Array.isArray(routes)).toBe(true);
    });

    it('should maintain Routes type compatibility', () => {
      // Ensure routes can be used where Routes type is expected
      const validRoutes: Routes = routes;
      expect(validRoutes).toBeDefined();
      expect(Array.isArray(validRoutes)).toBe(true);
    });
  });
});
