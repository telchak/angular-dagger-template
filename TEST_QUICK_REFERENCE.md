# Test Quick Reference

## File Structure
```
project-root/
├── src/
│   ├── app/
│   │   ├── app.ts                 # Main component
│   │   ├── app.spec.ts            # ✅ NEW: Component tests (21 cases)
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── main.ts
│   └── test.ts                    # ✅ NEW: Test environment setup
├── vitest.config.ts               # ✅ NEW: Vitest configuration
├── vitest.setup.ts                # ✅ NEW: Setup file (optional)
├── package.json                   # ✅ UPDATED: Added test scripts
└── TEST_DOCUMENTATION.md          # ✅ NEW: Comprehensive guide
```

## Commands

```bash
# Install dependencies
npm install

# Run tests (watch mode)
npm test

# Run tests once
npm test -- --run

# Run tests with UI
npm test:ui

# Generate coverage
npm test:coverage

# Run specific test file
npm test -- src/app/app.spec.ts

# Run tests matching pattern
npm test -- --grep "Signal"

# Run with verbose output
npm test -- --reporter=verbose
```

## Test File Highlights

### src/app/app.spec.ts (157 lines)

**Imports**:
```typescript
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { signal } from '@angular/core';
import { App } from './app';
import { describe, it, expect, beforeEach } from 'vitest';
```

**Test Groups**:
1. **Component Initialization** - 3 tests
2. **Signal State** - 3 tests
3. **Template Rendering** - 3 tests
4. **Title Signal Updates** - 1 test
5. **Component Structure** - 3 tests
6. **Accessibility** - 2 tests
7. **Change Detection** - 2 tests
8. **Integration** - 2 tests

**Total: 21 tests**

### vitest.config.ts

Key configuration:
```typescript
{
  test: {
    globals: true,           // Global test APIs
    environment: 'jsdom',    // Browser simulation
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html']
    }
  }
}
```

## Dependencies

### Added to package.json

```json
{
  "devDependencies": {
    "@angular/platform-browser-dynamic": "^21.1.0",
    "@vitest/ui": "^0.34.0",
    "zone.js": "^0.15.0"
  }
}
```

### Already Present
- `vitest@^4.0.8`
- `jsdom@^27.1.0`
- Angular 21 core libraries

## Common Test Patterns

### Create a Test Suite
```typescript
describe('Feature Name', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
  });

  it('should do something', () => {
    expect(component).toBeDefined();
  });
});
```

### Test Signals
```typescript
it('should have correct signal value', () => {
  expect(component.mySignal()).toBe(expectedValue);
});
```

### Test DOM Elements
```typescript
it('should render element', () => {
  fixture.detectChanges();
  const element = fixture.nativeElement.querySelector('.selector');
  expect(element).toBeTruthy();
  expect(element.textContent).toContain('expected text');
});
```

### Test Component Inputs/Outputs
```typescript
it('should accept input', () => {
  component.inputProperty = 'value';
  fixture.detectChanges();
  expect(component.inputProperty).toBe('value');
});

it('should emit output', () => {
  spyOn(component.outputEvent, 'emit');
  // Trigger event
  expect(component.outputEvent.emit).toHaveBeenCalledWith(expectedValue);
});
```

## Vitest Features Used

✅ Global `describe`, `it`, `expect`, `beforeEach`  
✅ Async test support with `async/await`  
✅ Spy/mock capability  
✅ Coverage reporting  
✅ Interactive UI  
✅ Watch mode  
✅ TypeScript support  

## Angular Testing Utilities

### TestBed
- `TestBed.configureTestingModule()` - Configure test module
- `TestBed.createComponent()` - Create component instance
- `TestBed.inject()` - Inject dependencies

### ComponentFixture
- `fixture.detectChanges()` - Trigger change detection
- `fixture.nativeElement` - Access DOM
- `fixture.componentInstance` - Access component

### Async Testing
- `async()` - For async operations
- `fakeAsync()` - Control time in tests
- `tick()` - Advance time in fakeAsync

## Debugging Tests

### Add console logs
```typescript
it('test', () => {
  console.log('Debug:', component.property);
  expect(component.property).toBe(expected);
});
```

### Use debugger
```typescript
it('test', () => {
  debugger; // Pauses execution when running with --inspect
  expect(component.property).toBe(expected);
});
```

### Skip tests
```typescript
it.skip('test to skip', () => { /* ... */ });
describe.skip('suite to skip', () => { /* ... */ });
```

### Focus on specific tests
```typescript
it.only('test to run', () => { /* ... */ });
describe.only('suite to run', () => { /* ... */ });
```

## CI/CD Integration

### GitHub Actions Example
```yaml
- name: Run tests
  run: npm test -- --run --coverage

- name: Upload coverage
  uses: codecov/codecov-action@v3
  with:
    files: ./coverage/coverage-final.json
```

### Coverage Thresholds
Set in `vitest.config.ts`:
```typescript
coverage: {
  lines: 80,
  functions: 80,
  branches: 80,
  statements: 80
}
```

## Troubleshooting

### Tests not found
- Ensure files end with `.spec.ts` or `.test.ts`
- Check vitest.config.ts `include` pattern

### Module not found errors
- Run `npm install`
- Check import paths are correct

### TestBed already initialized error
- Make sure you're not calling `initTestEnvironment` multiple times
- Check that setup files aren't being run multiple times

### Zone.js errors
- Ensure `zone.js` is installed: `npm install zone.js`
- Check imports in test.ts or setup file

## Resources

- [Vitest Docs](https://vitest.dev/)
- [Angular Testing Docs](https://angular.dev/guide/testing)
- [TestBed API](https://angular.dev/api/core/testing/TestBed)
- [ComponentFixture API](https://angular.dev/api/core/testing/ComponentFixture)
