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
    fixture.detectChanges();
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title signal with the correct initial value', () => {
    expect(component['title']()).toBe('daggerverse-test-angular-project');
  });

  it('should render the title in the template', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Hello, daggerverse-test-angular-project'
    );
  });

  it('should have a router-outlet for routing', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });

  it('should update the rendered title when the signal changes', () => {
    const newTitle = 'Updated Title';
    component['title'].set(newTitle);
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(`Hello, ${newTitle}`);
  });

  it('should have the correct component selector', () => {
    expect(component.constructor['ɵcmp']?.selectors?.[0]?.[0]).toBe('app-root');
  });

  it('should import RouterOutlet for routing functionality', () => {
    const metadata = component.constructor['ɵcmp'];
    const imports = metadata?.data?.['imports'];
    expect(imports).toBeTruthy();
  });
});
