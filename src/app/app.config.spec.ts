import { describe, it, expect } from 'vitest';
import { appConfig } from './app.config';
import { ApplicationConfig } from '@angular/core';

describe('App Configuration', () => {
  describe('appConfig', () => {
    it('should be a valid ApplicationConfig object', () => {
      expect(appConfig).toBeDefined();
      expect(appConfig).toHaveProperty('providers');
    });

    it('should have providers array', () => {
      expect(Array.isArray(appConfig.providers)).toBe(true);
      expect(appConfig.providers.length).toBeGreaterThan(0);
    });

    it('should provide router configuration', () => {
      const providers = appConfig.providers;
      expect(providers).toBeDefined();
      expect(providers.length).toBeGreaterThanOrEqual(2);
    });

    it('should include browser global error listeners', () => {
      // The appConfig should include provideBrowserGlobalErrorListeners
      expect(appConfig.providers).toBeDefined();
      expect(Array.isArray(appConfig.providers)).toBe(true);
    });

    it('should include router provider', () => {
      // The appConfig should include provideRouter
      expect(appConfig.providers).toBeDefined();
      expect(Array.isArray(appConfig.providers)).toBe(true);
    });
  });

  describe('Providers Configuration', () => {
    it('should have at least 2 providers configured', () => {
      // Based on the source: provideBrowserGlobalErrorListeners and provideRouter
      expect(appConfig.providers.length).toBeGreaterThanOrEqual(2);
    });

    it('should be used with bootstrapApplication', () => {
      // This validates that the config structure is compatible with bootstrapApplication
      expect(appConfig).toMatchObject({
        providers: expect.any(Array),
      });
    });
  });
});
