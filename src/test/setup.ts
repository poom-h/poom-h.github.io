import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mock environment variables
Object.defineProperty(import.meta, "env", {
  value: {
    VITE_GA_MEASUREMENT_ID: "test-ga-id",
    VITE_SURVEY_URL: "https://forms.gle/test-form",
    VITE_SITE_URL: "https://test-site.com",
  },
  writable: true,
});

// Mock window.gtag
Object.defineProperty(window, "gtag", {
  value: vi.fn(),
  writable: true,
});

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});
