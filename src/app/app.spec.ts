import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';
import { App } from './app';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('App Component', () => {
  let component: App;
  let fixture: ComponentFixture<App>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, RouterOutlet],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  describe('Component Creation', () => {
    it('should create the app component', () => {
      expect(component).toBeTruthy();
    });

    it('should have the correct selector', () => {
      const selector = debugElement.nativeElement.tagName.toLowerCase();
      expect(selector).toBe('app-root');
    });
  });

  describe('Component Properties', () => {
    it('should have a title signal initialized', () => {
      expect(component.title).toBeDefined();
    });

    it('should initialize title signal with correct default value', () => {
      expect(component.title()).toBe('daggerverse-test-angular-project');
    });

    it('should be able to update title signal value', () => {
      component.title.set('new title');
      expect(component.title()).toBe('new title');
    });

    it('should be able to mutate title signal using update', () => {
      component.title.update((val) => val + ' updated');
      expect(component.title()).toBe('daggerverse-test-angular-project updated');
    });
  });

  describe('Template Rendering', () => {
    it('should render the main heading', () => {
      const heading = debugElement.query(By.css('h1'));
      expect(heading).toBeTruthy();
    });

    it('should display the title signal value in the heading', () => {
      const heading = debugElement.query(By.css('h1'));
      expect(heading.nativeElement.textContent).toContain('Hello, daggerverse-test-angular-project');
    });

    it('should update heading when title signal changes', () => {
      component.title.set('Updated Title');
      fixture.detectChanges();

      const heading = debugElement.query(By.css('h1'));
      expect(heading.nativeElement.textContent).toContain('Hello, Updated Title');
    });

    it('should render router-outlet element', () => {
      const routerOutlet = debugElement.query(By.directive(RouterOutlet));
      expect(routerOutlet).toBeTruthy();
    });
  });

  describe('Signal Reactivity', () => {
    it('should maintain title as a signal', () => {
      const title = component.title;
      // Check that it's a function (signals are functions)
      expect(typeof title).toBe('function');
    });

    it('should notify template of signal changes', () => {
      const initialText = debugElement.query(By.css('h1')).nativeElement.textContent;
      expect(initialText).toContain('daggerverse-test-angular-project');

      component.title.set('Another Title');
      fixture.detectChanges();

      const updatedText = debugElement.query(By.css('h1')).nativeElement.textContent;
      expect(updatedText).toContain('Another Title');
      expect(initialText).not.toEqual(updatedText);
    });
  });

  describe('Component Imports', () => {
    it('should import RouterOutlet', () => {
      const routerOutlet = debugElement.query(By.directive(RouterOutlet));
      expect(routerOutlet).toBeTruthy();
    });

    it('should be a standalone component', () => {
      // Check that the component has the imports metadata
      const metadata = (App as any).ɵcmp;
      expect(metadata).toBeDefined();
      // Standalone components will have dependencies defined
      expect(metadata.dependencies).toBeDefined();
    });
  });

  describe('Protected Properties', () => {
    it('should have protected title property', () => {
      // Verify that the component has the title property
      expect('title' in component).toBe(true);
    });
  });

  describe('Template Structure', () => {
    it('should have correct HTML structure', () => {
      const h1 = debugElement.query(By.css('h1'));
      const routerOutlet = debugElement.query(By.directive(RouterOutlet));

      expect(h1).toBeTruthy();
      expect(routerOutlet).toBeTruthy();
    });

    it('should not have any initial styles', () => {
      // Verify the component has empty styles array
      const metadata = (App as any).ɵcmp;
      expect(metadata.styles?.length || 0).toBe(0);
    });
  });
});
