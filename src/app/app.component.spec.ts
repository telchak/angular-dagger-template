import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

describe('App', () => {
  let fixture: ComponentFixture<App>;
  let component: App;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App], // Standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'daggerverse-test-angular-project' title`, () => {
    expect(component.title()).toEqual('daggerverse-test-angular-project');
  });

  // Example of testing template content (optional)
  it('should render title in an h1 tag', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, daggerverse-test-angular-project');
  });
});
