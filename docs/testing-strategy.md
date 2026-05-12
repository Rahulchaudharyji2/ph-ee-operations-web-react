# Testing Strategy

## 1. Unit Testing (Vitest)
- Targets: Pure functions, date formatters, and logic-heavy hooks.
- Goal: >80% coverage for core business logic.

## 2. Integration Testing (React Testing Library)
- Targets: Component interactions (e.g., ensuring a form submission triggers the correct API call).
- Focus on: User behaviors, not implementation details.

## 3. End-to-End Testing (Playwright)
- Critical Path Coverage:
  - User Authentication flow.
  - Batch Import and Validation.
  - Dashboard Data Hydration.
- Browser Support: Chrome, Firefox, and WebKit (Safari).

## 4. Visual Regression
- (Proposed) Using tools like **Chromatic** or standard Playwright snapshots to ensure the "Premium UI" does not degrade over time.
