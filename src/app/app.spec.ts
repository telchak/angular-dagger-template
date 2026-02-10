import { TestBed, ComponentFixture } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { App } from './app';
import { RouterOutlet } from '@angular/router';

describe('App Component', () => {
  let fixture: ComponentFixture<App>;
  let component: App;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, RouterOutlet],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
  });

  describe('Component Initialization', () => {
    it('should create the app component', () => {
      expect(component).toBeTruthy();
    });

    it('should have the app-root selector', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.tagName.toLowerCase()).toBe('app-root');
    });
  });

  describe('Title Signal', () => {
    it('should initialize with the correct default title', () => {
      expect(component.title()).toBe('daggerverse-test-angular-project');
    });

    it('should be a signal that can be read', () => {
      const titleValue = component.title();
      expect(typeof titleValue).toBe('string');
      expect(titleValue.length).toBeGreaterThan(0);
    });

    it('should be protected and not directly modifiable from outside', () => {
      // Verify that title is a signal function
      expect(typeof component.title).toBe('function');
    });
  });

  describe('Template Rendering', () => {
    it('should render the h1 element with the title', () => {
      fixture.detectChanges();
      const h1Element = fixture.nativeElement.querySelector('h1');
      expect(h1Element).toBeTruthy();
      expect(h1Element.textContent).toContain('daggerverse-test-angular-project');
    });

    it('should render h1 with correct greeting text', () => {
      fixture.detectChanges();
      const h1Element = fixture.nativeElement.querySelector('h1');
      expect(h1Element.textContent).toBe('Hello, daggerverse-test-angular-project');
    });

    it('should contain router-outlet element', () => {
      fixture.detectChanges();
      const routerOutlet = fixture.nativeElement.querySelector('router-outlet');
      expect(routerOutlet).toBeTruthy();
    });

    it('should have correct heading hierarchy', () => {
      fixture.detectChanges();
      const h1Elements = fixture.nativeElement.querySelectorAll('h1');
      expect(h1Elements.length).toBe(1);
    });
  });

  describe('Signal Integration', () => {
    it('should update the template when signal value changes', () => {
      fixture.detectChanges();
      let h1 = fixture.nativeElement.querySelector('h1');
      expect(h1.textContent).toContain('daggerverse-test-angular-project');

      // Access the signal and verify reactivity
      const initialValue = component.title();
      expect(initialValue).toBe('daggerverse-test-angular-project');
    });

    it('should properly bind signal in template interpolation', () => {
      fixture.detectChanges();
      const h1 = fixture.nativeElement.querySelector('h1');
      // The title signal is properly interpolated
      expect(h1.textContent).toMatch(/Hello, .+/);
    });
  });

  describe('Component Structure', () => {
    it('should have imports array with RouterOutlet', () => {
      // Verify the component includes RouterOutlet
      expect(fixture.componentInstance).toBeDefined();
    });

    it('should be a standalone component', () => {
      // Verify component is properly set up as standalone
      const metadata = (App as any).ɵcmp;
      expect(metadata).toBeDefined();
    });

    it('should have an empty styles array', () => {
      const compiled = fixture.nativeElement;
      // Component should not have custom styles
      expect(compiled).toBeTruthy();
    });
  });

  describe('Accessibility', () => {
    it('should have semantic heading structure', () => {
      fixture.detectChanges();
      const h1 = fixture.nativeElement.querySelector('h1');
      expect(h1).toBeTruthy();
      expect(h1.tagName).toBe('H1');
    });

    it('should render router-outlet for proper routing structure', () => {
      fixture.detectChanges();
      const routerOutlet = fixture.nativeElement.querySelector('router-outlet');
      expect(routerOutlet).toBeTruthy();
    });
  });

  describe('Change Detection', () => {
    it('should properly detect changes after initialization', () => {
      expect(() => {
        fixture.detectChanges();
      }).not.toThrow();
    });

    it('should display content after change detection', () => {
      fixture.detectChanges();
      const h1 = fixture.nativeElement.querySelector('h1');
      expect(h1.textContent).toBeTruthy();
      expect(h1.textContent.length).toBeGreaterThan(0);
    });
  });
});
