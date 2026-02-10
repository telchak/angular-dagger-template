# Testing Guide for src/app/app.ts

## Quick Start

### Run Tests
```bash
npm test
```

### Run Tests in Watch Mode
```bash
npm test -- --watch
```

### Run Only App Component Tests
```bash
npx vitest src/app/app.spec.ts
```

### Run with Coverage
```bash
npx vitest --coverage src/app/app.spec.ts
```

## Test File Information

**File:** `src/app/app.spec.ts`  
**Component:** `App` (root application component)  
**Total Tests:** 18 test cases across 8 describe blocks

## Test Structure

### Setup
- Uses Angular TestBed for component initialization
- Configures module with App component and RouterOutlet
- Creates component fixture before each test

### Test Categories

#### 1. Initialization Tests
Verifies component creation and selector setup.

#### 2. Signal Tests
Validates the protected `title` signal:
- Default value: `'daggerverse-test-angular-project'`
- Type verification
- Encapsulation (protected property)

#### 3. Template Rendering Tests
Checks template output:
- H1 element rendering
- Signal interpolation
- RouterOutlet presence
- Heading hierarchy

#### 4. Signal Integration Tests
Tests template reactivity with signals.

#### 5. Component Structure Tests
Validates component configuration:
- Standalone component setup
- RouterOutlet import
- Styles configuration

#### 6. Accessibility Tests
Ensures semantic HTML:
- Proper heading hierarchy
- Routing structure

#### 7. Change Detection Tests
Verifies Angular change detection works correctly.

## Understanding the Tests

### Example: Testing Signal Interpolation
```typescript
it('should render h1 with correct greeting text', () => {
  fixture.detectChanges();  // Trigger change detection
  const h1Element = fixture.nativeElement.querySelector('h1');
  expect(h1Element.textContent).toBe('Hello, daggerverse-test-angular-project');
});
```

This test:
1. Triggers change detection to update the template
2. Queries the DOM for the h1 element
3. Asserts the text content includes the signal's value

### Example: Testing Signal Type
```typescript
it('should be a signal that can be read', () => {
  const titleValue = component.title();
  expect(typeof titleValue).toBe('string');
});
```

This test:
1. Calls the signal function to get its value
2. Verifies the returned type is a string

## Dependencies

All dependencies are already installed:
- `@angular/core` & `@angular/platform-browser-dynamic` - For TestBed
- `@angular/router` - For RouterOutlet
- `vitest` - Test runner
- `typescript` - TypeScript compilation

## Troubleshooting

### "Cannot find module '@angular/core/testing'"
Ensure `@angular/core` is installed:
```bash
npm install @angular/core
```

### Tests not running
Verify Vitest is installed and configured:
```bash
npm install --save-dev vitest
npx vitest --version
```

### Signal not resolving
Angular 21+ signals should work out of the box. If issues occur, check:
- Angular version: `ng version` (should be 21.1.0+)
- TypeScript version: Should be 5.9.2+

## Best Practices Applied

✅ **Standalone Component Testing** - Uses modern Angular patterns  
✅ **Vitest Integration** - Compatible with current test framework  
✅ **Proper Fixture Setup** - beforeEach with async TestBed config  
✅ **Change Detection** - Proper use of detectChanges()  
✅ **DOM Query** - Using nativeElement for assertions  
✅ **Signal Testing** - Tests signal functions and interpolation  
✅ **Accessibility** - Semantic HTML validation  
✅ **Clean Assertions** - Clear, readable expect statements  

## Extending Tests

To add more tests for future components:

### Service Testing Pattern
```typescript
describe('MyService', () => {
  let service: MyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyService]
    });
    service = TestBed.inject(MyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
```

### Component with Inputs/Outputs
```typescript
describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.componentInstance.myInput = 'value';
    fixture.detectChanges();
  });
});
```

## Additional Resources

- Angular Testing Guide: https://angular.dev/guide/testing
- Vitest Documentation: https://vitest.dev/
- TestBed API: https://angular.dev/guide/testing/utility-apis
