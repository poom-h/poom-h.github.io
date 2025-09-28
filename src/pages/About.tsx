import SEO from "../components/SEO";
import Hero from "../components/Hero";
import ContentSection from "../components/ContentSection";
import SurveyButton from "../components/SurveyButton";
import StatsWidget from "../components/StatsWidget";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import FeatureCards from "../components/FeatureCards";
import { content } from "../data/content";
import { surveyConfig } from "../data/survey";
import { useAnalytics } from "../hooks/useAnalytics";

/**
 * About Us page component
 */
export default function About() {
  useAnalytics("/about");

  const handleSurveyClick = () => {
    // Survey click is handled by SurveyButton component
  };

  const stats = [
    {
      value: "500+",
      label: "Active Sellers",
      icon: "🌱",
      color: "bg-gradient-to-br from-green-600 to-amber-800",
    },
    {
      value: "2,500+",
      label: "Registered Buyers",
      icon: "😊",
      color: "bg-gradient-to-br from-yellow-400 to-orange-500",
    },
    {
      value: "15+",
      label: "Countries",
      icon: "🌍",
      color: "bg-gradient-to-br from-green-400 to-emerald-600",
    },
    {
      value: "$50M+",
      label: "Transaction Volume",
      icon: "💰",
      color: "bg-gradient-to-br from-purple-400 to-pink-500",
    },
  ];

  const testimonials = [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "Professional Chef",
      content:
        "The marketplace has connected me with premium vanilla suppliers I never would have found otherwise. The quality verification and transparent pricing make sourcing so much easier.",
      avatar: "SJ",
      rating: 5,
    },
    {
      id: "2",
      name: "Michael Chen",
      role: "Vanilla Producer, Madagascar",
      content:
        "This platform has opened up new markets for our vanilla. The educational resources help buyers understand our product quality, and the secure payment system gives us confidence in every transaction.",
      avatar: "MC",
      rating: 5,
    },
    {
      id: "3",
      name: "Emma Rodriguez",
      role: "Bakery Owner",
      content:
        "I've found reliable suppliers and learned so much about vanilla through their marketplace. The quality assurance and traceability features give me confidence in every purchase.",
      avatar: "ER",
      rating: 5,
    },
  ];

  const features = [
    {
      id: "1",
      title: "Quality Assurance",
      description:
        "Our platform verifies all vanilla products through rigorous quality checks, ensuring buyers receive authentic, premium-grade vanilla from verified suppliers.",
      icon: "⭐",
      color: "bg-gradient-to-br from-yellow-400 to-orange-500",
      gradient: "bg-gradient-to-r from-yellow-400/20 to-orange-500/20",
    },
    {
      id: "2",
      title: "Secure Trading",
      description:
        "Advanced escrow system and secure payment processing protect both buyers and sellers, with dispute resolution and quality guarantees for every transaction.",
      icon: "🔒",
      color: "bg-gradient-to-br from-blue-400 to-indigo-600",
      gradient: "bg-gradient-to-r from-blue-400/20 to-indigo-600/20",
    },
    {
      id: "3",
      title: "Market Intelligence",
      description:
        "Real-time pricing data, market trends, and educational resources help users make informed decisions in the complex vanilla trading ecosystem.",
      icon: "📊",
      color: "bg-gradient-to-br from-green-400 to-emerald-600",
      gradient: "bg-gradient-to-r from-green-400/20 to-emerald-600/20",
    },
  ];

  return (
    <>
      <SEO
        title="About Us - Vanilla Marketplace Platform"
        description="Learn about our vanilla marketplace platform connecting producers, buyers, and enthusiasts in the $3.9 billion global vanilla market."
        image="/images/vanilla-hero.jpg"
        url="/about"
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        {content.about.hero && (
          <Hero
            hero={content.about.hero}
            showButton={true}
            buttonText="Take Our Survey"
            buttonLink={surveyConfig.url}
            onButtonClick={handleSurveyClick}
          />
        )}

        {/* Statistics Section */}
        <section
          className="py-20"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(250, 243, 224, 0.5), white)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-6">
                Marketplace Impact
              </h2>
              <p className="text-xl text-vanilla-brown/80 max-w-3xl mx-auto">
                Discover the scale of our marketplace and the trust we've built
                in the global vanilla trading community.
              </p>
            </div>
            <StatsWidget stats={stats} />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-6">
                Why Choose Our Marketplace?
              </h2>
              <p className="text-xl text-vanilla-brown/80 max-w-3xl mx-auto">
                We combine traditional vanilla knowledge with modern technology
                to create the most trusted vanilla trading platform.
              </p>
            </div>
            <FeatureCards features={features} />
          </div>
        </section>

        {/* Content Sections */}
        <div
          style={{
            background:
              "linear-gradient(to bottom right, rgba(250, 243, 224, 0.3), white)",
          }}
        >
          {content.about.sections.map((section, index) => (
            <ContentSection key={section.id} section={section} index={index} />
          ))}
        </div>

        {/* Testimonials Section */}
        <section
          className="py-20"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(92, 64, 51, 0.05), rgba(107, 142, 35, 0.05))",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-6">
                What Our Users Say
              </h2>
              <p className="text-xl text-vanilla-brown/80 max-w-3xl mx-auto">
                Hear from producers, buyers, and vanilla enthusiasts who trust
                our marketplace platform.
              </p>
            </div>
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </section>

        {/* Call to Action */}
        <section
          className="py-20 text-white relative overflow-hidden"
          style={{
            background: "linear-gradient(to bottom right, #6B8E23, #5C4033)",
          }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[length:40px_40px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Learn More?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              Take our survey to help us understand your vanilla knowledge and
              preferences. Your feedback helps us create better educational
              content.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <SurveyButton url={surveyConfig.url} />
              <button className="btn-secondary bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50">
                Explore Our Resources
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
