import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';
import { App } from './app';
import { describe, it, expect, beforeEach } from 'vitest';

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

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it('should have title signal with default value', () => {
    expect(component['title']()).toBe('daggerverse-test-angular-project');
  });

  it('should render the title in the template', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const heading = compiled.querySelector('h1');

    expect(heading).toBeTruthy();
    expect(heading?.textContent).toContain('daggerverse-test-angular-project');
  });

  it('should render h1 with correct text content', () => {
    fixture.detectChanges();
    const h1 = fixture.nativeElement.querySelector('h1');

    expect(h1).toBeTruthy();
    expect(h1.textContent).toBe('Hello, daggerverse-test-angular-project');
  });

  it('should have router-outlet in template', () => {
    fixture.detectChanges();
    const routerOutlet = fixture.nativeElement.querySelector('router-outlet');

    expect(routerOutlet).toBeTruthy();
  });

  it('should import RouterOutlet', () => {
    expect(App.ɵcmp.dependencies).toBeTruthy();
  });

  it('should update displayed title when signal changes', () => {
    fixture.detectChanges();
    let heading = fixture.nativeElement.querySelector('h1');
    expect(heading.textContent).toBe('Hello, daggerverse-test-angular-project');

    // Update the signal
    component['title'].set('New Title');
    fixture.detectChanges();

    heading = fixture.nativeElement.querySelector('h1');
    expect(heading.textContent).toBe('Hello, New Title');
  });

  it('should be a standalone component', () => {
    const metadata = (App as any).ɵcmp;
    expect(metadata.standalone).toBe(true);
  });

  it('should have app-root selector', () => {
    const metadata = (App as any).ɵcmp;
    expect(metadata.selectors[0][0]).toBe('app-root');
  });

  it('should not have inline styles', () => {
    const metadata = (App as any).ɵcmp;
    expect(metadata.styles).toEqual([]);
  });
});
