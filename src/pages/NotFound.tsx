import { Link } from "react-router-dom";
import SEO from "../components/SEO";

/**
 * 404 Not Found page component
 */
export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found - Vanilla Experts"
        description="The page you're looking for doesn't exist. Return to our homepage to explore vanilla information."
        url="/404"
      />

      <main className="min-h-screen bg-vanilla-cream flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-vanilla-brown mb-4">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-vanilla-brown mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-vanilla-brown/80 mb-8">
              Sorry, we couldn't find the page you're looking for. It might have
              been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          <div className="space-y-4">
            <Link
              to="/"
              className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base font-medium"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Go Home
            </Link>

            <div className="text-sm text-vanilla-brown/60">
              <p>Or try one of these pages:</p>
              <div className="flex flex-wrap justify-center gap-4 mt-2">
                <Link
                  to="/about"
                  className="hover:text-vanilla-green transition-colors duration-200"
                >
                  About Us
                </Link>
                <Link
                  to="/vanilla"
                  className="hover:text-vanilla-green transition-colors duration-200"
                >
                  Vanilla Info
                </Link>
                <Link
                  to="/survey"
                  className="hover:text-vanilla-green transition-colors duration-200"
                >
                  Survey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
