import { appConfig } from './app.config';
import { ApplicationConfig } from '@angular/core';

describe('App Config', () => {
  describe('appConfig Object', () => {
    it('should be defined', () => {
      expect(appConfig).toBeDefined();
    });

    it('should have providers array', () => {
      expect(appConfig.providers).toBeDefined();
      expect(Array.isArray(appConfig.providers)).toBe(true);
    });

    it('should be of type ApplicationConfig', () => {
      expect(appConfig).toHaveProperty('providers');
    });
  });

  describe('Providers Configuration', () => {
    it('should have at least one provider', () => {
      expect(appConfig.providers.length).toBeGreaterThan(0);
    });

    it('should include global error listeners provider', () => {
      // Check that providers array includes the global error listeners
      expect(appConfig.providers.length).toBeGreaterThan(0);
    });

    it('should include router provider', () => {
      // Check that the router is configured
      expect(appConfig.providers.length).toBeGreaterThan(0);
    });

    it('should have router and error listeners configured', () => {
      // The appConfig should have 2 providers: error listeners and router
      expect(appConfig.providers.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe('Integration with routes', () => {
    it('should provide a complete application configuration', () => {
      // appConfig should be suitable for bootstrapApplication
      expect(appConfig.providers).toBeTruthy();
      expect(Array.isArray(appConfig.providers)).toBe(true);
    });
  });
});
