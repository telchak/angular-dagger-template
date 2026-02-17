import { describe, it, expect } from 'vitest';
import { appConfig } from './app.config';
import { ApplicationConfig } from '@angular/core';

describe('App Configuration', () => {
  it('should provide a valid ApplicationConfig', () => {
    expect(appConfig).toBeDefined();
    expect((appConfig as ApplicationConfig).providers).toBeDefined();
    expect(Array.isArray((appConfig as ApplicationConfig).providers)).toBe(true);
  });

  it('should include providers array', () => {
    const config = appConfig as ApplicationConfig;
    expect(config.providers.length).toBeGreaterThan(0);
  });

  it('should provide Router functionality', () => {
    const config = appConfig as ApplicationConfig;
    const providers = config.providers.map((p: any) => p.toString?.()).join(',');
    // Verify that router providers are included (provideRouter)
    expect(providers).toMatch(/router/i);
  });

  it('should provide global error listeners', () => {
    const config = appConfig as ApplicationConfig;
    const providers = config.providers.map((p: any) => p.toString?.()).join(',');
    // Verify that error listener providers are included
    expect(providers).toMatch(/error/i);
  });
});
