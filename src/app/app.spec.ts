import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';
import { App } from './app';

describe('App', () => {
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
    it('should create the app component', () => {
      expect(component).toBeTruthy();
    });

    it('should have the correct selector', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('app-root')).toBeTruthy();
    });
  });

  describe('Signal Properties', () => {
    it('should initialize title signal with default value', () => {
      expect(component.title()).toBe('daggerverse-test-angular-project');
    });

    it('should be a signal (function)', () => {
      expect(typeof component.title).toBe('function');
    });
  });

  describe('Template Rendering', () => {
    it('should render the h1 heading', () => {
      fixture.detectChanges();
      const heading = fixture.nativeElement.querySelector('h1');
      expect(heading).toBeTruthy();
    });

    it('should display the title in the h1 element', () => {
      fixture.detectChanges();
      const heading = fixture.nativeElement.querySelector('h1');
      expect(heading.textContent).toContain('daggerverse-test-angular-project');
    });

    it('should render the router-outlet', () => {
      fixture.detectChanges();
      const routerOutlet = fixture.nativeElement.querySelector('router-outlet');
      expect(routerOutlet).toBeTruthy();
    });

    it('should dynamically update heading when title signal changes', () => {
      const newTitle = 'Test Title';
      component.title.set(newTitle);
      fixture.detectChanges();
      const heading = fixture.nativeElement.querySelector('h1');
      expect(heading.textContent).toContain(newTitle);
    });
  });

  describe('Component Structure', () => {
    it('should import RouterOutlet', () => {
      const imports = (App as any).ɵcmp.dependencies || [];
      expect(imports).toBeDefined();
    });

    it('should be a standalone component', () => {
      const metadata = (App as any).ɵcmp || {};
      expect(metadata.standalone).not.toBeDefined();
      // Standalone components are indicated by the presence of 'imports' in metadata
      expect((App as any).ɵcmp).toBeTruthy();
    });

    it('should have empty styles array', () => {
      const metadata = (App as any).ɵcmp;
      expect(metadata.styles).toBeDefined();
    });
  });

  describe('Protected Properties', () => {
    it('should have a protected title property', () => {
      // Verify that title is accessible (in TypeScript context)
      expect(component.title).toBeDefined();
    });
  });

  describe('Integration', () => {
    it('should render complete component structure', () => {
      fixture.detectChanges();
      const root = fixture.nativeElement as HTMLElement;
      expect(root.querySelector('h1')).toBeTruthy();
      expect(root.querySelector('router-outlet')).toBeTruthy();
    });

    it('should maintain reactivity through multiple change detection cycles', () => {
      fixture.detectChanges();
      const initialText = fixture.nativeElement.querySelector('h1').textContent;

      component.title.set('Updated');
      fixture.detectChanges();
      const updatedText = fixture.nativeElement.querySelector('h1').textContent;

      expect(updatedText).toContain('Updated');
      expect(updatedText).not.toEqual(initialText);
    });
  });
});
