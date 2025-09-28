import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    render(
      <HelmetProvider>
        <App />
      </HelmetProvider>
    );
    expect(screen.getByText("Vanilla Daddy")).toBeInTheDocument();
  });
});
