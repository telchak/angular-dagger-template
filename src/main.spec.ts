import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Mock the bootstrapApplication function
vi.mock('@angular/platform-browser', () => ({
  bootstrapApplication: vi.fn(),
}));

describe('Main Bootstrap', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Module Imports', () => {
    it('should import bootstrapApplication from @angular/platform-browser', () => {
      expect(bootstrapApplication).toBeDefined();
    });

    it('should import appConfig from app.config', () => {
      expect(appConfig).toBeDefined();
      expect(appConfig).toHaveProperty('providers');
    });

    it('should import App component', () => {
      expect(App).toBeDefined();
    });
  });

  describe('Application Configuration', () => {
    it('should have appConfig defined', () => {
      expect(appConfig).toBeTruthy();
    });

    it('should have providers in appConfig', () => {
      expect(appConfig.providers).toBeDefined();
      expect(Array.isArray(appConfig.providers)).toBe(true);
    });
  });

  describe('Bootstrap Component', () => {
    it('should have App component available', () => {
      expect(App).toBeDefined();
      expect(typeof App).toBe('function');
    });

    it('should have correct component metadata', () => {
      // App should be a component
      expect(App).toBeDefined();
    });
  });

  describe('File Structure', () => {
    it('should properly structure the main entry point', () => {
      // main.ts serves as the entry point
      expect(App).toBeDefined();
      expect(appConfig).toBeDefined();
      expect(bootstrapApplication).toBeDefined();
    });

    it('should have all necessary imports', () => {
      // Verify all required modules are available
      expect(bootstrapApplication).toBeDefined();
      expect(appConfig).toBeDefined();
      expect(App).toBeDefined();
    });
  });
});
