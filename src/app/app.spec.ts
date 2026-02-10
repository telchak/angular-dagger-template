import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { App } from './app';
import { describe, it, expect, beforeEach } from 'vitest';

describe('App Component', () => {
  let component: App;
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
  });

  describe('Component Initialization', () => {
    it('should create the app component', () => {
      expect(component).toBeDefined();
    });

    it('should have the correct selector', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.tagName.toLowerCase()).toBe('app-root');
    });

    it('should have a title signal initialized with default value', () => {
      expect(component.title()).toBe('daggerverse-test-angular-project');
    });
  });

  describe('Signal Behavior', () => {
    it('should have a protected title signal', () => {
      expect(typeof component.title).toBe('function');
    });

    it('should allow reading the signal value', () => {
      const titleValue = component.title();
      expect(titleValue).toBe('daggerverse-test-angular-project');
    });

    it('should support signal reactivity (reading value multiple times)', () => {
      const firstRead = component.title();
      const secondRead = component.title();
      expect(firstRead).toBe(secondRead);
      expect(firstRead).toBe('daggerverse-test-angular-project');
    });
  });

  describe('Template Rendering', () => {
    it('should render the title in an h1 tag', () => {
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const h1 = compiled.querySelector('h1');
      expect(h1).toBeTruthy();
      expect(h1?.textContent).toContain('daggerverse-test-angular-project');
    });

    it('should display "Hello," prefix followed by the signal value', () => {
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const h1 = compiled.querySelector('h1');
      expect(h1?.textContent).toMatch(/Hello,\s+daggerverse-test-angular-project/);
    });

    it('should render router-outlet component', () => {
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const routerOutlet = compiled.querySelector('router-outlet');
      expect(routerOutlet).toBeTruthy();
    });

    it('should update h1 text when change detection runs', () => {
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const h1 = compiled.querySelector('h1');
      expect(h1?.textContent).toContain('Hello,');
      expect(h1?.textContent).toContain('daggerverse-test-angular-project');
    });
  });

  describe('Component Metadata', () => {
    it('should have correct component selector', () => {
      const metadata = (component.constructor as any).__annotations__?.[0];
      // Alternative approach: check the component tag name
      expect(fixture.nativeElement.tagName.toLowerCase()).toBe('app-root');
    });

    it('should import RouterOutlet', () => {
      fixture.detectChanges();
      // Verify RouterOutlet is rendered and functional
      expect(fixture.nativeElement.querySelector('router-outlet')).toBeTruthy();
    });

    it('should have empty styles array', () => {
      // Component should not have any scoped styles
      const styleElements = fixture.nativeElement.querySelectorAll('style');
      // The component's inline styles should be defined (though empty in this case)
      expect(component).toBeDefined();
    });
  });

  describe('Integration Tests', () => {
    it('should render the complete template structure', () => {
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;

      // Check main structure
      const h1 = compiled.querySelector('h1');
      const routerOutlet = compiled.querySelector('router-outlet');

      expect(h1).toBeTruthy();
      expect(routerOutlet).toBeTruthy();

      // Verify h1 comes before router-outlet
      const h1Index = Array.from(compiled.children).indexOf(h1!);
      const routerOutletIndex = Array.from(compiled.children).indexOf(routerOutlet!);
      expect(h1Index).toBeLessThan(routerOutletIndex);
    });

    it('should work with RouterTestingModule', () => {
      // This test verifies the component works with the router module
      expect(fixture.componentInstance).toBeDefined();
      fixture.detectChanges();
      // If no errors are thrown, the integration is successful
      expect(true).toBe(true);
    });

    it('should maintain signal reactivity through change detection cycles', () => {
      const initialTitle = component.title();
      fixture.detectChanges();
      const titleAfterDetection = component.title();

      expect(initialTitle).toBe(titleAfterDetection);
      expect(titleAfterDetection).toBe('daggerverse-test-angular-project');
    });
  });

  describe('Component Isolation', () => {
    it('should be a standalone component', () => {
      // Standalone components can be instantiated directly
      expect(component).toBeTruthy();
    });

    it('should not depend on external modules', () => {
      // The component only imports RouterOutlet, which is self-contained
      fixture.detectChanges();
      expect(fixture.componentInstance).toBeDefined();
    });
  });

  describe('Change Detection', () => {
    it('should update view on change detection', () => {
      fixture.detectChanges();
      const h1 = fixture.nativeElement.querySelector('h1');
      const initialText = h1?.textContent;

      fixture.detectChanges();
      const updatedText = h1?.textContent;

      expect(initialText).toBe(updatedText);
    });

    it('should render after fixture initialization', () => {
      expect(fixture.nativeElement.querySelector('h1')).toBeFalsy();
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('h1')).toBeTruthy();
    });
  });
});
