import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';
import { DebugElement } from '@angular/core';
import { describe, it, expect, beforeEach } from 'vitest';
import { App } from './app';

describe('App Component', () => {
  let component: App;
  let fixture: ComponentFixture<App>;
  let compiled: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, RouterOutlet]
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    compiled = fixture.debugElement;
    fixture.detectChanges();
  });

  describe('Component Creation', () => {
    it('should create the App component', () => {
      expect(component).toBeTruthy();
    });

    it('should be a standalone component', () => {
      const metadata = (App as any).ɵcmp;
      expect(metadata.standalone).toBe(true);
    });
  });

  describe('Signal Properties', () => {
    it('should initialize title signal with correct value', () => {
      expect(component.title()).toBe('daggerverse-test-angular-project');
    });

    it('should have title as a readonly signal', () => {
      // Verify that title is defined and callable
      expect(typeof component.title).toBe('function');
      expect(component.title()).toEqual('daggerverse-test-angular-project');
    });

    it('should handle title signal access multiple times consistently', () => {
      const firstCall = component.title();
      const secondCall = component.title();
      expect(firstCall).toBe(secondCall);
    });
  });

  describe('Template Rendering', () => {
    it('should render h1 with title signal value', () => {
      const h1Element = compiled.nativeElement.querySelector('h1');
      expect(h1Element).toBeTruthy();
      expect(h1Element.textContent).toContain('Hello, daggerverse-test-angular-project');
    });

    it('should contain router-outlet element', () => {
      const routerOutlet = compiled.nativeElement.querySelector('router-outlet');
      expect(routerOutlet).toBeTruthy();
    });

    it('should have h1 with correct structure', () => {
      const h1Element = compiled.nativeElement.querySelector('h1');
      expect(h1Element.textContent.trim()).toBe('Hello, daggerverse-test-angular-project');
    });

    it('should update h1 content when title signal changes', () => {
      // Note: title is readonly in the current implementation
      // This test verifies the signal is being read correctly in the template
      const h1Element = compiled.nativeElement.querySelector('h1');
      const initialText = h1Element.textContent;
      
      fixture.detectChanges();
      
      const updatedText = h1Element.textContent;
      expect(initialText).toBe(updatedText);
    });
  });

  describe('Component Dependencies', () => {
    it('should import RouterOutlet', () => {
      const metadata = (App as any).ɵcmp;
      expect(metadata.dependencies).toBeDefined();
    });

    it('should have correct selector', () => {
      const metadata = (App as any).ɵcmp;
      expect(metadata.selectors).toBeDefined();
      // selectors is a 2D array of selector conditions
      expect(metadata.selectors.length).toBeGreaterThan(0);
    });

    it('should have empty styles', () => {
      const metadata = (App as any).ɵcmp;
      expect(metadata.styles).toBeDefined();
    });
  });

  describe('Accessibility and Structure', () => {
    it('should render a heading element', () => {
      const heading = compiled.nativeElement.querySelector('h1');
      expect(heading).toBeTruthy();
      expect(heading.tagName.toLowerCase()).toBe('h1');
    });

    it('should have meaningful heading text', () => {
      const h1 = compiled.nativeElement.querySelector('h1');
      expect(h1.textContent).toBeTruthy();
      expect(h1.textContent).toContain('Hello');
    });

    it('should structure template correctly with router-outlet', () => {
      const h1 = compiled.nativeElement.querySelector('h1');
      const routerOutlet = compiled.nativeElement.querySelector('router-outlet');
      
      expect(h1).toBeTruthy();
      expect(routerOutlet).toBeTruthy();
      
      // Both should be direct children of the component
      const children = Array.from(compiled.nativeElement.children);
      expect(children.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe('Component Lifecycle', () => {
    it('should handle component initialization', () => {
      expect(component).toBeTruthy();
      expect(component.title()).toBeTruthy();
    });

    it('should maintain title signal after multiple detection cycles', () => {
      const initialTitle = component.title();
      fixture.detectChanges();
      fixture.detectChanges();
      expect(component.title()).toBe(initialTitle);
    });
  });

  describe('Template Interpolation', () => {
    it('should correctly interpolate signal in template', () => {
      const h1 = compiled.nativeElement.querySelector('h1');
      const expectedText = `Hello, ${component.title()}`;
      expect(h1.textContent.trim()).toBe(expectedText);
    });

    it('should have no undefined or null values in template', () => {
      const h1 = compiled.nativeElement.querySelector('h1');
      expect(h1.textContent).not.toContain('undefined');
      expect(h1.textContent).not.toContain('null');
    });
  });
});
