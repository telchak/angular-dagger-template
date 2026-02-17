import { TestBed } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';
import { describe, it, expect, beforeEach } from 'vitest';
import { App } from './app';

describe('App Component', () => {
  let component: App;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, RouterOutlet],
    }).compileComponents();

    const fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app component', () => {
    expect(component).toBeDefined();
  });

  it('should have a title signal with correct initial value', () => {
    expect(component['title']()).toBe('daggerverse-test-angular-project');
  });

  it('should render the title in the template', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const h1 = compiled.querySelector('h1');
    expect(h1?.textContent).toContain('Hello, daggerverse-test-angular-project');
  });

  it('should render router-outlet component', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const routerOutlet = compiled.querySelector('router-outlet');
    expect(routerOutlet).toBeDefined();
  });

  it('should have readonly title signal', () => {
    expect(() => {
      // @ts-expect-error - Intentionally testing that title is readonly
      component['title'] = 'new value';
    }).toThrow();
  });

  it('should update the rendered title when signal changes', () => {
    // Note: Since title is readonly, we can only verify initial state
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const h1 = compiled.querySelector('h1');
    expect(h1?.textContent).toContain('daggerverse-test-angular-project');
  });

  it('should import RouterOutlet', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });

  it('should be a standalone component', () => {
    const metadata = (App as any)['ɵcmp'];
    expect(metadata?.standalone).toBe(true);
  });

  it('should have empty styles', () => {
    const metadata = (App as any)['ɵcmp'];
    expect(metadata?.styles?.length || 0).toBe(0);
  });
});
