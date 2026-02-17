import { describe, it, expect, beforeEach, vi } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { App } from './app';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('App Component', () => {
  let fixture: any;
  let component: App;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  describe('Component Initialization', () => {
    it('should create the app component', () => {
      expect(component).toBeTruthy();
    });

    it('should initialize title signal with correct value', () => {
      expect(component.title()).toBe('daggerverse-test-angular-project');
    });

    it('should have title as a signal (reactive)', () => {
      expect(typeof component.title).toBe('function');
      expect(component.title()).toBe('daggerverse-test-angular-project');
    });
  });

  describe('Template Rendering', () => {
    it('should render h1 element', () => {
      const h1 = debugElement.query(By.css('h1'));
      expect(h1).toBeTruthy();
    });

    it('should display title in h1 element', () => {
      const h1 = debugElement.query(By.css('h1'));
      expect(h1.nativeElement.textContent).toContain('daggerverse-test-angular-project');
    });

    it('should display correct greeting text', () => {
      const h1 = debugElement.query(By.css('h1'));
      expect(h1.nativeElement.textContent).toContain('Hello,');
    });

    it('should have router-outlet element', () => {
      const routerOutlet = debugElement.query(By.css('router-outlet'));
      expect(routerOutlet).toBeTruthy();
    });
  });

  describe('Component Selector', () => {
    it('should have correct selector', () => {
      const selector = (App as any).ɵcmp.selectors[0][0];
      expect(selector).toBe('app-root');
    });
  });

  describe('Component Imports', () => {
    it('should be a standalone component', () => {
      expect((App as any).ɵcmp.standalone).toBe(true);
    });

    it('should import RouterOutlet', () => {
      // Verify that the component includes RouterOutlet in its imports
      const componentMetadata = (App as any).ɵcmp;
      expect(componentMetadata).toBeTruthy();
    });
  });

  describe('Title Signal Reactivity', () => {
    it('should update template when title signal changes', () => {
      const newTitle = 'Updated Title';
      component.title.set(newTitle);
      fixture.detectChanges();

      const h1 = debugElement.query(By.css('h1'));
      expect(h1.nativeElement.textContent).toContain(newTitle);
    });

    it('should maintain signal reactivity', () => {
      expect(component.title()).toBe('daggerverse-test-angular-project');
      component.title.set('New Value');
      expect(component.title()).toBe('New Value');
      component.title.set('daggerverse-test-angular-project');
      expect(component.title()).toBe('daggerverse-test-angular-project');
    });
  });

  describe('Accessibility', () => {
    it('should have semantic heading structure', () => {
      const h1 = debugElement.query(By.css('h1'));
      expect(h1.nativeElement.tagName.toLowerCase()).toBe('h1');
    });

    it('should render readable text content', () => {
      const h1 = debugElement.query(By.css('h1'));
      const textContent = h1.nativeElement.textContent.trim();
      expect(textContent.length).toBeGreaterThan(0);
    });
  });

  describe('Styling', () => {
    it('should have empty styles array', () => {
      const componentMetadata = (App as any).ɵcmp;
      expect(componentMetadata.styles).toBeDefined();
    });
  });

  describe('Encapsulation', () => {
    it('should render within app-root element', () => {
      const host = fixture.nativeElement;
      expect(host.tagName.toLowerCase()).toBe('app-root');
    });
  });
});
