import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { App } from './app';

describe('App Component', () => {
  let component: App;
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Component Initialization', () => {
    it('should create the app component', () => {
      expect(component).toBeDefined();
    });

    it('should have title signal with default value', () => {
      expect(component['title']()).toBe('daggerverse-test-angular-project');
    });
  });

  describe('Template Rendering', () => {
    it('should render h1 element with title', () => {
      const compiled = fixture.nativeElement;
      const heading = compiled.querySelector('h1');
      expect(heading).toBeTruthy();
      expect(heading.textContent).toContain('Hello, daggerverse-test-angular-project');
    });

    it('should render router-outlet', () => {
      const compiled = fixture.nativeElement;
      const routerOutlet = compiled.querySelector('router-outlet');
      expect(routerOutlet).toBeTruthy();
    });

    it('should update heading when title signal changes', () => {
      // Update the signal
      component['title'].set('Updated Title');
      fixture.detectChanges();

      const compiled = fixture.nativeElement;
      const heading = compiled.querySelector('h1');
      expect(heading.textContent).toContain('Hello, Updated Title');
    });
  });

  describe('Signal Reactivity', () => {
    it('should have a protected title signal', () => {
      const titleSignal = component['title'];
      expect(typeof titleSignal === 'function').toBe(true);
    });

    it('should allow updating title through signal setter', () => {
      const newTitle = 'New Test Title';
      component['title'].set(newTitle);
      expect(component['title']()).toBe(newTitle);
    });
  });

  describe('Component Styling and Setup', () => {
    it('should have RouterOutlet imported', () => {
      // Verify the component can handle router outlet
      const compiled = fixture.nativeElement;
      const routerOutlet = compiled.querySelector('router-outlet');
      expect(routerOutlet).toBeTruthy();
    });

    it('should be a standalone component', () => {
      // The component metadata should have imports array (standalone feature)
      const metadata = (App as any).ɵcmp;
      expect(metadata).toBeDefined();
    });
  });

  describe('Component Lifecycle', () => {
    it('should initialize on component creation', () => {
      expect(component).toBeTruthy();
      expect(fixture.componentInstance).toBe(component);
    });

    it('should detect changes and update template', () => {
      const compiled = fixture.nativeElement;
      let heading = compiled.querySelector('h1');
      expect(heading.textContent).toContain('daggerverse-test-angular-project');

      // Change title and detect changes
      component['title'].set('Changed');
      fixture.detectChanges();

      heading = compiled.querySelector('h1');
      expect(heading.textContent).toContain('Hello, Changed');
    });
  });
});
