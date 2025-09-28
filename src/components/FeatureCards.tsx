import { useState } from "react";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
}

interface FeatureCardsProps {
  features: Feature[];
  className?: string;
}

/**
 * Modern feature cards with hover effects and animations
 */
export default function FeatureCards({
  features,
  className = "",
}: FeatureCardsProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}
    >
      {features.map((feature, index) => (
        <div
          key={feature.id}
          className={`group relative p-8 card-modern hover:scale-105 transition-all duration-500 cursor-pointer ${
            hoveredCard === feature.id ? "shadow-2xl" : ""
          }`}
          onMouseEnter={() => setHoveredCard(feature.id)}
          onMouseLeave={() => setHoveredCard(null)}
          style={{
            animationDelay: `${index * 0.1}s`,
          }}
        >
          {/* Background Gradient */}
          <div
            className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${feature.gradient}`}
          />

          {/* Icon */}
          <div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${feature.color}`}
          >
            <span className="text-3xl">{feature.icon}</span>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-vanilla-brown mb-4 group-hover:text-vanilla-green transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-vanilla-brown/70 leading-relaxed group-hover:text-vanilla-brown/90 transition-colors duration-300">
              {feature.description}
            </p>
          </div>

          {/* Hover Effect Line */}
          <div
            className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ${feature.gradient
              .replace("bg-gradient-to-r", "bg-gradient-to-r")
              .replace("opacity-10", "opacity-100")}`}
          />
        </div>
      ))}
    </div>
  );
}
