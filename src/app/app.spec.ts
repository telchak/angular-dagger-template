import { TestBed, ComponentFixture } from '@angular/core/testing';
import { App } from './app';
import { RouterOutlet } from '@angular/router';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { describe, it, expect, beforeEach } from 'vitest';

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

  describe('Component Initialization', () => {
    it('should create the app component', () => {
      expect(component).toBeDefined();
    });

    it('should have a title signal with initial value', () => {
      expect(component['title']()).toBe('daggerverse-test-angular-project');
    });

    it('should initialize with correct selector', () => {
      const appElement = fixture.nativeElement.querySelector('app-root');
      expect(appElement).toBeTruthy();
    });
  });

  describe('Template Rendering', () => {
    it('should render h1 with title signal value', () => {
      const h1 = compiled.query(By.css('h1'));
      expect(h1).toBeTruthy();
      expect(h1.nativeElement.textContent).toContain('daggerverse-test-angular-project');
    });

    it('should have "Hello, " prefix in h1', () => {
      const h1 = compiled.query(By.css('h1'));
      expect(h1.nativeElement.textContent).toContain('Hello,');
    });

    it('should render router-outlet element', () => {
      const routerOutlet = compiled.query(By.directive(RouterOutlet));
      expect(routerOutlet).toBeTruthy();
    });
  });

  describe('Signal Updates', () => {
    it('should update heading when title signal changes', () => {
      const newTitle = 'Updated Title';
      component['title'].set(newTitle);
      fixture.detectChanges();

      const h1 = compiled.query(By.css('h1'));
      expect(h1.nativeElement.textContent).toContain(newTitle);
    });

    it('should reflect signal changes in template reactively', () => {
      const originalText = 'daggerverse-test-angular-project';
      let h1 = compiled.query(By.css('h1'));
      expect(h1.nativeElement.textContent).toContain(originalText);

      const testTitle = 'Reactive Update Test';
      component['title'].set(testTitle);
      fixture.detectChanges();

      h1 = compiled.query(By.css('h1'));
      expect(h1.nativeElement.textContent).toContain(testTitle);
      expect(h1.nativeElement.textContent).not.toContain(originalText);
    });
  });

  describe('Template Structure', () => {
    it('should have proper HTML structure', () => {
      const root = fixture.nativeElement;
      const h1 = root.querySelector('h1');
      const routerOutlet = root.querySelector('router-outlet');

      expect(h1).toBeTruthy();
      expect(routerOutlet).toBeTruthy();
    });

    it('should render h1 before router-outlet', () => {
      const root = fixture.nativeElement;
      const h1Index = Array.from(root.children).findIndex(
        (child: Element) => child.tagName === 'H1'
      );
      const routerOutletIndex = Array.from(root.children).findIndex(
        (child: Element) => child.tagName === 'ROUTER-OUTLET'
      );

      expect(h1Index).toBeLessThan(routerOutletIndex);
    });
  });

  describe('Accessibility', () => {
    it('should have a meaningful h1 heading', () => {
      const h1 = compiled.query(By.css('h1'));
      expect(h1).toBeTruthy();
      expect(h1.nativeElement.textContent.trim().length).toBeGreaterThan(0);
    });

    it('h1 should not be empty', () => {
      const h1 = compiled.query(By.css('h1'));
      expect(h1.nativeElement.textContent.trim()).not.toBe('');
    });
  });

  describe('Component Properties', () => {
    it('should be a standalone component', () => {
      const componentMetadata = (App as any)?.ɵcmp;
      expect(componentMetadata?.standalone).toBe(true);
    });

    it('should import RouterOutlet', () => {
      const componentMetadata = (App as any)?.ɵcmp;
      expect(componentMetadata?.dependencies).toContain(RouterOutlet);
    });
  });
});
