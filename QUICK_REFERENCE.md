# Test Quick Reference

## Files Created

| File | Lines | Purpose |
|------|-------|---------|
| `src/app/app.spec.ts` | 124 | Component tests for App root |
| `src/app/app.config.spec.ts` | 49 | Configuration validation tests |
| `src/app/app.routes.spec.ts` | 58 | Routes configuration tests |

## Running Tests

```bash
# Run all tests
npm test

# Run specific file
npm test src/app/app.spec.ts

# Watch mode
npm test -- --watch

# Coverage report
npm test -- --coverage

# Filter by test name
npm test -- --reporter=verbose "should render"
```

## Test Structure Template

```typescript
import { describe, it, expect, beforeEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ComponentName', () => {
  let component: ComponentName;
  let fixture: ComponentFixture<ComponentName>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentName],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentName);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
```

## Common Testing Patterns

### Test Component Creation
```typescript
it('should create the component', () => {
  expect(component).toBeDefined();
});
```

### Test Signal (Reading Value)
```typescript
it('should have initial signal value', () => {
  expect(component['signalName']()).toBe('expected');
});
```

### Test Signal (Updating Value)
```typescript
it('should update signal', () => {
  component['signalName'].set('newValue');
  expect(component['signalName']()).toBe('newValue');
});
```

### Test DOM Element Rendering
```typescript
it('should render element', () => {
  fixture.detectChanges();
  const element = fixture.nativeElement.querySelector('h1');
  expect(element).toBeDefined();
});
```

### Test DOM Content
```typescript
it('should render title in heading', () => {
  fixture.detectChanges();
  const heading = fixture.nativeElement.querySelector('h1');
  expect(heading.textContent).toContain('expected text');
});
```

### Test Signal → DOM Synchronization
```typescript
it('should update DOM when signal changes', () => {
  component['title'].set('New Title');
  fixture.detectChanges();
  const heading = fixture.nativeElement.querySelector('h1');
  expect(heading.textContent).toContain('New Title');
});
```

## Key Testing Concepts

### TestBed
Angular's testing utility for:
- Creating component fixtures
- Managing dependency injection
- Compiling components
- Triggering change detection

### ComponentFixture
Provides:
- `componentInstance` - Access to component
- `nativeElement` - Access to root DOM element
- `detectChanges()` - Trigger change detection
- `debugElement` - Angular DebugElement

### Signal Testing
- Call signal as function to read: `signal()`
- Use .set() to update: `signal.set(value)`
- Call detectChanges() to sync DOM: `fixture.detectChanges()`

### DOM Queries
- `querySelector()` - CSS selector query
- `querySelectorAll()` - Multiple elements
- `textContent` - Element text
- `innerHTML` - Element HTML

## Common Assertions

```typescript
// Existence
expect(element).toBeDefined();
expect(element).toBeTruthy();
expect(element).toBeDefined();

// Equality
expect(value).toBe('expected');
expect(value).toEqual({...});

// Inclusion
expect(text).toContain('substring');
expect(array).toContain(item);

// Types
expect(value).toBeNumber();
expect(value).toBeString();
expect(array).toBeInstanceOf(Array);

// Arrays
expect(array).toHaveLength(3);
expect(array).toContain(item);
```

## Test Organization

```typescript
describe('Feature', () => {
  describe('Subfeature', () => {
    it('should do something', () => {
      // Arrange
      const input = 'test';
      
      // Act
      const result = component.method(input);
      
      // Assert
      expect(result).toBe('expected');
    });
  });
});
```

## Vitest Commands

| Command | Purpose |
|---------|---------|
| `npm test` | Run tests once |
| `npm test -- --watch` | Watch mode |
| `npm test -- --coverage` | Coverage report |
| `npm test -- --reporter=verbose` | Verbose output |
| `npm test [pattern]` | Run matching tests |

## Debugging

### Add console.log
```typescript
it('should debug', () => {
  console.log(component['signal']());
  expect(component).toBeDefined();
});
```

### Skip test
```typescript
it.skip('should be skipped', () => {
  // Test code
});
```

### Focus on test
```typescript
it.only('only this runs', () => {
  // Test code
});
```

## Best Practices

1. ✅ One assertion per test (or related assertions)
2. ✅ Clear test names describing what is tested
3. ✅ Use beforeEach for setup
4. ✅ Call fixture.detectChanges() before DOM assertions
5. ✅ Mock dependencies with TestBed
6. ✅ Test behavior, not implementation
7. ✅ Keep tests focused and isolated
8. ✅ Use meaningful describe blocks
9. ✅ Avoid testing framework details
10. ✅ Test edge cases and error scenarios

## Documentation Files

- **TEST_SUMMARY.md** - Detailed test coverage and features
- **TESTING_GUIDE.md** - How to write and run tests
- **QUICK_REFERENCE.md** - This file

---

**Framework**: Vitest 4.0.8
**Angular**: 21.1.0
**Date**: Generated for Angular project
