## Test File Structure: src/app/app.spec.ts

```
App Component (Root describe block)
├── Before Each Hook
│   ├── TestBed Configuration
│   ├── Component Fixture Creation
│   └── Instance References Setup
│
├── Component Initialization (describe block - 3 tests)
│   ├── ✓ should create the App component
│   ├── ✓ should initialize with title signal
│   └── ✓ should have RouterOutlet imported
│
├── Template Rendering (describe block - 3 tests)
│   ├── ✓ should render h1 element with correct text
│   ├── ✓ should display title signal value
│   └── ✓ should contain router-outlet element
│
├── Signal Reactivity (describe block - 2 tests)
│   ├── ✓ should be protected readonly property
│   └── ✓ should render updated content on signal change
│
├── Selector and Component Metadata (describe block - 2 tests)
│   ├── ✓ should have correct selector
│   └── ✓ should be a standalone component
│
├── Component Structure (describe block - 2 tests)
│   ├── ✓ should have proper template structure
│   └── ✓ should not have inline styles
│
└── Accessibility (describe block - 2 tests)
    ├── ✓ should have semantic HTML with h1 heading
    └── ✓ should have proper text content

Total: 13 test cases organized in 6 describe blocks
```

## Key Testing Utilities

### Angular Testing APIs Used
- **TestBed**: Component testing setup and configuration
- **ComponentFixture**: Container for component instance and testing utilities
- **DebugElement**: Wrapper around native DOM element
- **By**: CSS selector and directive query methods

### Test Assertions
- Component existence and type checking
- Signal value verification
- DOM element queries and text content assertions
- Element attribute and structure verification
- Accessibility semantic checks

## Example Test Pattern

```typescript
describe('Template Rendering', () => {
  beforeEach(() => {
    fixture.detectChanges();  // Trigger initial change detection
  });

  it('should render h1 element with correct text', () => {
    const h1Element = debugElement.query(By.css('h1'));
    expect(h1Element).toBeTruthy();
    expect(h1Element.nativeElement.textContent)
      .toContain('Hello, daggerverse-test-angular-project');
  });
});
```

This pattern is used throughout all test groups for consistency.
