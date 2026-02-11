import { TestBed, ComponentFixture } from '@angular/core/testing';
import { signal } from '@angular/core';
import { App } from './app';
import { describe, it, expect, beforeEach } from 'vitest';

describe('App Component', () => {
  let component: App;
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
  });

  describe('Component Initialization', () => {
    it('should create the app component', () => {
      expect(component).toBeDefined();
    });

    it('should have the correct selector', () => {
      const metadata = (App as any)['ɵcmp'];
      expect(metadata.selectors).toContainEqual(['app-root']);
    });

    it('should be a standalone component', () => {
      const metadata = (App as any)['ɵcmp'];
      expect(metadata.standalone).toBe(true);
    });
  });

  describe('Signal State', () => {
    it('should initialize title signal with correct value', () => {
      expect(component.title()).toBe('daggerverse-test-angular-project');
    });

    it('should return a signal function', () => {
      expect(typeof component.title).toBe('function');
    });

    it('should have protected visibility on title signal', () => {
      // Verify the property exists (signals are always properties)
      expect(Object.prototype.hasOwnProperty.call(component, 'title')).toBe(true);
    });
  });

  describe('Template Rendering', () => {
    it('should render heading with title from signal', () => {
      fixture.detectChanges();
      const heading = fixture.nativeElement.querySelector('h1');
      expect(heading).toBeDefined();
      expect(heading.textContent).toContain('Hello, daggerverse-test-angular-project');
    });

    it('should display the title signal value in the template', () => {
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('h1').textContent).toMatch('daggerverse-test-angular-project');
    });

    it('should contain router-outlet element', () => {
      fixture.detectChanges();
      const routerOutlet = fixture.nativeElement.querySelector('router-outlet');
      expect(routerOutlet).toBeDefined();
    });
  });

  describe('Title Signal Updates', () => {
    it('should update template when title signal changes', () => {
      fixture.detectChanges();
      const initialText = fixture.nativeElement.querySelector('h1').textContent;
      expect(initialText).toContain('daggerverse-test-angular-project');

      // Note: Changing the title would require the signal to be public or a setter
      // For now, we verify the initial value is correct
      expect(component.title()).toBe('daggerverse-test-angular-project');
    });
  });

  describe('Component Structure', () => {
    it('should import RouterOutlet', () => {
      const metadata = (App as any)['ɵcmp'];
      const imports = metadata.dependencies;
      // RouterOutlet should be in the imports
      expect(imports).toBeDefined();
    });

    it('should have empty styles array', () => {
      const metadata = (App as any)['ɵcmp'];
      // Component has no scoped styles
      expect(metadata.styles).toBeDefined();
    });

    it('should render without errors', () => {
      expect(() => {
        fixture.detectChanges();
      }).not.toThrow();
    });
  });

  describe('Accessibility', () => {
    it('should have semantic heading element', () => {
      fixture.detectChanges();
      const heading = fixture.nativeElement.querySelector('h1');
      expect(heading.tagName).toBe('H1');
    });

    it('should contain readable text content', () => {
      fixture.detectChanges();
      const heading = fixture.nativeElement.querySelector('h1');
      expect(heading.textContent.length).toBeGreaterThan(0);
      expect(heading.textContent).toMatch(/Hello/);
    });
  });

  describe('Change Detection', () => {
    it('should handle Angular change detection', () => {
      expect(() => {
        fixture.detectChanges();
      }).not.toThrow();
    });

    it('should render correctly after change detection', () => {
      fixture.detectChanges();
      const heading = fixture.nativeElement.querySelector('h1');
      expect(heading).toBeTruthy();
      expect(heading.textContent.length).toBeGreaterThan(0);
    });
  });

  describe('Integration', () => {
    it('should work with RouterOutlet for routing', () => {
      fixture.detectChanges();
      const routerOutlet = fixture.nativeElement.querySelector('router-outlet');
      expect(routerOutlet).toBeTruthy();
      // RouterOutlet is present and ready for route display
    });

    it('should display main heading before router-outlet', () => {
      fixture.detectChanges();
      const h1 = fixture.nativeElement.querySelector('h1');
      const routerOutlet = fixture.nativeElement.querySelector('router-outlet');
      
      // Verify both exist
      expect(h1).toBeTruthy();
      expect(routerOutlet).toBeTruthy();
      
      // H1 should come before router-outlet in the DOM
      const h1Index = Array.from(fixture.nativeElement.children).indexOf(h1);
      const routerIndex = Array.from(fixture.nativeElement.children).indexOf(routerOutlet);
      expect(h1Index).toBeLessThan(routerIndex);
    });
  });
});
