import SEO from "../components/SEO";
import ContentSection from "../components/ContentSection";
import SurveyButton from "../components/SurveyButton";
import { content } from "../data/content";
import { surveyConfig } from "../data/survey";
import { useAnalytics } from "../hooks/useAnalytics";

/**
 * Vanilla Information page component
 */
export default function VanillaInfo() {
  useAnalytics("/vanilla");

  return (
    <>
      <SEO
        title="Vanilla Details - Comprehensive Vanilla Information"
        description="Discover everything about vanilla: cultivation, forms, grades, uses, and quality indicators. Essential knowledge for vanilla marketplace participants."
        image="/images/vanilla-pods.jpg"
        url="/vanilla"
      />

      <main className="min-h-screen">
        {/* Page Header */}
        <section
          className="py-20 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(to bottom right, #FAF3E0, rgba(250, 243, 224, 0.8), white)",
          }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(107,142,35,0.1)_1px,transparent_0)] bg-[length:40px_40px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="animate-fadeInUp">
              <h1 className="text-5xl md:text-6xl font-serif font-bold gradient-text mb-8">
                Vanilla Details
              </h1>
              <p className="text-xl md:text-2xl text-vanilla-brown/80 max-w-4xl mx-auto leading-relaxed">
                Comprehensive information about vanilla for marketplace
                participants, from cultivation details to market insights and
                quality indicators.
              </p>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div
          style={{
            background:
              "linear-gradient(to bottom right, white, rgba(250, 243, 224, 0.3))",
          }}
        >
          {content.vanilla.sections.map((section, index) => (
            <ContentSection key={section.id} section={section} index={index} />
          ))}
        </div>

        {/* Market Statistics & Business Information */}
        <section className="py-20 bg-gradient-to-br from-vanilla-cream to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-vanilla-brown mb-6">
                Vanilla Market Overview
              </h2>
              <p className="text-xl text-vanilla-brown/80 max-w-3xl mx-auto">
                Key statistics and insights about the global vanilla industry
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Market Value */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-vanilla-gray/20">
                <div className="text-4xl font-bold text-vanilla-green mb-2">
                  $3.9B
                </div>
                <div className="text-lg font-semibold text-vanilla-brown mb-2">
                  Current Market Value
                </div>
                <div className="text-sm text-vanilla-brown/70">
                  2025 global vanilla market size
                </div>
              </div>

              {/* Projected Growth */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-vanilla-gray/20">
                <div className="text-4xl font-bold text-vanilla-green mb-2">
                  5.59%
                </div>
                <div className="text-lg font-semibold text-vanilla-brown mb-2">
                  Annual Growth Rate
                </div>
                <div className="text-sm text-vanilla-brown/70">
                  CAGR projected through 2030
                </div>
              </div>

              {/* Market Share */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-vanilla-gray/20">
                <div className="text-4xl font-bold text-vanilla-green mb-2">
                  80-85%
                </div>
                <div className="text-lg font-semibold text-vanilla-brown mb-2">
                  Madagascar Dominance
                </div>
                <div className="text-sm text-vanilla-brown/70">
                  Global vanilla production share
                </div>
              </div>

              {/* Price Range */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-vanilla-gray/20">
                <div className="text-4xl font-bold text-vanilla-green mb-2">
                  $250-650
                </div>
                <div className="text-lg font-semibold text-vanilla-brown mb-2">
                  Price per Kilogram
                </div>
                <div className="text-sm text-vanilla-brown/70">
                  Current market price range
                </div>
              </div>

              {/* Food & Beverage */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-vanilla-gray/20">
                <div className="text-4xl font-bold text-vanilla-green mb-2">
                  93.68%
                </div>
                <div className="text-lg font-semibold text-vanilla-brown mb-2">
                  Food & Beverage
                </div>
                <div className="text-sm text-vanilla-brown/70">
                  Primary market segment
                </div>
              </div>

              {/* Cosmetics */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-vanilla-gray/20">
                <div className="text-4xl font-bold text-vanilla-green mb-2">
                  3.62%
                </div>
                <div className="text-lg font-semibold text-vanilla-brown mb-2">
                  Cosmetics Market
                </div>
                <div className="text-sm text-vanilla-brown/70">
                  Growing application sector
                </div>
              </div>
            </div>

            {/* Business Insights */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-vanilla-gray/20">
              <h3 className="text-2xl font-serif font-bold text-vanilla-brown mb-6">
                Industry Insights
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-vanilla-brown mb-3">
                    Key Opportunities
                  </h4>
                  <ul className="space-y-2 text-vanilla-brown/80">
                    <li>• Organic and sustainable sourcing certification</li>
                    <li>
                      • Expansion into functional foods and nutraceuticals
                    </li>
                    <li>• Premium product positioning and traceability</li>
                    <li>• Growing demand in emerging markets</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-vanilla-brown mb-3">
                    Market Challenges
                  </h4>
                  <ul className="space-y-2 text-vanilla-brown/80">
                    <li>• Price volatility due to climate factors</li>
                    <li>• Labor-intensive cultivation requirements</li>
                    <li>• Supply chain disruptions and speculation</li>
                    <li>• Limited suitable growing regions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section
          className="py-20 text-white relative overflow-hidden"
          style={{
            background: "linear-gradient(to bottom right, #5C4033, #6B8E23)",
          }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[length:40px_40px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Share Your Vanilla Knowledge
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              Help us understand your vanilla preferences and knowledge level.
              Your input helps us create better educational resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <SurveyButton url={surveyConfig.url} />
              <button className="btn-secondary bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50">
                Learn More About Vanilla
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
