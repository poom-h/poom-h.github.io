import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { HelmetProvider } from "react-helmet-async";
import Header from "../Header";

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <HelmetProvider>
      <BrowserRouter>{component}</BrowserRouter>
    </HelmetProvider>
  );
};

describe("Header", () => {
  it("renders the logo and site name", () => {
    renderWithRouter(<Header />);

    expect(screen.getByText("Vanilla Daddy")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /vanilla daddy/i })
    ).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    renderWithRouter(<Header />);

    expect(
      screen.getByRole("navigation", { name: /main navigation/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /about us/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /vanilla info/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /survey/i })).toBeInTheDocument();
  });

  it("renders mobile menu button", () => {
    renderWithRouter(<Header />);

    expect(
      screen.getByRole("button", { name: /open mobile menu/i })
    ).toBeInTheDocument();
  });

  it("has skip navigation link", () => {
    renderWithRouter(<Header />);

    expect(
      screen.getByRole("link", { name: /skip to main content/i })
    ).toBeInTheDocument();
  });
});
