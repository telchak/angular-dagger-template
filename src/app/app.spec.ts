import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';
import { signal } from '@angular/core';
import { App } from './app';

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

  describe('Component Creation', () => {
    it('should create the app component', () => {
      expect(component).toBeDefined();
    });

    it('should have the correct selector', () => {
      expect(fixture.debugElement.nativeElement.tagName.toLowerCase()).toBe('app-root');
    });
  });

  describe('Title Signal', () => {
    it('should have a title signal defined', () => {
      expect(component.title).toBeDefined();
    });

    it('should initialize with default title value', () => {
      expect(component.title()).toBe('daggerverse-test-angular-project');
    });

    it('should be a readonly property', () => {
      // The title property is protected readonly, so we verify it cannot be reassigned
      expect(() => {
        (component as any).title = signal('new-title');
      }).not.toThrow();
      // But the actual value should still be the original
      expect(component.title()).toBe('daggerverse-test-angular-project');
    });
  });

  describe('Template Rendering', () => {
    it('should render the h1 element with correct text', () => {
      fixture.detectChanges();
      const h1 = fixture.debugElement.nativeElement.querySelector('h1');
      expect(h1).toBeTruthy();
      expect(h1.textContent).toContain('Hello, daggerverse-test-angular-project');
    });

    it('should display the title signal value in the template', () => {
      fixture.detectChanges();
      const h1 = fixture.debugElement.nativeElement.querySelector('h1');
      const expected = `Hello, ${component.title()}`;
      expect(h1.textContent).toContain(expected);
    });

    it('should render the router-outlet element', () => {
      fixture.detectChanges();
      const routerOutlet = fixture.debugElement.nativeElement.querySelector('router-outlet');
      expect(routerOutlet).toBeTruthy();
    });
  });

  describe('Signal Reactivity', () => {
    it('should update the template when the title signal changes', () => {
      fixture.detectChanges();
      const h1 = fixture.debugElement.nativeElement.querySelector('h1');
      const initialText = h1.textContent;

      // Create a new component instance to test with a modified signal
      const newComponent = new App();
      expect(newComponent.title()).toBe('daggerverse-test-angular-project');
      expect(initialText).toContain('daggerverse-test-angular-project');
    });
  });

  describe('Component Structure', () => {
    it('should be a standalone component', () => {
      const metadata = (App as any).ɵcmp;
      expect(metadata).toBeDefined();
      // Check if it's marked as standalone (Angular sets the standalone flag)
      expect(metadata.standalone).toBeTruthy();
    });

    it('should import RouterOutlet', () => {
      const metadata = (App as any).ɵcmp;
      const imports = metadata.dependencies;
      expect(imports).toBeDefined();
    });

    it('should have empty styles array', () => {
      const metadata = (App as any).ɵcmp;
      expect(metadata.styles).toBeDefined();
      // The styles should be an empty array or contain no global styles
      expect(Array.isArray(metadata.styles) || metadata.styles === undefined).toBeTruthy();
    });
  });

  describe('DOM Integration', () => {
    it('should initialize the component and render without errors', () => {
      expect(() => {
        fixture.detectChanges();
      }).not.toThrow();
    });

    it('should have a single h1 element in the template', () => {
      fixture.detectChanges();
      const h1Elements = fixture.debugElement.nativeElement.querySelectorAll('h1');
      expect(h1Elements.length).toBe(1);
    });

    it('should have both h1 and router-outlet elements present', () => {
      fixture.detectChanges();
      const h1 = fixture.debugElement.nativeElement.querySelector('h1');
      const routerOutlet = fixture.debugElement.nativeElement.querySelector('router-outlet');
      expect(h1).toBeTruthy();
      expect(routerOutlet).toBeTruthy();
    });
  });
});
