import { useState, useEffect, useCallback } from "react";

interface StatItem {
  value: string;
  label: string;
  icon: string;
  color: string;
}

interface StatsWidgetProps {
  stats: StatItem[];
  className?: string;
}

/**
 * Modern statistics widget with animated counters
 */
export default function StatsWidget({
  stats,
  className = "",
}: StatsWidgetProps) {
  const [animatedStats, setAnimatedStats] = useState<StatItem[]>(
    stats.map((stat) => ({ ...stat, value: "0" }))
  );

  const animateCounters = useCallback(() => {
    stats.forEach((stat, index) => {
      const numericValue = parseInt(stat.value.replace(/[^\d]/g, ""));
      if (isNaN(numericValue)) return;

      const duration = 2000;
      const increment = numericValue / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          current = numericValue;
          clearInterval(timer);
        }

        setAnimatedStats((prev) =>
          prev.map((item, idx) =>
            idx === index
              ? {
                  ...item,
                  value: stat.value.replace(
                    /\d+/,
                    Math.floor(current).toString()
                  ),
                }
              : item
          )
        );
      }, 16);
    });
  }, [stats]);

  useEffect(() => {
    // Start animation immediately when component mounts
    const timer = setTimeout(() => {
      animateCounters();
    }, 500);

    return () => clearTimeout(timer);
  }, [animateCounters]);

  return (
    <div
      id="stats-widget"
      className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${className}`}
    >
      {animatedStats.map((stat, index) => (
        <div
          key={index}
          className="text-center p-6 card-modern hover:scale-105 transition-all duration-300 group"
        >
          <div
            className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform duration-300`}
          >
            <span className="text-2xl">{stat.icon}</span>
          </div>
          <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
            {stat.value}
          </div>
          <div className="text-sm text-vanilla-brown/70 font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
