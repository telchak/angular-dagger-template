import { describe, it, expect, beforeEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
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
  });

  describe('Initialization', () => {
    it('should create the app component', () => {
      expect(component).toBeDefined();
    });

    it('should have a title signal with default value', () => {
      expect(component['title']()).toBe('daggerverse-test-angular-project');
    });
  });

  describe('Template Rendering', () => {
    it('should render the heading with the title signal value', () => {
      fixture.detectChanges();
      const heading = fixture.nativeElement.querySelector('h1');
      expect(heading).toBeDefined();
      expect(heading.textContent).toContain('Hello, daggerverse-test-angular-project');
    });

    it('should render router-outlet component', () => {
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
    it('should be a signal', () => {
      const title = component['title'];
      expect(typeof title).toBe('function');
    });

    it('should have a set method to update the signal', () => {
      const initialValue = component['title']();
      component['title'].set('New Value');
      expect(component['title']()).toBe('New Value');
      expect(component['title']()).not.toBe(initialValue);
    });
  });

  describe('Component Structure', () => {
    it('should have standalone component structure', () => {
      const componentMetadata = (App as any)['ɵcmp'];
      expect(componentMetadata).toBeDefined();
    });

    it('should import RouterOutlet', () => {
      fixture.detectChanges();
      const template = fixture.nativeElement.innerHTML;
      expect(template).toContain('router-outlet');
    });
  });

  describe('DOM Structure', () => {
    it('should have correct DOM hierarchy', () => {
      fixture.detectChanges();
      const rootElement = fixture.nativeElement;
      const heading = rootElement.querySelector('h1');
      const routerOutlet = rootElement.querySelector('router-outlet');

      expect(heading).toBeTruthy();
      expect(routerOutlet).toBeTruthy();
    });

    it('should render h1 as direct child of root element', () => {
      fixture.detectChanges();
      const heading = fixture.nativeElement.querySelector('h1');
      expect(heading.parentElement).toBe(fixture.nativeElement);
    });
  });

  describe('Title Signal Updates', () => {
    it('should support multiple updates to the signal', () => {
      const values = ['Title 1', 'Title 2', 'Title 3'];
      
      values.forEach((value, index) => {
        component['title'].set(value);
        expect(component['title']()).toBe(value);
      });
    });

    it('should reflect signal updates in the DOM immediately after detectChanges', () => {
      const testValue = 'Test Value';
      component['title'].set(testValue);
      fixture.detectChanges();
      
      const heading = fixture.nativeElement.querySelector('h1');
      expect(heading.textContent).toContain(testValue);
    });
  });

  describe('Selector and Component Metadata', () => {
    it('should have app-root as selector', () => {
      const selector = (App as any)['ɵcmp'].selectors[0][0];
      expect(selector).toBe('app-root');
    });
  });
});
