import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { trackNavigation } from "../utils/analytics";

/**
 * Header component with navigation
 */
export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { path: "/about", label: "About Us" },
    { path: "/vanilla", label: "Vanilla Info" },
    { path: "/survey", label: "Survey" },
  ];

  const handleNavigation = (path: string) => {
    trackNavigation(path);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Skip Navigation Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-vanilla-green text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      <header
        className={`bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-xl" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-3 group"
              onClick={() => handleNavigation("/")}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                style={{
                  background:
                    "linear-gradient(to bottom right, #6B8E23, #5C4033)",
                }}
              >
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl text-vanilla-brown group-hover:text-vanilla-green transition-colors duration-300">
                  Vanilla Daddy
                </span>
                <span className="text-xs text-vanilla-brown/60 -mt-1">
                  Premium Quality
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex space-x-8"
              role="navigation"
              aria-label="Main navigation"
            >
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group ${
                    location.pathname === item.path
                      ? "text-vanilla-green bg-vanilla-green/10 shadow-md"
                      : "text-vanilla-brown hover:text-vanilla-green hover:bg-vanilla-green/5 hover:shadow-md"
                  }`}
                  aria-current={
                    location.pathname === item.path ? "page" : undefined
                  }
                >
                  <span className="relative z-10">{item.label}</span>
                  {location.pathname === item.path && (
                    <div
                      className="absolute inset-0 rounded-lg animate-pulse"
                      style={{
                        background:
                          "linear-gradient(to right, rgba(107, 142, 35, 0.2), rgba(92, 64, 51, 0.2))",
                      }}
                    ></div>
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="text-vanilla-brown hover:text-vanilla-green focus:outline-none focus:ring-2 focus:ring-vanilla-green focus:ring-offset-2 p-2 rounded-lg hover:bg-vanilla-green/5 transition-all duration-300"
                aria-label={
                  isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"
                }
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div id="mobile-menu" className="md:hidden animate-fadeInDown">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => handleNavigation(item.path)}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      location.pathname === item.path
                        ? "text-vanilla-green bg-vanilla-green/10"
                        : "text-vanilla-brown hover:text-vanilla-green hover:bg-vanilla-green/5"
                    }`}
                    aria-current={
                      location.pathname === item.path ? "page" : undefined
                    }
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
