import { trackSurveyClick } from "../utils/analytics";

interface SurveyButtonProps {
  url: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Survey button component that opens Google Form in new tab
 */
export default function SurveyButton({
  url,
  className = "btn-primary",
  children = "Take Our Survey",
}: SurveyButtonProps) {
  const handleClick = () => {
    trackSurveyClick();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} inline-flex items-center justify-center px-6 py-3 text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-vanilla-green focus:ring-offset-2`}
      aria-label="Open survey in new tab"
    >
      {children}
      <svg
        className="ml-2 w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </button>
  );
}
