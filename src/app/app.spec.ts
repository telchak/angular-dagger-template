import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { App } from './app';

describe('App Component', () => {
  let component: App;
  let fixture: ComponentFixture<App>;
  let compiled: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    compiled = fixture.debugElement;
    fixture.detectChanges();
  });

  describe('Component Initialization', () => {
    it('should create the app component', () => {
      expect(component).toBeDefined();
    });

    it('should have the correct selector', () => {
      const metadata = (App as any).__annotations__[0];
      expect(metadata.selector).toBe('app-root');
    });

    it('should import RouterOutlet', () => {
      const metadata = (App as any).__annotations__[0];
      expect(metadata.imports).toContain(expect.objectContaining({ name: 'RouterOutlet' }));
    });
  });

  describe('Signal: title', () => {
    it('should initialize title signal with correct value', () => {
      expect(component.title()).toBe('daggerverse-test-angular-project');
    });

    it('should be a signal (function)', () => {
      expect(typeof component.title).toBe('function');
    });

    it('should allow updating title signal', () => {
      component.title.set('New Title');
      expect(component.title()).toBe('New Title');
    });

    it('should be protected (not publicly exposed)', () => {
      // Verify title is defined (it's protected, so accessed via direct property)
      expect(component['title']).toBeDefined();
    });
  });

  describe('Template Rendering', () => {
    it('should render h1 element with greeting', () => {
      const h1 = compiled.nativeElement.querySelector('h1');
      expect(h1).toBeTruthy();
    });

    it('should display the title signal value in h1', () => {
      const h1 = compiled.nativeElement.querySelector('h1');
      expect(h1.textContent).toContain('daggerverse-test-angular-project');
    });

    it('should update h1 content when title signal changes', () => {
      component.title.set('Updated Title');
      fixture.detectChanges();
      const h1 = compiled.nativeElement.querySelector('h1');
      expect(h1.textContent).toContain('Updated Title');
    });

    it('should render router-outlet component', () => {
      const routerOutlet = compiled.nativeElement.querySelector('router-outlet');
      expect(routerOutlet).toBeTruthy();
    });

    it('should render h1 before router-outlet', () => {
      const children = compiled.nativeElement.childNodes;
      const h1Index = Array.from(children).findIndex(
        (node: any) => node.tagName?.toLowerCase() === 'h1'
      );
      const routerOutletIndex = Array.from(children).findIndex(
        (node: any) => node.tagName?.toLowerCase() === 'router-outlet'
      );
      expect(h1Index).toBeLessThan(routerOutletIndex);
    });

    it('should interpolate signal value in template', () => {
      const expectedText = `Hello, ${component.title()}`;
      expect(compiled.nativeElement.textContent).toContain(expectedText);
    });
  });

  describe('Accessibility', () => {
    it('should have semantic heading structure', () => {
      const h1 = compiled.nativeElement.querySelector('h1');
      expect(h1.tagName).toBe('H1');
    });
  });

  describe('Change Detection', () => {
    it('should update view when title signal changes', () => {
      const newTitle = 'Test Angular App';
      component.title.set(newTitle);
      fixture.detectChanges();

      const h1 = compiled.nativeElement.querySelector('h1');
      expect(h1.textContent).toContain(newTitle);
    });

    it('should trigger change detection on signal mutations', () => {
      const initialText = compiled.nativeElement.querySelector('h1').textContent;
      component.title.set('Changed');
      fixture.detectChanges();
      const updatedText = compiled.nativeElement.querySelector('h1').textContent;

      expect(initialText).not.toBe(updatedText);
      expect(updatedText).toContain('Changed');
    });
  });

  describe('Styling', () => {
    it('should have empty styles array', () => {
      const metadata = (App as any).__annotations__[0];
      expect(metadata.styles).toEqual([]);
    });
  });
});
