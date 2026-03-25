import { Helmet } from "react-helmet-async";
import { siteConfig } from "../content/site.config";
import {
  canonicalUrl,
  orgJsonLd,
  webSiteJsonLd,
  webPageJsonLd,
  faqPageJsonLd,
  definedTermSetJsonLd,
} from "../lib/seo";

type Props = {
  path: string;
  title: string;
  description: string;
  isFaq?: boolean;
  /** Force noindex,nofollow (e.g. soft 404) */
  noIndex?: boolean;
  extraJsonLd?: Record<string, unknown>[];
};

export default function SEOHead({
  path,
  title,
  description,
  isFaq = false,
  noIndex = false,
  extraJsonLd = [],
}: Props) {
  const canonical = canonicalUrl(path);
  const robotsContent =
    siteConfig.noindex || noIndex ? "noindex,nofollow" : "index,follow";
  const ogImage = `https://${siteConfig.domain}/og.png`;

  const jsonLdScripts = [
    orgJsonLd(),
    webSiteJsonLd(),
    webPageJsonLd(path, title, description),
    definedTermSetJsonLd(),
    ...(isFaq ? [faqPageJsonLd()] : []),
    ...extraJsonLd,
  ];

  return (
    <Helmet>
      <html lang="en-MY" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={robotsContent} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${siteConfig.brandLine} — ${siteConfig.siteName}`} />
      <meta property="og:site_name" content={siteConfig.siteName} />
      <meta property="og:locale" content="en_MY" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${siteConfig.brandLine} — ${siteConfig.siteName}`} />

      {/* JSON-LD structured data */}
      {jsonLdScripts.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
