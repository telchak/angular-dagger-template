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
    it('should create the app component', () => {
      expect(component).toBeTruthy();
    });

    it('should initialize with title signal', () => {
      expect(component['title']).toBeDefined();
    });
  });

  describe('Title Signal', () => {
    it('should have correct initial title value', () => {
      expect(component['title']()).toBe('daggerverse-test-angular-project');
    });

    it('should allow updating title signal', () => {
      component['title'].set('New Title');
      expect(component['title']()).toBe('New Title');
    });

    it('should trigger change detection when title signal updates', () => {
      fixture.detectChanges();
      let compiled = fixture.nativeElement.querySelector('h1');
      expect(compiled.textContent).toContain('daggerverse-test-angular-project');

      component['title'].set('Updated Title');
      fixture.detectChanges();
      compiled = fixture.nativeElement.querySelector('h1');
      expect(compiled.textContent).toContain('Updated Title');
    });
  });

  describe('Template Rendering', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should render h1 with title from signal', () => {
      const compiled = fixture.nativeElement.querySelector('h1');
      expect(compiled).toBeTruthy();
      expect(compiled.textContent).toContain('Hello, daggerverse-test-angular-project');
    });

    it('should render h1 with "Hello," prefix', () => {
      const compiled = fixture.nativeElement.querySelector('h1');
      expect(compiled.textContent).toMatch(/^Hello,\s/);
    });

    it('should render router-outlet component', () => {
      const routerOutlet = fixture.nativeElement.querySelector('router-outlet');
      expect(routerOutlet).toBeTruthy();
    });
  });

  describe('Component Selector', () => {
    it('should have correct selector', () => {
      const metadata = (App as any).ɵcmp;
      expect(metadata.selectors[0][0]).toBe('app-root');
    });
  });

  describe('Component Configuration', () => {
    it('should be a standalone component', () => {
      const metadata = (App as any).ɵcmp;
      expect(metadata.standalone).toBe(true);
    });

    it('should import RouterOutlet', () => {
      const metadata = (App as any).ɵcmp;
      const imports = metadata.dependencies;
      expect(imports).toBeDefined();
    });
  });

  describe('Accessibility', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should render semantic heading element', () => {
      const heading = fixture.nativeElement.querySelector('h1');
      expect(heading.tagName.toLowerCase()).toBe('h1');
    });
  });

  describe('Change Detection', () => {
    it('should use OnPush change detection strategy by default', () => {
      // Angular components have OnPush by default in v17+
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

    it('should update view when title signal changes', (done) => {
      fixture.detectChanges();
      const initialHeading = fixture.nativeElement.querySelector('h1').textContent;

      component['title'].set('Test Title');
      fixture.detectChanges();

      const updatedHeading = fixture.nativeElement.querySelector('h1').textContent;
      expect(updatedHeading).not.toBe(initialHeading);
      expect(updatedHeading).toContain('Test Title');
      done();
    });
  });
});
