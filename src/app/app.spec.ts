
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { App } from './app';
import { RouterOutlet } from '@angular/router'; // Import RouterOutlet if it's used in the template

describe('App', () => {
  let fixture: ComponentFixture<App>;
  let component: App;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, RouterOutlet], // Import standalone component directly
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger change detection
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'daggerverse-test-angular-project' title`, () => {
    expect(component.title()).toEqual('daggerverse-test-angular-project');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, daggerverse-test-angular-project');
  });
});
