import SEO from "../components/SEO";
import SurveyButton from "../components/SurveyButton";
import { surveyConfig } from "../data/survey";
import { useAnalytics } from "../hooks/useAnalytics";

/**
 * Survey page component
 */
export default function Survey() {
  useAnalytics("/survey");

  return (
    <>
      <SEO
        title="Survey - Share Your Vanilla Knowledge"
        description="Help us understand your vanilla preferences and knowledge. Your feedback helps us improve our educational content."
        url="/survey"
      />

      <main className="min-h-screen bg-vanilla-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-vanilla-brown mb-6">
              {surveyConfig.title}
            </h1>
            <p className="text-xl text-vanilla-brown/80 max-w-3xl mx-auto">
              {surveyConfig.description}
            </p>
          </div>

          {/* Survey Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
            <div className="mb-8">
              <div className="w-16 h-16 bg-vanilla-green rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-vanilla-brown mb-4">
                Ready to Share Your Thoughts?
              </h2>
              <p className="text-lg text-vanilla-brown/80 mb-8">
                Click the button below to open our survey in a new tab. It
                should take about 5-10 minutes to complete.
              </p>
            </div>

            <SurveyButton
              url={surveyConfig.url}
              className="btn-primary text-lg px-8 py-4"
            >
              Start Survey
            </SurveyButton>

            {/* Privacy Notice */}
            <div className="mt-8 p-4 bg-vanilla-cream rounded-lg">
              <p className="text-sm text-vanilla-brown/70">
                <strong>Privacy Notice:</strong> {surveyConfig.privacyNotice}
              </p>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-vanilla-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-vanilla-green"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-serif font-semibold text-lg text-vanilla-brown mb-2">
                Quick & Easy
              </h3>
              <p className="text-vanilla-brown/70">
                Takes only 5-10 minutes to complete
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-vanilla-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-vanilla-green"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-serif font-semibold text-lg text-vanilla-brown mb-2">
                Anonymous
              </h3>
              <p className="text-vanilla-brown/70">
                Your responses are completely anonymous
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-vanilla-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-vanilla-green"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-serif font-semibold text-lg text-vanilla-brown mb-2">
                Helpful
              </h3>
              <p className="text-vanilla-brown/70">
                Your feedback helps us improve our content
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
