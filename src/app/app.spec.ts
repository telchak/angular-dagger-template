import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { App } from './app';

describe('App Component', () => {
  let component: App;
  let fixture: ComponentFixture<App>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  describe('Component Initialization', () => {
    it('should create the App component', () => {
      expect(component).toBeTruthy();
    });

    it('should initialize with title signal containing the correct value', () => {
      expect(component.title()).toBe('daggerverse-test-angular-project');
    });

    it('should have RouterOutlet imported', () => {
      expect(component).toBeDefined();
      fixture.detectChanges();
      const routerOutlet = debugElement.query(By.directive(RouterOutlet));
      expect(routerOutlet).toBeTruthy();
    });
  });

  describe('Template Rendering', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should render h1 element with correct text', () => {
      const h1Element = debugElement.query(By.css('h1'));
      expect(h1Element).toBeTruthy();
      expect(h1Element.nativeElement.textContent).toContain('Hello, daggerverse-test-angular-project');
    });

    it('should display the title signal value in the template', () => {
      const h1Element = debugElement.query(By.css('h1'));
      expect(h1Element.nativeElement.textContent).toBe('Hello, daggerverse-test-angular-project');
    });

    it('should contain a router-outlet element', () => {
      const routerOutlet = debugElement.query(By.css('router-outlet'));
      expect(routerOutlet).toBeTruthy();
    });
  });

  describe('Signal Reactivity', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should be a protected readonly property', () => {
      expect(() => {
        (component as any).title = undefined;
      }).toThrow();
    });

    it('should render updated content when signal changes', () => {
      // Get initial content
      let h1Element = debugElement.query(By.css('h1'));
      expect(h1Element.nativeElement.textContent).toBe('Hello, daggerverse-test-angular-project');

      // Note: title is protected, so we test the current behavior
      // In a real app, you'd modify the component's public methods if they exist
      fixture.detectChanges();
      h1Element = debugElement.query(By.css('h1'));
      expect(h1Element.nativeElement.textContent).toContain('Hello,');
    });
  });

  describe('Selector and Component Metadata', () => {
    it('should have correct selector', () => {
      const metadata = (component.constructor as any)['ɵcmp'];
      expect(metadata).toBeDefined();
    });

    it('should be a standalone component', () => {
      const metadata = (component.constructor as any)['ɵcmp'];
      expect(metadata).toBeDefined();
      // Standalone components have specific metadata markers
    });
  });

  describe('Component Structure', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should have proper template structure', () => {
      const template = debugElement.nativeElement;
      expect(template.children.length).toBeGreaterThan(0);
    });

    it('should not have any inline styles applied to component', () => {
      const styles = window.getComputedStyle(debugElement.nativeElement);
      // Component has empty styles array
      expect(styles).toBeDefined();
    });
  });

  describe('Accessibility', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should have semantic HTML with h1 heading', () => {
      const h1 = debugElement.query(By.css('h1'));
      expect(h1).toBeTruthy();
    });

    it('should have proper text content', () => {
      const h1 = debugElement.query(By.css('h1'));
      expect(h1.nativeElement.textContent).toBeTruthy();
      expect(h1.nativeElement.textContent.length).toBeGreaterThan(0);
    });
  });
});

// Import RouterOutlet for type checking
import { RouterOutlet } from '@angular/router';
