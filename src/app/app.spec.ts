import { describe, it, expect, beforeEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';
import { App } from './app';

describe('App Component', () => {
  let component: App;
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, RouterOutlet],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
  });

  describe('Component Creation', () => {
    it('should create the App component', () => {
      expect(component).toBeDefined();
    });

    it('should have a title signal initialized', () => {
      expect(component['title']).toBeDefined();
      expect(component['title']()).toBe('daggerverse-test-angular-project');
    });
  });

  describe('Template Rendering', () => {
    it('should render the heading with title signal', () => {
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const heading = compiled.querySelector('h1');
      expect(heading?.textContent).toContain('Hello, daggerverse-test-angular-project');
    });

    it('should have router-outlet in the template', () => {
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const routerOutlet = compiled.querySelector('router-outlet');
      expect(routerOutlet).toBeTruthy();
    });
  });

  describe('Signal Reactivity', () => {
    it('should update the title when the signal changes', () => {
      fixture.detectChanges();
      const initialHeading = fixture.nativeElement.querySelector('h1').textContent;
      expect(initialHeading).toContain('daggerverse-test-angular-project');

      // Simulate signal update
      component['title'].set('Updated Title');
      fixture.detectChanges();

      const updatedHeading = fixture.nativeElement.querySelector('h1').textContent;
      expect(updatedHeading).toContain('Updated Title');
    });

    it('should maintain signal value after multiple updates', () => {
      component['title'].set('First Update');
      expect(component['title']()).toBe('First Update');

      component['title'].set('Second Update');
      expect(component['title']()).toBe('Second Update');

      component['title'].set('Third Update');
      expect(component['title']()).toBe('Third Update');
    });
  });

  describe('Component Selector', () => {
    it('should have the correct selector', () => {
      const metadata = (App as any).ɵcmp;
      expect(metadata.selectors[0][0]).toBe('app-root');
    });
  });

  describe('Component Imports', () => {
    it('should import RouterOutlet', () => {
      const metadata = (App as any).ɵcmp;
      expect(metadata.dependencies).toContain(RouterOutlet);
    });
  });
});
