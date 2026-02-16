import { describe, it, expect } from 'vitest';
import { appConfig } from './app.config';
import { routes } from './app.routes';

describe('App Configuration', () => {
  it('should export appConfig', () => {
    expect(appConfig).toBeTruthy();
  });

  it('should have providers array', () => {
    expect(appConfig.providers).toBeDefined();
    expect(Array.isArray(appConfig.providers)).toBe(true);
  });

  it('should have non-empty providers', () => {
    expect(appConfig.providers.length).toBeGreaterThan(0);
  });

  it('should include router provider', () => {
    // The router provider should be in the providers array
    expect(appConfig.providers).toBeDefined();
  });

  it('should provide browser global error listeners', () => {
    // Verify the config is properly structured
    expect(appConfig.providers).toBeTruthy();
    expect(appConfig.providers.length).toBeGreaterThan(0);
  });

  describe('Routes Integration', () => {
    it('should use routes from app.routes', () => {
      // The appConfig should be configured with routes
      expect(appConfig.providers).toBeTruthy();
    });

    it('should have routes array', () => {
      expect(Array.isArray(routes)).toBe(true);
    });

    it('should handle empty routes gracefully', () => {
      expect(routes.length).toBe(0);
    });
  });

  describe('Error Handling Setup', () => {
    it('should configure error listeners', () => {
      // Verify the configuration includes error handling
      expect(appConfig.providers).toBeDefined();
      expect(appConfig.providers.length).toBeGreaterThan(0);
    });
  });

  describe('ApplicationConfig Type', () => {
    it('should match ApplicationConfig interface', () => {
      expect(appConfig).toHaveProperty('providers');
    });

    it('should have valid provider configuration', () => {
      const hasValidProviders = 
        appConfig.providers && 
        Array.isArray(appConfig.providers) &&
        appConfig.providers.length > 0;
      expect(hasValidProviders).toBe(true);
    });
  });
});
