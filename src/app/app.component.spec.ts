import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { signal } from '@angular/core';

describe('App', () => {
  let fixture: ComponentFixture<App>;
  let component: App;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    // Set the signal value directly for testing
    // Or if the component has an input, use fixture.componentInstance.input = '...'
    fixture.componentInstance.title.set('Test Title');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Test Title');
  });
});
