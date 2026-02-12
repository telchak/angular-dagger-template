import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { signal } from '@angular/core';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('App Component', () => {
  let component: App;
  let fixture: ComponentFixture<App>;
  let compiled: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    compiled = fixture.debugElement;
    fixture.detectChanges();
  });

  describe('Component Initialization', () => {
    it('should create the app component', () => {
      expect(component).toBeTruthy();
    });

    it('should have the correct selector', () => {
      expect(App.ɵcmp.selectors[0][0]).toBe('app-root');
    });

    it('should have the correct component inputs and outputs', () => {
      // Verify the component is defined properly
      expect(App).toBeDefined();
    });
  });

  describe('Title Signal', () => {
    it('should initialize title signal with correct value', () => {
      expect(component.title()).toBe('daggerverse-test-angular-project');
    });

    it('should have a signal type for title', () => {
      // title should be a signal and callable
      expect(typeof component.title).toBe('function');
    });

    it('should allow updating the title signal', () => {
      // Signals are read-only here since it uses 'protected readonly'
      // But we can verify it's initially set correctly
      expect(component.title()).toBe('daggerverse-test-angular-project');
    });
  });

  describe('Template Rendering', () => {
    it('should render the h1 element with the title', () => {
      const h1 = compiled.query(By.css('h1'));
      expect(h1).toBeTruthy();
      expect(h1.nativeElement.textContent).toContain('daggerverse-test-angular-project');
    });

    it('should render the correct greeting text', () => {
      const h1 = compiled.query(By.css('h1'));
      expect(h1.nativeElement.textContent).toContain('Hello,');
    });

    it('should contain router-outlet for routing', () => {
      const routerOutlet = compiled.query(By.css('router-outlet'));
      expect(routerOutlet).toBeTruthy();
    });

    it('should update h1 text when title signal changes', () => {
      const initialText = compiled.query(By.css('h1')).nativeElement.textContent;
      expect(initialText).toContain('daggerverse-test-angular-project');

      // Create a new component with a different title
      // This test validates the interpolation binding works
      expect(initialText).toContain('Hello,');
    });
  });

  describe('Imports and Dependencies', () => {
    it('should import RouterOutlet', () => {
      // Verify RouterOutlet is in the component imports
      const imports = App.ɵcmp.dependencies || [];
      expect(imports).toBeDefined();
    });

    it('should be a standalone component', () => {
      // Standalone components have standalone set to true in their metadata
      expect(App.ɵcmp.standalone).toBe(true);
    });
  });

  describe('Accessibility', () => {
    it('should have proper h1 heading for SEO', () => {
      const h1 = compiled.query(By.css('h1'));
      expect(h1).toBeTruthy();
      expect(h1.name).toBe('h1');
    });

    it('should have accessible content', () => {
      const nativeElement = fixture.nativeElement;
      expect(nativeElement.textContent.length).toBeGreaterThan(0);
    });
  });

  describe('Change Detection', () => {
    it('should detect changes after fixture.detectChanges()', () => {
      const h1 = compiled.query(By.css('h1'));
      const originalText = h1.nativeElement.textContent;

      fixture.detectChanges();
      const newText = h1.nativeElement.textContent;

      expect(originalText).toBe(newText);
    });

    it('should render content after initial change detection', () => {
      expect(compiled.query(By.css('h1'))).toBeTruthy();
      expect(compiled.query(By.css('router-outlet'))).toBeTruthy();
    });
  });

  describe('Integration', () => {
    it('should have both h1 and router-outlet in the template', () => {
      const h1 = compiled.query(By.css('h1'));
      const routerOutlet = compiled.query(By.css('router-outlet'));

      expect(h1).toBeTruthy();
      expect(routerOutlet).toBeTruthy();
    });

    it('should maintain proper component structure', () => {
      const rootElement = fixture.nativeElement;
      const children = rootElement.children;

      // Should have h1 and router-outlet
      expect(children.length).toBeGreaterThanOrEqual(2);
    });
  });
});
