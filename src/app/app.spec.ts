import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { App } from './app';
import { describe, it, expect, beforeEach } from 'vitest';

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

    it('should have a title signal with correct initial value', () => {
      expect(component.title()).toBe('daggerverse-test-angular-project');
    });
  });

  describe('Template Rendering', () => {
    it('should render the heading with the title signal value', () => {
      fixture.detectChanges();
      const heading = fixture.nativeElement.querySelector('h1');
      expect(heading).toBeDefined();
      expect(heading.textContent).toContain('Hello, daggerverse-test-angular-project');
    });

    it('should contain router-outlet element', () => {
      fixture.detectChanges();
      const routerOutlet = fixture.nativeElement.querySelector('router-outlet');
      expect(routerOutlet).toBeDefined();
    });

    it('should update heading when title signal changes', () => {
      fixture.detectChanges();
      let heading = fixture.nativeElement.querySelector('h1');
      expect(heading.textContent).toContain('daggerverse-test-angular-project');

      // Change the signal value
      component.title.set('Updated Title');
      fixture.detectChanges();

      heading = fixture.nativeElement.querySelector('h1');
      expect(heading.textContent).toContain('Hello, Updated Title');
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
  });

  describe('Signal Reactivity', () => {
    it('should be a signal with correct type', () => {
      const title = component.title;
      expect(typeof title()).toBe('string');
    });

    it('should allow setting a new value via set method', () => {
      const newValue = 'New Test Value';
      component.title.set(newValue);
      expect(component.title()).toBe(newValue);
    });

    it('should update multiple times', () => {
      const values = [
        'First Value',
        'Second Value',
        'Third Value',
      ];

      values.forEach((value) => {
        component.title.set(value);
        expect(component.title()).toBe(value);
      });
    });
  });

  describe('Selector', () => {
    it('should have correct selector app-root', () => {
      const metadata = (App as any).ɵcmp;
      expect(metadata.selectors).toEqual([['app-root']]);
    });
  });
});
