import { vi } from 'vitest';

// Sonner's real package imports CSS and injects it into the DOM.
// In jsdom/unit tests we want deterministic behavior (no CSS side effects).
export const toast = Object.assign(vi.fn(), {
  error: vi.fn(),
  success: vi.fn(),
  message: vi.fn(),
  warning: vi.fn(),
});
