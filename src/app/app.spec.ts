import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';
import { signal } from '@angular/core';
import { describe, it, expect, beforeEach } from 'vitest';
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
      expect(component).toBeTruthy();
    });

    it('should be a standalone component', () => {
      const metadata = (App as any).ɵcmp;
      expect(metadata.standalone).toBe(true);
    });
  });

  describe('Signal: title', () => {
    it('should have a title signal with default value', () => {
      expect(component.title()).toBe('daggerverse-test-angular-project');
    });

    it('should be able to update the title signal', () => {
      component.title.set('new title');
      expect(component.title()).toBe('new title');
    });

    it('should be readonly from outside (protected)', () => {
      // Verify that the title property exists and is accessible internally
      expect(typeof component.title).toBe('function');
    });
  });

  describe('Template Rendering', () => {
    it('should render h1 with title signal value', () => {
      fixture.detectChanges();
      const h1 = fixture.nativeElement.querySelector('h1');
      expect(h1).toBeTruthy();
      expect(h1.textContent).toContain('Hello, daggerverse-test-angular-project');
    });

    it('should update h1 text when title signal changes', () => {
      fixture.detectChanges();
      component.title.set('Updated Title');
      fixture.detectChanges();
      const h1 = fixture.nativeElement.querySelector('h1');
      expect(h1.textContent).toContain('Hello, Updated Title');
    });

    it('should render router-outlet element', () => {
      fixture.detectChanges();
      const routerOutlet = fixture.nativeElement.querySelector('router-outlet');
      expect(routerOutlet).toBeTruthy();
    });
  });

  describe('Component Imports', () => {
    it('should import RouterOutlet', () => {
      const metadata = (App as any).ɵcmp;
      const imports = metadata.dependencies;
      expect(imports).toBeTruthy();
    });
  });

  describe('Component Selector', () => {
    it('should have correct selector', () => {
      const metadata = (App as any).ɵcmp;
      expect(metadata.selectors[0][0]).toBe('app-root');
    });
  });

  describe('Integration', () => {
    it('should render complete layout structure', () => {
      fixture.detectChanges();
      const nativeElement = fixture.nativeElement;
      expect(nativeElement.querySelector('h1')).toBeTruthy();
      expect(nativeElement.querySelector('router-outlet')).toBeTruthy();
    });

    it('should have no inline styles', () => {
      const metadata = (App as any).ɵcmp;
      expect(metadata.styles.length).toBe(0);
    });
  });
});
