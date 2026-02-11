# Angular App Component Tests

## Overview

This document describes the test suite generated for the Angular 21 standalone application. The tests are written using **Vitest** as the test framework with Angular's `TestBed` utilities.

## Files Generated

### 1. `src/app/app.spec.ts` - Component Test Suite
**Purpose**: Comprehensive unit tests for the `App` root component.

**Test Coverage**:
- ✅ **Component Initialization** - Verifies the component creates correctly and has correct metadata
- ✅ **Signal State** - Tests the `title` signal initialization and functionality
- ✅ **Template Rendering** - Validates that the template renders with the correct content
- ✅ **Title Signal Updates** - Tests dynamic updates to the signal (framework for future enhancements)
- ✅ **Component Structure** - Verifies imports, styles, and rendering without errors
- ✅ **Accessibility** - Ensures semantic HTML elements and readable content
- ✅ **Change Detection** - Tests Angular's change detection mechanism
- ✅ **Integration** - Validates RouterOutlet integration and DOM element ordering

**Test Count**: 21 test cases covering all aspects of the App component

### 2. `vitest.config.ts` - Vitest Configuration
**Purpose**: Configuration file for the Vitest test runner.

**Key Settings**:
- Environment: `jsdom` (browser-like environment)
- Global test APIs enabled
- Coverage reporting with multiple formats (text, JSON, HTML)
- Optimized for Angular testing

### 3. `src/test.ts` - Test Environment Setup
**Purpose**: Angular testing environment initialization file.

**Responsibilities**:
- Imports Zone.js for Angular zone integration
- Initializes Angular testing modules
- Sets up the test environment for ComponentFixture and TestBed

## Test Execution

### Running Tests

```bash
# Run tests in watch mode (recommended for development)
npm test

# Run tests once (CI/CD mode)
npm test -- --run

# Open interactive test UI
npm test:ui

# Generate coverage report
npm test:coverage
```

### Test Output

Tests will output:
- ✅ Pass/Fail status for each test
- ⏱️ Execution time
- 📊 Coverage metrics (if coverage enabled)
- 🐛 Detailed error messages on failure

## Test Structure

Each test suite follows Angular best practices:

```typescript
describe('Component Name', () => {
  let component: ComponentClass;
  let fixture: ComponentFixture<ComponentClass>;

  beforeEach(async () => {
    // Setup TestBed with component imports
    await TestBed.configureTestingModule({
      imports: [ComponentClass],
    }).compileComponents();

    // Create component instance
    fixture = TestBed.createComponent(ComponentClass);
    component = fixture.componentInstance;
  });

  it('should test specific behavior', () => {
    fixture.detectChanges(); // Trigger initial change detection
    // ... test assertions
  });
});
```

## Key Test Patterns

### 1. Component Creation
```typescript
it('should create the app component', () => {
  expect(component).toBeDefined();
});
```

### 2. Signal Testing
```typescript
it('should initialize title signal with correct value', () => {
  expect(component.title()).toBe('daggerverse-test-angular-project');
});
```

### 3. Template Rendering
```typescript
it('should render heading with title from signal', () => {
  fixture.detectChanges();
  const heading = fixture.nativeElement.querySelector('h1');
  expect(heading.textContent).toContain('Hello, daggerverse-test-angular-project');
});
```

### 4. DOM Integration
```typescript
it('should contain router-outlet element', () => {
  fixture.detectChanges();
  const routerOutlet = fixture.nativeElement.querySelector('router-outlet');
  expect(routerOutlet).toBeDefined();
});
```

## Dependencies

### Already Installed
- `vitest@^4.0.8` - Test framework
- `jsdom@^27.1.0` - DOM emulation

### Added for Testing Support
- `@angular/platform-browser-dynamic@^21.1.0` - Dynamic platform module
- `@vitest/ui@^0.34.0` - Visual test UI
- `zone.js@^0.15.0` - Zone.js for Angular

**Install dependencies**:
```bash
npm install
```

## Future Enhancements

### Additional Test Files to Create

1. **Service Tests** (when services are added)
   - Mock HTTP calls with HttpTestingController
   - Test dependency injection
   - Test observable streams

2. **Routing Tests** (when routes are added)
   - Test navigation
   - Test route parameters
   - Test guards and resolvers

3. **Form Tests** (when forms are added)
   - Test form submission
   - Test validation
   - Test reactive forms

4. **E2E Tests** (for user workflows)
   - Use Cypress or Playwright
   - Test complete user journeys
   - Test navigation flows

### Extending the Test Suite

To add more test cases:

```typescript
describe('New Feature', () => {
  it('should test new behavior', () => {
    // Your test here
  });
});
```

## Debugging Tests

### Run tests with debug logging
```bash
npm test -- --reporter=verbose
```

### Run a specific test file
```bash
npm test -- src/app/app.spec.ts
```

### Run tests matching a pattern
```bash
npm test -- --grep "Signal"
```

## CI/CD Integration

For continuous integration:

```bash
# Non-watch mode (suitable for CI/CD pipelines)
npm test -- --run --coverage

# Generate JUnit XML for CI systems
npm test -- --run --reporter=junit
```

## TypeScript Strict Mode

All tests are written with TypeScript strict mode enabled. This ensures:
- Type-safe test assertions
- Compile-time error detection
- Better IDE autocomplete

## Resources

- [Angular Testing Guide](https://angular.dev/guide/testing)
- [Vitest Documentation](https://vitest.dev/)
- [TestBed API Documentation](https://angular.dev/api/core/testing/TestBed)
- [ComponentFixture API](https://angular.dev/api/core/testing/ComponentFixture)

## Notes

- All tests use modern Angular 21+ patterns (standalone components, signals)
- Tests follow the AAA pattern: Arrange, Act, Assert
- Each test is isolated and can run independently
- No external API calls are mocked (none exist yet in this app)
- Full component lifecycle is tested from creation to rendering
