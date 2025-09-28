import { useState, useEffect } from "react";

/**
 * Loading spinner component with smooth animations
 */
export default function LoadingSpinner() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-vanilla-green/20 rounded-full animate-spin">
            <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-vanilla-green rounded-full animate-spin"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-vanilla-brown font-medium">
          <span className="animate-pulse">Loading...</span>
        </div>

        {/* Vanilla Pod Animation */}
        <div className="flex space-x-1">
          <div
            className="w-2 h-2 bg-vanilla-green rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-2 h-2 bg-vanilla-green rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="w-2 h-2 bg-vanilla-green rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
