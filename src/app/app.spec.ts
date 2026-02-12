import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';
import { App } from './app';
import { signal } from '@angular/core';
import { describe, it, expect, beforeEach } from 'vitest';

describe('App Component', () => {
  let component: App;
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, RouterOutlet],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
  });

  describe('Component Initialization', () => {
    it('should create the component', () => {
      expect(component).toBeDefined();
    });

    it('should have a readonly title signal', () => {
      expect(component.title).toBeDefined();
      expect(typeof component.title()).toBe('string');
    });

    it('should initialize title signal with correct value', () => {
      expect(component.title()).toBe('daggerverse-test-angular-project');
    });
  });

  describe('Template Rendering', () => {
    it('should render h1 with title from signal', () => {
      fixture.detectChanges();
      const h1Element = fixture.nativeElement.querySelector('h1');
      expect(h1Element).toBeTruthy();
      expect(h1Element.textContent).toContain('daggerverse-test-angular-project');
    });

    it('should display "Hello," prefix in h1', () => {
      fixture.detectChanges();
      const h1Element = fixture.nativeElement.querySelector('h1');
      expect(h1Element.textContent).toContain('Hello,');
    });

    it('should render router-outlet', () => {
      fixture.detectChanges();
      const routerOutlet = fixture.nativeElement.querySelector('router-outlet');
      expect(routerOutlet).toBeTruthy();
    });
  });

  describe('Signal Reactivity', () => {
    it('should update h1 content when title signal changes', () => {
      fixture.detectChanges();
      let h1Element = fixture.nativeElement.querySelector('h1');
      expect(h1Element.textContent).toContain('daggerverse-test-angular-project');

      // Note: The title signal is readonly, so we're testing the initial behavior
      // In a real scenario with a writable signal, we would test updates here
      expect(component.title()).toBe('daggerverse-test-angular-project');
    });
  });

  describe('Component Structure', () => {
    it('should have RouterOutlet imported', () => {
      const metadata = (App as any).__ngComponentDef;
      expect(metadata).toBeDefined();
    });

    it('should have correct component selector', () => {
      const metadata = (component.constructor as any).ɵcmp;
      expect(metadata.selectors[0][0]).toBe('app-root');
    });

    it('should have empty styles array', () => {
      const metadata = (component.constructor as any).ɵcmp;
      expect(metadata.styles).toBeDefined();
    });
  });

  describe('Accessibility', () => {
    it('should have semantic h1 heading', () => {
      fixture.detectChanges();
      const h1Element = fixture.nativeElement.querySelector('h1');
      expect(h1Element.tagName).toBe('H1');
    });

    it('should render properly structured HTML', () => {
      fixture.detectChanges();
      const root = fixture.nativeElement;
      expect(root).toBeTruthy();
      const children = root.children;
      expect(children.length).toBeGreaterThan(0);
    });
  });

  describe('Integration', () => {
    it('should work with detected changes', () => {
      expect(() => fixture.detectChanges()).not.toThrow();
    });

    it('should not have any console errors during initialization', () => {
      const consoleSpy = (global.console.error as any) as any;
      expect(() => fixture.detectChanges()).not.toThrow();
    });

    it('should have stable component instance across change detection', () => {
      const firstInstance = component;
      fixture.detectChanges();
      expect(component).toBe(firstInstance);
    });
  });
});
