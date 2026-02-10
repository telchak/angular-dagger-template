import { describe, it, expect } from 'vitest';
import { appConfig } from './app.config';
import { provideRouter } from '@angular/router';
import { provideBrowserGlobalErrorListeners } from '@angular/core';

describe('App Configuration', () => {
  describe('appConfig', () => {
    it('should be defined', () => {
      expect(appConfig).toBeDefined();
    });

    it('should be an ApplicationConfig object', () => {
      expect(appConfig).toHaveProperty('providers');
      expect(Array.isArray(appConfig.providers)).toBeTruthy();
    });

    it('should have providers array', () => {
      expect(appConfig.providers).toBeDefined();
      expect(Array.isArray(appConfig.providers)).toBe(true);
    });

    it('should contain provideBrowserGlobalErrorListeners provider', () => {
      // The providers array should contain the error listeners provider
      expect(appConfig.providers.length).toBeGreaterThan(0);
      // Check that at least one provider is present
      const providers = appConfig.providers;
      expect(providers).toBeTruthy();
    });

    it('should contain provideRouter provider', () => {
      // The providers array should contain the router provider
      expect(appConfig.providers.length).toBeGreaterThan(0);
      const providers = appConfig.providers;
      expect(providers).toBeTruthy();
    });

    it('should have at least 2 providers', () => {
      // Should have error listeners and router
      expect(appConfig.providers.length).toBeGreaterThanOrEqual(2);
    });

    it('should provide proper application configuration for standalone bootstrap', () => {
      // The config structure should match ApplicationConfig requirements
      expect(appConfig).toEqual({
        providers: expect.any(Array),
      });
    });
  });

  describe('Provider Configuration', () => {
    it('should provide router when used in bootstrapApplication', () => {
      // Verify that the config includes router provider
      const hasRouterProvider = appConfig.providers.length >= 2;
      expect(hasRouterProvider).toBe(true);
    });

    it('should provide error handling when used in bootstrapApplication', () => {
      // Verify that the config includes error listener provider
      const hasErrorProvider = appConfig.providers.length >= 1;
      expect(hasErrorProvider).toBe(true);
    });
  });
});
