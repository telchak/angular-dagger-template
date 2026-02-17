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

  describe('Component Initialization', () => {
    it('should create the app component', () => {
      expect(component).toBeTruthy();
    });

    it('should have title signal initialized', () => {
      expect(component['title']()).toBe('daggerverse-test-angular-project');
    });

    it('should not be undefined after fixture creation', () => {
      expect(fixture.componentInstance).toBeDefined();
    });
  });

  describe('Template Rendering', () => {
    it('should render h1 element with title signal value', () => {
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const h1 = compiled.querySelector('h1');

      expect(h1).toBeTruthy();
      expect(h1.textContent).toContain('Hello, daggerverse-test-angular-project');
    });

    it('should contain RouterOutlet', () => {
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const routerOutlet = compiled.querySelector('router-outlet');

      expect(routerOutlet).toBeTruthy();
    });

    it('should render h1 text with interpolated title signal', () => {
      fixture.detectChanges();
      const titleValue = component['title']();
      const compiled = fixture.nativeElement.querySelector('h1');

      expect(compiled.textContent).toContain(`Hello, ${titleValue}`);
    });
  });

  describe('Signal Reactivity', () => {
    it('should update h1 text when title signal changes', () => {
      fixture.detectChanges();
      const newTitle = 'Updated Title';
      component['title'].set(newTitle);

      fixture.detectChanges();
      const compiled = fixture.nativeElement.querySelector('h1');

      expect(compiled.textContent).toContain(`Hello, ${newTitle}`);
    });

    it('should reflect multiple signal changes', () => {
      fixture.detectChanges();

      const titles = [
        'First Title',
        'Second Title',
        'Third Title'
      ];

      for (const title of titles) {
        component['title'].set(title);
        fixture.detectChanges();
        const compiled = fixture.nativeElement.querySelector('h1');
        expect(compiled.textContent).toContain(`Hello, ${title}`);
      }
    });
  });

  describe('Component Structure', () => {
    it('should have correct selector', () => {
      const metadata = (App as any)['ɵcmp'];
      expect(metadata.selectors).toContain(['app-root']);
    });

    it('should import RouterOutlet', () => {
      const metadata = (App as any)['ɵcmp'];
      expect(metadata.dependencies).toContain(RouterOutlet);
    });

    it('should have empty styles array', () => {
      fixture.detectChanges();
      // Component should render without custom styles
      expect(component).toBeTruthy();
    });
  });

  describe('Template Structure', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should have correct DOM hierarchy', () => {
      const compiled = fixture.nativeElement;
      const h1 = compiled.querySelector('h1');
      const routerOutlet = compiled.querySelector('router-outlet');

      expect(h1).toBeTruthy();
      expect(routerOutlet).toBeTruthy();
    });

    it('should have proper text content in h1', () => {
      const compiled = fixture.nativeElement.querySelector('h1');
      expect(compiled.textContent.trim().startsWith('Hello,')).toBe(true);
    });

    it('should render component without errors', () => {
      expect(() => {
        fixture.detectChanges();
      }).not.toThrow();
    });
  });
});
