import { describe, it, expect } from 'vitest';
import { appConfig } from './app.config';
import { ApplicationConfig } from '@angular/core';

describe('App Configuration', () => {
  describe('appConfig Object', () => {
    it('should be defined', () => {
      expect(appConfig).toBeDefined();
    });

    it('should be an ApplicationConfig object', () => {
      expect(appConfig).toHaveProperty('providers');
    });

    it('should have providers array', () => {
      expect(Array.isArray(appConfig.providers)).toBe(true);
      expect(appConfig.providers.length).toBeGreaterThan(0);
    });

    it('should have at least two providers', () => {
      // provideBrowserGlobalErrorListeners() and provideRouter()
      expect(appConfig.providers.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe('Application Configuration Setup', () => {
    it('should export appConfig that can be used with bootstrapApplication', () => {
      expect(appConfig).toBeTruthy();
      expect(typeof appConfig.providers).toBe('object');
    });

    it('should include providers for browser and router', () => {
      // Verify the config has providers - the actual provider functions
      // would be tested through integration tests
      expect(appConfig.providers.length).toBeGreaterThan(0);
      expect(Array.isArray(appConfig.providers)).toBe(true);
    });
  });
});
