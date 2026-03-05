
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { RouterOutlet } from '@angular/router';
import { signal } from '@angular/core';

describe('App', () => {
  let fixture: ComponentFixture<App>;
  let component: App;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App], // Import the standalone component directly
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, daggerverse-test-angular-project');
  });

  it('should have the default title', () => {
    expect(component.title()).toBe('daggerverse-test-angular-project');
  });

});
