import { TestBed, ComponentFixture } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { App } from './app';
import { RouterTestingModule } from '@angular/router/testing';

describe('App Component', () => {
  let component: App;
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
  });

  describe('Component Initialization', () => {
    it('should create the app component', () => {
      expect(component).toBeDefined();
    });

    it('should initialize with the correct title signal', () => {
      expect(component['title']()).toBe('daggerverse-test-angular-project');
    });
  });

  describe('Template Rendering', () => {
    it('should render the h1 heading with the title', () => {
      fixture.detectChanges();
      const heading = fixture.nativeElement.querySelector('h1');
      expect(heading).toBeDefined();
      expect(heading.textContent).toContain('Hello, daggerverse-test-angular-project');
    });

    it('should render the router-outlet', () => {
      fixture.detectChanges();
      const routerOutlet = fixture.nativeElement.querySelector('router-outlet');
      expect(routerOutlet).toBeDefined();
    });

    it('should update heading when title signal changes', () => {
      const newTitle = 'Updated Title';
      component['title'].set(newTitle);
      fixture.detectChanges();
      const heading = fixture.nativeElement.querySelector('h1');
      expect(heading.textContent).toContain(`Hello, ${newTitle}`);
    });
  });

  describe('Signal Reactivity', () => {
    it('should track title signal correctly', () => {
      const initialTitle = component['title']();
      expect(initialTitle).toBe('daggerverse-test-angular-project');

      component['title'].set('New Title');
      expect(component['title']()).toBe('New Title');

      component['title'].set('Another Title');
      expect(component['title']()).toBe('Another Title');
    });

    it('should allow updating the title signal multiple times', () => {
      expect(component['title']()).toBe('daggerverse-test-angular-project');
      component['title'].set('First Update');
      expect(component['title']()).toBe('First Update');
      component['title'].set('Second Update');
      expect(component['title']()).toBe('Second Update');
    });
  });

  describe('Component Structure', () => {
    it('should have the correct component selector', () => {
      expect(component).toBeInstanceOf(App);
    });

    it('should be a standalone component', () => {
      const metadata = (App as any).ɵcmp;
      expect(metadata.standalone).toBe(true);
    });

    it('should import RouterOutlet', () => {
      fixture.detectChanges();
      const routerOutlet = fixture.debugElement.nativeElement.querySelector(
        'router-outlet'
      );
      expect(routerOutlet).toBeTruthy();
    });
  });

  describe('DOM Structure', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should contain exactly one h1 element', () => {
      const headings = fixture.nativeElement.querySelectorAll('h1');
      expect(headings.length).toBe(1);
    });

    it('should contain exactly one router-outlet element', () => {
      const outlets = fixture.nativeElement.querySelectorAll('router-outlet');
      expect(outlets.length).toBe(1);
    });

    it('should have h1 as a direct child of the component root', () => {
      const children = fixture.nativeElement.children;
      const hasH1Child = Array.from(children).some(
        (child: any) => child.tagName === 'H1'
      );
      expect(hasH1Child).toBe(true);
    });
  });

  describe('Change Detection', () => {
    it('should update DOM when signal changes and detectChanges is called', () => {
      fixture.detectChanges();
      let heading = fixture.nativeElement.querySelector('h1');
      expect(heading.textContent).toContain('daggerverse-test-angular-project');

      component['title'].set('Test Update');
      fixture.detectChanges();
      heading = fixture.nativeElement.querySelector('h1');
      expect(heading.textContent).toContain('Test Update');
    });

    it('should properly detect changes after signal update', () => {
      fixture.detectChanges();
      const testTitle = 'Change Detection Test';
      component['title'].set(testTitle);
      fixture.detectChanges();
      expect(fixture.nativeElement.textContent).toContain(testTitle);
    });
  });

  describe('Accessibility', () => {
    it('should have semantic heading structure', () => {
      fixture.detectChanges();
      const heading = fixture.nativeElement.querySelector('h1');
      expect(heading).toBeTruthy();
      expect(heading.textContent.length).toBeGreaterThan(0);
    });
  });
});
