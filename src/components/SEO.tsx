import { Helmet } from "react-helmet-async";
import type { SEOProps } from "../types";

/**
 * SEO component for managing meta tags and page titles
 * @param title - Page title
 * @param description - Meta description
 * @param image - Open Graph image URL
 * @param url - Canonical URL
 */
export default function SEO({ title, description, image, url }: SEOProps) {
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://vanilla-site.com";
  const defaultImage = `${siteUrl}/images/vanilla-og-image.jpg`;
  const fullImageUrl = image
    ? image.startsWith("http")
      ? image
      : `${siteUrl}${image}`
    : defaultImage;
  const fullUrl = url
    ? url.startsWith("http")
      ? url
      : `${siteUrl}${url}`
    : siteUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ผู้ปลูกวนิลลาแห่งประเทศไทย" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="ผู้ปลูกวนิลลาแห่งประเทศไทย" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
}
