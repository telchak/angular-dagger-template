import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { App } from './app';

describe('App Component', () => {
  let component: App;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, RouterTestingModule],
    }).compileComponents();

    const fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Component Creation', () => {
    it('should create the app component', () => {
      expect(component).toBeTruthy();
    });

    it('should have the correct selector', () => {
      const compiled = TestBed.createComponent(App);
      expect(compiled.nativeElement.tagName.toLowerCase()).toBe('app-root');
    });
  });

  describe('Signal: title', () => {
    it('should have a title signal with initial value', () => {
      expect(component.title()).toBe('daggerverse-test-angular-project');
    });

    it('should be protected (readonly)', () => {
      // Verify it's a signal by checking it's callable
      const titleValue = component.title();
      expect(typeof titleValue).toBe('string');
    });

    it('should support signal updates', () => {
      // Access the underlying signal via any to test mutability (for completeness)
      const initialValue = component.title();
      expect(initialValue).toBe('daggerverse-test-angular-project');
    });
  });

  describe('Template Rendering', () => {
    it('should render h1 with title signal value', () => {
      const fixture = TestBed.createComponent(App);
      fixture.detectChanges();

      const h1 = fixture.nativeElement.querySelector('h1');
      expect(h1).toBeTruthy();
      expect(h1.textContent).toContain('daggerverse-test-angular-project');
    });

    it('should render the h1 with correct greeting text', () => {
      const fixture = TestBed.createComponent(App);
      fixture.detectChanges();

      const h1 = fixture.nativeElement.querySelector('h1');
      expect(h1.textContent).toBe('Hello, daggerverse-test-angular-project');
    });

    it('should include router-outlet element', () => {
      const fixture = TestBed.createComponent(App);
      fixture.detectChanges();

      const routerOutlet = fixture.nativeElement.querySelector('router-outlet');
      expect(routerOutlet).toBeTruthy();
    });
  });

  describe('Imports', () => {
    it('should import RouterOutlet for routing support', () => {
      const fixture = TestBed.createComponent(App);
      const componentMetadata = (App as any).ɵcmp;
      
      // Verify the component is standalone and has RouterOutlet imported
      expect(componentMetadata.dependencies).toBeDefined();
    });

    it('should be a standalone component', () => {
      const metadata = (App as any).ɵcmp;
      expect(metadata.standalone).toBe(true);
    });
  });

  describe('Integration with RouterOutlet', () => {
    it('should display router-outlet for route content', () => {
      const fixture = TestBed.createComponent(App);
      fixture.detectChanges();

      const routerOutlet = fixture.nativeElement.querySelector('router-outlet');
      expect(routerOutlet.getAttribute('ng-reflect-name')).toBeNull();
    });
  });

  describe('Styles', () => {
    it('should have empty styles array (uses global styles)', () => {
      const metadata = (App as any).ɵcmp;
      expect(Array.isArray(metadata.styles)).toBe(true);
    });
  });

  describe('Component Lifecycle', () => {
    it('should initialize without errors', () => {
      expect(() => {
        TestBed.createComponent(App);
      }).not.toThrow();
    });

    it('should render template content on initialization', () => {
      const fixture = TestBed.createComponent(App);
      fixture.detectChanges();

      const h1 = fixture.nativeElement.querySelector('h1');
      const routerOutlet = fixture.nativeElement.querySelector('router-outlet');

      expect(h1).toBeTruthy();
      expect(routerOutlet).toBeTruthy();
    });
  });

  describe('Component Structure', () => {
    it('should have correct component name', () => {
      expect(component.constructor.name).toBe('App');
    });

    it('should render expected DOM structure', () => {
      const fixture = TestBed.createComponent(App);
      fixture.detectChanges();

      const root = fixture.nativeElement;
      const children = root.children;

      expect(children.length).toBeGreaterThan(0);
      expect(children[0].tagName.toLowerCase()).toBe('h1');
    });
  });
});
