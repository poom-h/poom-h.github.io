export interface ContentSection {
  id: string;
  title: string;
  content: string;
  image?: string;
  imageAlt?: string;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  image: string;
  imageAlt?: string;
}

export interface PageContent {
  title: string;
  hero?: HeroSection;
  sections: ContentSection[];
}

export interface SiteContent {
  about: PageContent;
  vanilla: PageContent;
}

export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export interface SurveyConfig {
  url: string;
  title: string;
  description: string;
  privacyNotice: string;
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}
