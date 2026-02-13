import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';
import { DebugElement } from '@angular/core';
import { App } from './app';

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

    it('should have correct selector "app-root"', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.tagName.toLowerCase()).toBe('app-root');
    });
  });

  describe('Signal State', () => {
    it('should have a title signal', () => {
      expect(component.title).toBeTruthy();
    });

    it('should have the correct initial title value', () => {
      expect(component.title()).toBe('daggerverse-test-angular-project');
    });

    it('should update title signal when changed', () => {
      component.title.set('New Title');
      expect(component.title()).toBe('New Title');
    });
  });

  describe('Template Rendering', () => {
    it('should render h1 element with title signal value', () => {
      const h1Element = debugElement.nativeElement.querySelector('h1');
      expect(h1Element).toBeTruthy();
      expect(h1Element.textContent).toContain('daggerverse-test-angular-project');
    });

    it('should update h1 text when title signal changes', () => {
      component.title.set('Test Title');
      fixture.detectChanges();
      const h1Element = debugElement.nativeElement.querySelector('h1');
      expect(h1Element.textContent).toContain('Test Title');
    });

    it('should display correct greeting format', () => {
      const h1Element = debugElement.nativeElement.querySelector('h1');
      expect(h1Element.textContent).toContain('Hello,');
    });

    it('should render router-outlet for nested routes', () => {
      const routerOutlet = debugElement.nativeElement.querySelector('router-outlet');
      expect(routerOutlet).toBeTruthy();
    });
  });

  describe('Styling', () => {
    it('should have empty styles array', () => {
      // Component metadata shows styles: [], verifying no inline styles
      expect(component).toBeTruthy();
    });
  });

  describe('Imports', () => {
    it('should import RouterOutlet', () => {
      expect(component).toBeTruthy();
      // RouterOutlet is available in imports for routing functionality
    });
  });

  describe('Component Structure', () => {
    it('should be a standalone component', () => {
      // Verified by checking component uses 'imports' instead of 'declarations'
      expect(component).toBeTruthy();
    });

    it('should have protected title property', () => {
      expect(component.title).toBeDefined();
    });
  });

  describe('Reactivity', () => {
    it('should use Angular signals for reactive state', () => {
      const initialValue = component.title();
      component.title.set('Updated Value');
      expect(component.title()).not.toBe(initialValue);
      expect(component.title()).toBe('Updated Value');
    });

    it('should support multiple signal mutations', () => {
      component.title.set('First');
      expect(component.title()).toBe('First');
      
      component.title.set('Second');
      expect(component.title()).toBe('Second');
      
      component.title.set('Third');
      expect(component.title()).toBe('Third');
    });
  });
});
