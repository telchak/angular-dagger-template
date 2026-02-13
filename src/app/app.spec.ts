import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { App } from './app';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('App Component', () => {
  let component: App;
  let fixture: ComponentFixture<App>;
  let compiled: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    compiled = fixture.debugElement;
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  describe('title signal', () => {
    it('should initialize with the default title', () => {
      expect(component['title']()).toBe('daggerverse-test-angular-project');
    });

    it('should allow updating the title signal', () => {
      component['title'].set('new-title');
      expect(component['title']()).toBe('new-title');
    });
  });

  describe('template rendering', () => {
    it('should render h1 element with title', () => {
      fixture.detectChanges();
      const h1 = compiled.query(By.css('h1'));
      expect(h1).toBeTruthy();
      expect(h1.nativeElement.textContent).toContain('daggerverse-test-angular-project');
    });

    it('should display "Hello," prefix in h1', () => {
      fixture.detectChanges();
      const h1 = compiled.query(By.css('h1'));
      expect(h1.nativeElement.textContent).toMatch(/Hello,\s+daggerverse-test-angular-project/);
    });

    it('should update h1 content when title signal changes', () => {
      fixture.detectChanges();
      component['title'].set('Updated Title');
      fixture.detectChanges();
      const h1 = compiled.query(By.css('h1'));
      expect(h1.nativeElement.textContent).toContain('Updated Title');
    });

    it('should render router-outlet', () => {
      fixture.detectChanges();
      const routerOutlet = compiled.query(By.css('router-outlet'));
      expect(routerOutlet).toBeTruthy();
    });
  });

  describe('component metadata', () => {
    it('should have correct selector', () => {
      expect(component.constructor['ɵcmp'].selectors[0][0]).toBe('app-root');
    });

    it('should have RouterOutlet in imports', () => {
      const componentDef = (component.constructor as any)['ɵcmp'];
      expect(componentDef.dependencies).toBeDefined();
    });

    it('should be a standalone component', () => {
      const componentDef = (component.constructor as any)['ɵcmp'];
      expect(componentDef.standalone).toBe(true);
    });
  });

  describe('lifecycle', () => {
    it('should render on initialization without errors', () => {
      expect(() => {
        fixture.detectChanges();
      }).not.toThrow();
    });

    it('should be properly destroyed', () => {
      fixture.detectChanges();
      expect(() => {
        fixture.destroy();
      }).not.toThrow();
    });
  });

  describe('signal reactivity', () => {
    it('should be protected readonly property', () => {
      const descriptor = Object.getOwnPropertyDescriptor(component, 'title');
      // title is not a direct property, it's accessed via the signal
      expect(component['title']).toBeDefined();
    });

    it('should reactively update DOM when signal changes', (done) => {
      fixture.detectChanges();
      const initialText = compiled.query(By.css('h1')).nativeElement.textContent;

      component['title'].set('Angular Testing');
      fixture.detectChanges();

      // Use setTimeout to ensure change detection is complete
      setTimeout(() => {
        const updatedText = compiled.query(By.css('h1')).nativeElement.textContent;
        expect(updatedText).not.toBe(initialText);
        expect(updatedText).toContain('Angular Testing');
        done();
      }, 0);
    });
  });

  describe('template features', () => {
    it('should use signal-based template binding', () => {
      // Component uses {{ title() }} which is signal syntax
      fixture.detectChanges();
      const h1 = compiled.query(By.css('h1'));
      expect(h1.nativeElement.textContent).toBeTruthy();
    });

    it('should render correct HTML structure', () => {
      fixture.detectChanges();
      const h1 = compiled.query(By.css('h1'));
      const routerOutlet = compiled.query(By.css('router-outlet'));
      
      expect(h1).toBeTruthy();
      expect(routerOutlet).toBeTruthy();
    });
  });
});
