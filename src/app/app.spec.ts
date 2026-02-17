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

    it('should have title signal initialized with default value', () => {
      expect(component['title']()).toBe('daggerverse-test-angular-project');
    });
  });

  describe('Template Rendering', () => {
    it('should render the h1 element with the title', () => {
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const h1 = compiled.querySelector('h1');

      expect(h1).toBeTruthy();
      expect(h1.textContent).toContain('Hello, daggerverse-test-angular-project');
    });

    it('should include the RouterOutlet component', () => {
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const routerOutlet = compiled.querySelector('router-outlet');

      expect(routerOutlet).toBeTruthy();
    });
  });

  describe('Signal Reactivity', () => {
    it('should update the template when title signal changes', () => {
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      let h1 = compiled.querySelector('h1');

      expect(h1.textContent).toContain('daggerverse-test-angular-project');

      component['title'].set('Updated Title');
      fixture.detectChanges();

      h1 = compiled.querySelector('h1');
      expect(h1.textContent).toContain('Updated Title');
    });
  });

  describe('Styling and Structure', () => {
    it('should have empty styles array', () => {
      const metadata = (App as any).__ngComponentDef;
      expect(metadata.styles).toEqual([]);
    });

    it('should use selector app-root', () => {
      const metadata = (App as any).__ngComponentDef;
      expect(metadata.selectors[0][0]).toBe('app-root');
    });
  });

  describe('Imports', () => {
    it('should import RouterOutlet for routing support', () => {
      const metadata = (App as any).__ngComponentDef;
      expect(metadata.dependencies).toBeDefined();
    });
  });
});
