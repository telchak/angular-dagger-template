import { describe, it, expect } from 'vitest';
import { routes } from './app.routes';
import { Routes } from '@angular/router';

describe('App Routes', () => {
  it('should define routes as a Routes array', () => {
    expect(routes).toBeDefined();
    expect(Array.isArray(routes)).toBe(true);
  });

  it('should initialize as an empty routes array', () => {
    expect(routes).toEqual([]);
  });

  it('should be of type Routes', () => {
    const testRoutes: Routes = routes;
    expect(testRoutes).toBeDefined();
  });

  it('should allow adding new routes', () => {
    // Note: This is a structural test to ensure the routes array structure is correct
    const newRoute = {
      path: 'test',
      component: class TestComponent {},
    };

    // Verify that the structure is compatible with Routes
    const testRoutes: Routes = [...routes, newRoute as any];
    expect(testRoutes.length).toBe(1);
  });
});
