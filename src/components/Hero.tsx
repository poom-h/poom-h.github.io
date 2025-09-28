import type { HeroSection } from "../types";

interface HeroProps {
  hero: HeroSection;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
  onButtonClick?: () => void;
}

/**
 * Hero component for page headers with background image
 */
export default function Hero({
  hero,
  showButton = false,
  buttonText = "Learn More",
  buttonLink = "#",
  onButtonClick,
}: HeroProps) {
  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 group-hover:scale-100 transition-transform duration-1000"
        style={{ backgroundImage: `url(${hero.image})` }}
        aria-hidden="true"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom right, rgba(92, 64, 51, 0.6), rgba(92, 64, 51, 0.4), rgba(107, 142, 35, 0.6))",
        }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" />
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-vanilla-green/20 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-12 h-12 bg-vanilla-cream/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <div className="animate-fadeInUp">
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
                {hero.title}
              </h1>
            </div>

            <div
              className="animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed drop-shadow-md">
                {hero.subtitle}
              </p>
            </div>

            {showButton && (
              <div
                className="animate-fadeInUp flex flex-col sm:flex-row gap-6"
                style={{ animationDelay: "0.4s" }}
              >
                <a
                  href={buttonLink}
                  onClick={onButtonClick}
                  className="btn-primary inline-flex items-center justify-center px-10 py-4 text-lg font-medium group"
                >
                  <span className="mr-2">{buttonText}</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>

                <button className="btn-secondary inline-flex items-center justify-center px-10 py-4 text-lg font-medium group">
                  <span className="mr-2">Learn More</span>
                  <svg
                    className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            )}

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
