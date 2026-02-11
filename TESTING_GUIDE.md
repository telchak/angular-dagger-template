# Angular App Test Suite

This document describes the test files generated for the `src/app/app.ts` component and related configuration files.

## Quick Start

### Install Dependencies
All testing dependencies are already in `package.json`:
- `vitest@^4.0.8` - Test runner
- `jsdom@^27.1.0` - DOM implementation

### Run Tests
```bash
npm test
```

## Test Files Overview

### 1. `app.spec.ts` - Root Component Tests
Tests for the `App` standalone component.

**What it tests:**
- Component creation and initialization
- Signal state management
- Template rendering
- DOM interactions
- Change detection

**Key test cases:**
- Component instantiation
- Signal default values and updates
- H1 heading rendering with signal interpolation
- Router outlet inclusion
- Signal reactivity with DOM synchronization

**Notable features:**
- Uses TestBed for standalone component setup
- Tests signal.set() and signal() read operations
- Validates template interpolation
- Tests change detection with fixture.detectChanges()

### 2. `app.config.spec.ts` - Application Configuration Tests
Tests for the `appConfig` object used in bootstrap.

**What it tests:**
- Configuration object structure
- Provider array configuration
- Router setup
- Browser error listener setup

**Key test cases:**
- appConfig has providers array
- Providers count is >= 2
- Configuration is compatible with bootstrapApplication()

### 3. `app.routes.spec.ts` - Routes Configuration Tests
Tests for the `routes` array used in routing.

**What it tests:**
- Routes array structure
- Route extensibility
- Router compatibility

**Key test cases:**
- Routes is an empty array initially
- Routes supports standard Angular route properties
- Routes are compatible with provideRouter()

## Test Structure

Each test file follows this structure:
```typescript
import { describe, it, expect, beforeEach } from 'vitest';
// Component imports

describe('Component/Feature Name', () => {
  describe('Feature Area 1', () => {
    it('should do something', () => {
      expect(...).toBe(...);
    });
  });
});
```

## Component Testing Best Practices Used

### 1. Standalone Components
Tests configure TestBed with the component directly:
```typescript
await TestBed.configureTestingModule({
  imports: [App, RouterTestingModule],
}).compileComponents();
```

### 2. Signal Testing
Tests verify both signal behavior and DOM updates:
```typescript
component['title'].set(newValue);
fixture.detectChanges();
const heading = fixture.nativeElement.querySelector('h1');
expect(heading.textContent).toContain(newValue);
```

### 3. Template Rendering
Tests use native DOM queries:
```typescript
const heading = fixture.nativeElement.querySelector('h1');
expect(heading).toBeDefined();
```

### 4. Change Detection
Tests explicitly call change detection:
```typescript
fixture.detectChanges();
```

## Test Patterns Demonstrated

### Accessing Private/Protected Members
```typescript
expect(component['title']()).toBe('value');
```

### DOM Querying
```typescript
const element = fixture.nativeElement.querySelector('selector');
```

### Testing Signals
```typescript
component['title'].set('newValue');
expect(component['title']()).toBe('newValue');
```

### Template Text Content
```typescript
expect(element.textContent).toContain('expected text');
```

## Coverage

### Component Logic
- ✅ Signal initialization
- ✅ Signal updates
- ✅ Component creation
- ✅ Metadata (selector, imports)

### Template Rendering
- ✅ Heading element rendering
- ✅ Signal interpolation in template
- ✅ Router outlet presence
- ✅ DOM hierarchy

### Configuration
- ✅ Provider setup
- ✅ Router configuration
- ✅ Error listener setup

### Routing
- ✅ Routes array structure
- ✅ Route compatibility
- ✅ Routes extensibility

## Adding More Tests

### For a New Component
1. Create `component-name.spec.ts`
2. Import the component and dependencies
3. Set up TestBed with the component and required imports
4. Create ComponentFixture and component instance
5. Write test cases

### For a Service
1. Create `service-name.spec.ts`
2. Import the service
3. Inject with TestBed.inject()
4. Test methods and observables

### For a Directive
1. Create `directive-name.spec.ts`
2. Create a test host component
3. Apply the directive
4. Test DOM behavior

## Environment Configuration

The tests run in a DOM-like environment provided by jsdom. This allows:
- Native DOM query support (querySelector, etc.)
- Event simulation
- DOM mutation testing

## Framework Details

### Vitest
- Modern test runner with ES module support
- Fast parallel test execution
- Built-in coverage support
- Angular-friendly configuration

### TestBed
Angular's testing utility:
- Creates component fixtures
- Manages dependency injection
- Provides async compilation
- Handles change detection

### RouterTestingModule
Provides mock routing:
- No actual navigation required
- Router injection available
- Route testing support

## Debugging Tests

### Run single test file
```bash
npm test src/app/app.spec.ts
```

### Run tests matching pattern
```bash
npm test -- --reporter=verbose "should render"
```

### Watch mode
```bash
npm test -- --watch
```

### Debug mode
```bash
node --inspect-brk ./node_modules/.bin/vitest run
```

## Next Steps

1. **Verify tests pass**: Run `npm test`
2. **Add service tests**: Follow the service pattern
3. **Add integration tests**: Test multiple components together
4. **Add E2E tests**: Test user workflows
5. **Set up CI/CD**: Run tests in pipeline

## Resources

- [Angular Testing Guide](https://angular.dev/guide/testing)
- [Vitest Documentation](https://vitest.dev/)
- [TestBed API](https://angular.dev/api/core/testing/TestBed)
- [RouterTestingModule](https://angular.dev/api/router/testing/RouterTestingModule)

## Notes

- Tests use `vitest` syntax (describe, it, expect)
- Angular TestBed is used for component creation
- Signals are tested as functions that can be called and set
- Change detection must be triggered manually
- RouterTestingModule provides routing without navigation

---

**Generated**: Test files for Angular 21+ project with Vitest
**Framework**: Vitest 4.0.8
**Test Pattern**: Unit testing with TestBed
