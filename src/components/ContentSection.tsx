import type { ContentSection as ContentSectionType } from "../types";
import OptimizedImage from "./OptimizedImage";

interface ContentSectionProps {
  section: ContentSectionType;
  index: number;
}

/**
 * Content section component for displaying text and images
 */
export default function ContentSection({
  section,
  index,
}: ContentSectionProps) {
  const isEven = index % 2 === 0;

  return (
    <section className="py-16 md:py-24 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(107,142,35,0.1)_1px,transparent_0)] bg-[length:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            !isEven ? "lg:grid-flow-col-dense" : ""
          }`}
        >
          {/* Content */}
          <div
            className={`space-y-8 ${!isEven ? "lg:col-start-2" : ""} ${
              !isEven ? "animate-fadeInRight" : "animate-fadeInLeft"
            }`}
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text leading-tight">
                {section.title}
              </h2>
              <div
                className="w-20 h-1 rounded-full"
                style={{
                  background: "linear-gradient(to right, #6B8E23, #5C4033)",
                }}
              />
            </div>

            <div className="prose prose-lg max-w-none text-vanilla-brown/80 leading-relaxed space-y-6">
              {section.content.split("\n").map((paragraph, idx) => (
                <p key={idx} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Call to Action */}
            <div className="pt-4">
              <button className="btn-primary group">
                <span className="mr-2">Learn More</span>
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
              </button>
            </div>
          </div>

          {/* Image */}
          {section.image && (
            <div
              className={`${!isEven ? "lg:col-start-1" : ""} ${
                !isEven ? "animate-fadeInLeft" : "animate-fadeInRight"
              }`}
            >
              <div className="relative group">
                <div
                  className="absolute -inset-4 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(107, 142, 35, 0.2), rgba(92, 64, 51, 0.2))",
                  }}
                />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  <OptimizedImage
                    src={section.image}
                    alt={section.imageAlt || section.title}
                    className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(92, 64, 51, 0.3), transparent, transparent)",
                    }}
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-vanilla-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-500">
                      <svg
                        className="w-8 h-8 text-vanilla-brown"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
