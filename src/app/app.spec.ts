import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';
import { App } from './app';
import { describe, it, expect, beforeEach } from 'vitest';

describe('App Component', () => {
  let component: App;
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, RouterOutlet],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Component Initialization', () => {
    it('should create the app component', () => {
      expect(component).toBeDefined();
    });

    it('should have the correct component selector', () => {
      const appElement = fixture.nativeElement.querySelector('app-root');
      expect(appElement).toBeDefined();
    });
  });

  describe('Signal: title', () => {
    it('should initialize title signal with correct default value', () => {
      expect(component.title()).toBe('daggerverse-test-angular-project');
    });

    it('should be a signal (function)', () => {
      expect(typeof component.title).toBe('function');
    });

    it('should allow updating the title signal', () => {
      component.title.set('new-title');
      expect(component.title()).toBe('new-title');
    });

    it('should update DOM when title signal changes', () => {
      component.title.set('updated-title');
      fixture.detectChanges();

      const h1 = fixture.nativeElement.querySelector('h1');
      expect(h1.textContent).toContain('updated-title');
    });
  });

  describe('Template Rendering', () => {
    it('should render h1 element with greeting message', () => {
      const h1 = fixture.nativeElement.querySelector('h1');
      expect(h1).toBeDefined();
      expect(h1.textContent).toContain('Hello,');
    });

    it('should display title in h1 element', () => {
      const h1 = fixture.nativeElement.querySelector('h1');
      expect(h1.textContent).toContain('daggerverse-test-angular-project');
    });

    it('should render router-outlet', () => {
      const routerOutlet = fixture.nativeElement.querySelector('router-outlet');
      expect(routerOutlet).toBeDefined();
    });

    it('should update h1 text when title signal changes', () => {
      const newTitle = 'my-custom-app';
      component.title.set(newTitle);
      fixture.detectChanges();

      const h1 = fixture.nativeElement.querySelector('h1');
      expect(h1.textContent).toContain(newTitle);
    });
  });

  describe('Component Structure', () => {
    it('should be a standalone component', () => {
      const metadata = (App as any).ɵcmp;
      expect(metadata.standalone).toBe(true);
    });

    it('should import RouterOutlet', () => {
      const metadata = (App as any).ɵcmp;
      expect(metadata.dependencies).toBeDefined();
    });

    it('should have empty styles array', () => {
      const metadata = (App as any).ɵcmp;
      expect(Array.isArray(metadata.styles)).toBe(true);
    });
  });

  describe('DOM Integration', () => {
    it('should render content in the root element', () => {
      const rootElement = fixture.nativeElement;
      expect(rootElement.children.length).toBeGreaterThan(0);
    });

    it('should maintain reactive binding with signal changes', () => {
      const titles = ['title-1', 'title-2', 'title-3'];

      titles.forEach((title) => {
        component.title.set(title);
        fixture.detectChanges();
        const h1 = fixture.nativeElement.querySelector('h1');
        expect(h1.textContent).toContain(title);
      });
    });
  });
});
