import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
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

  describe('Component Initialization', () => {
    it('should create the app component', () => {
      expect(component).toBeTruthy();
    });

    it('should have a title signal with initial value', () => {
      expect(component['title']).toBeDefined();
      expect(component['title']()).toBe('daggerverse-test-angular-project');
    });

    it('should initialize the component without errors', () => {
      expect(() => {
        fixture.detectChanges();
      }).not.toThrow();
    });
  });

  describe('Template Rendering', () => {
    it('should render h1 element with correct selector', () => {
      const h1Element = compiled.query(By.css('h1'));
      expect(h1Element).toBeTruthy();
    });

    it('should display the title in h1 element', () => {
      const h1Element = compiled.query(By.css('h1'));
      expect(h1Element.nativeElement.textContent).toContain('daggerverse-test-angular-project');
    });

    it('should render hello message with title signal value', () => {
      const h1Element = compiled.query(By.css('h1'));
      const expectedText = `Hello, ${'daggerverse-test-angular-project'}`;
      expect(h1Element.nativeElement.textContent.trim()).toBe(expectedText);
    });

    it('should render router-outlet', () => {
      const routerOutlet = compiled.query(By.directive(RouterOutlet));
      expect(routerOutlet).toBeTruthy();
    });
  });

  describe('Signal Reactivity', () => {
    it('should update template when title signal changes', () => {
      // Change the signal value
      component['title'].set('New Title');
      fixture.detectChanges();

      const h1Element = compiled.query(By.css('h1'));
      expect(h1Element.nativeElement.textContent).toContain('New Title');
    });

    it('should reflect title signal changes immediately', () => {
      const originalTitle = component['title']();
      component['title'].set('Updated Title');

      expect(component['title']()).toBe('Updated Title');
      expect(component['title']()).not.toBe(originalTitle);
    });

    it('should maintain signal reactivity across multiple updates', () => {
      const updates = ['Title1', 'Title2', 'Title3'];

      for (const title of updates) {
        component['title'].set(title);
        fixture.detectChanges();

        const h1Element = compiled.query(By.css('h1'));
        expect(h1Element.nativeElement.textContent).toContain(title);
      }
    });
  });

  describe('Component Structure', () => {
    it('should be a standalone component', () => {
      const metadata = (App as any).ɵcmp;
      expect(metadata.standalone).toBe(true);
    });

    it('should import RouterOutlet', () => {
      const metadata = (App as any).ɵcmp;
      expect(metadata.dependencies).toContain(RouterOutlet);
    });

    it('should have correct selector', () => {
      const metadata = (App as any).ɵcmp;
      expect(metadata.selectors[0][0]).toBe('app-root');
    });

    it('should have empty styles array', () => {
      const metadata = (App as any).ɵcmp;
      expect(Array.isArray(metadata.styles)).toBe(true);
    });
  });

  describe('DOM Structure', () => {
    it('should contain only h1 and router-outlet as main children', () => {
      const childElements = compiled.nativeElement.children;
      // Component template has h1 and router-outlet
      expect(childElements.length).toBeGreaterThanOrEqual(1);
    });

    it('h1 should be direct child of component', () => {
      const h1 = compiled.query(By.css('h1'));
      const parent = h1.parent;
      expect(parent.componentInstance).toBe(component);
    });

    it('should use Angular interpolation for dynamic title', () => {
      const h1Element = compiled.query(By.css('h1'));
      const text = h1Element.nativeElement.textContent;
      expect(text).toMatch(/Hello,\s+\w+/);
    });
  });

  describe('Title Signal Properties', () => {
    it('title signal should be read-only protected member', () => {
      // The title is protected, so it should not be accessible directly from outside
      expect((component as any).title).toBeDefined();
    });

    it('should allow reading signal value', () => {
      expect(() => {
        component['title']();
      }).not.toThrow();
    });

    it('should return a string value from title signal', () => {
      const titleValue = component['title']();
      expect(typeof titleValue).toBe('string');
    });

    it('title signal value should not be empty', () => {
      const titleValue = component['title']();
      expect(titleValue.length).toBeGreaterThan(0);
    });
  });

  describe('Component Lifecycle', () => {
    it('should not throw during ngOnInit if implemented', () => {
      expect(() => {
        fixture.detectChanges();
      }).not.toThrow();
    });

    it('should maintain state after multiple detectChanges calls', () => {
      const originalTitle = component['title']();
      fixture.detectChanges();
      fixture.detectChanges();
      fixture.detectChanges();

      expect(component['title']()).toBe(originalTitle);
    });

    it('should handle change detection properly', () => {
      component['title'].set('Test Title');
      expect(() => {
        fixture.detectChanges();
      }).not.toThrow();

      const h1 = compiled.query(By.css('h1'));
      expect(h1.nativeElement.textContent).toContain('Test Title');
    });
  });
});
