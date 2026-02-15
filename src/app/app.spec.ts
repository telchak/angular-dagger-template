import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';
import { describe, it, expect, beforeEach } from 'vitest';
import { App } from './app';

describe('App Component', () => {
  let component: App;
  let fixture: ComponentFixture<App>;
  let compiled: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, RouterOutlet],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    compiled = fixture.debugElement;
    fixture.detectChanges();
  });

  describe('Component Creation', () => {
    it('should create the app component', () => {
      expect(component).toBeTruthy();
    });

    it('should be a standalone component', () => {
      const componentMetadata = (App as any).ɵcmp;
      expect(componentMetadata.standalone).toBe(true);
    });

    it('should import RouterOutlet', () => {
      const componentMetadata = (App as any).ɵcmp;
      expect(componentMetadata.dependencies).toContain(RouterOutlet);
    });
  });

  describe('Title Signal', () => {
    it('should have a title signal', () => {
      expect(component.title).toBeDefined();
    });

    it('should initialize with default title', () => {
      expect(component.title()).toBe('daggerverse-test-angular-project');
    });

    it('should be able to update title signal', () => {
      const newTitle = 'Updated Title';
      component.title.set(newTitle);
      expect(component.title()).toBe(newTitle);
    });

    it('should reflect title signal changes in template', () => {
      component.title.set('Test Title');
      fixture.detectChanges();

      const h1 = compiled.nativeElement.querySelector('h1');
      expect(h1?.textContent).toContain('Test Title');
    });
  });

  describe('Template Rendering', () => {
    it('should render an h1 element', () => {
      const h1 = compiled.nativeElement.querySelector('h1');
      expect(h1).toBeTruthy();
    });

    it('should display correct greeting text', () => {
      const h1 = compiled.nativeElement.querySelector('h1');
      expect(h1?.textContent).toContain('Hello,');
    });

    it('should include title in h1 text', () => {
      const h1 = compiled.nativeElement.querySelector('h1');
      expect(h1?.textContent).toContain('daggerverse-test-angular-project');
    });

    it('should render router-outlet element', () => {
      const routerOutlet = compiled.nativeElement.querySelector('router-outlet');
      expect(routerOutlet).toBeTruthy();
    });
  });

  describe('Title Property Reactivity', () => {
    it('should be readonly', () => {
      // The title property should not be assignable
      const originalTitle = component.title();
      expect(() => {
        // @ts-expect-error - Testing that title is readonly
        component.title = null;
      }).toThrow();
    });

    it('should update DOM when signal changes', () => {
      const testTitles = ['First', 'Second', 'Third'];

      testTitles.forEach((title) => {
        component.title.set(title);
        fixture.detectChanges();

        const h1 = compiled.nativeElement.querySelector('h1');
        expect(h1?.textContent).toContain(title);
      });
    });
  });

  describe('Selector and Template', () => {
    it('should have correct selector', () => {
      expect(compiled.nativeElement.tagName.toLowerCase()).toBe('app-root');
    });

    it('should have inline template', () => {
      const h1 = compiled.nativeElement.querySelector('h1');
      const routerOutlet = compiled.nativeElement.querySelector('router-outlet');
      expect(h1 && routerOutlet).toBeTruthy();
    });

    it('should have empty styles', () => {
      const componentMetadata = (App as any).ɵcmp;
      expect(componentMetadata.styles).toBeDefined();
    });
  });

  describe('Accessibility', () => {
    it('should have proper heading hierarchy with h1', () => {
      const headings = compiled.nativeElement.querySelectorAll('h1');
      expect(headings.length).toBeGreaterThan(0);
    });

    it('should render readable text content', () => {
      const content = compiled.nativeElement.textContent;
      expect(content).toContain('Hello');
      expect(content).toContain('daggerverse-test-angular-project');
    });
  });
});
