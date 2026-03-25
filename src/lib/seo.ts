import type { FAQ } from "../content/site.config";
import { siteConfig } from "../content/site.config";

const SITE_URL = `https://${siteConfig.domain}`;
const DATE_PUBLISHED = "2026-03-02";
const DATE_MODIFIED = "2026-03-16";

/** Build canonical URL for a given path (trailing-slash enforced) */
export function canonicalUrl(path: string): string {
  let cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (!cleanPath.endsWith("/")) cleanPath += "/";
  return `${SITE_URL}${cleanPath}`;
}

/** Build full page title */
export function pageTitle(subtitle?: string): string {
  if (!subtitle) return `${siteConfig.brandLine} | ${siteConfig.siteName}`;
  return `${subtitle} — ${siteConfig.brandLine} | ${siteConfig.siteName}`;
}

// ── Shared schema fragments ───────────────────────────────────

function speakable(cssSelectorList: string[]) {
  return {
    "@type": "SpeakableSpecification",
    cssSelector: cssSelectorList,
  };
}

function orgRef() {
  return {
    "@type": "Organization",
    name: siteConfig.company,
    url: SITE_URL,
  };
}

// ── JSON-LD: Organization ─────────────────────────────────────

export function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.company,
    legalName: "ネオインスパイア株式会社",
    url: SITE_URL,
    description: siteConfig.primaryIntent,
    inLanguage: "en-MY",
    areaServed: [
      { "@type": "Country", name: "Malaysia" },
      { "@type": "Country", name: "Japan" },
    ],
    knowsAbout: [
      "Japan market entry",
      "Japan B2B distribution",
      "Malaysia–Japan trade corridor",
      "Japan regulatory compliance",
      "Japan distributor search",
      "Japan trade show preparation",
      "Japan export consulting",
    ],
    ...(siteConfig.localPresence && {
      address: {
        "@type": "PostalAddress",
        addressLocality: "Osaka",
        addressRegion: "Osaka",
        addressCountry: "JP",
      },
    }),
  };
}

// ── JSON-LD: WebSite ──────────────────────────────────────────

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.siteName,
    url: SITE_URL,
    description: siteConfig.primaryIntent,
    inLanguage: "en-MY",
    publisher: orgRef(),
    about: {
      "@type": "Thing",
      name: "Japan Market Entry Consultation",
      description: siteConfig.primaryIntent,
    },
    speakable: speakable(["h1", "[data-speakable='lead']"]),
  };
}

// ── JSON-LD: WebPage ──────────────────────────────────────────

export function webPageJsonLd(path: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: canonicalUrl(path),
    inLanguage: "en-MY",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    author: orgRef(),
    publisher: orgRef(),
    isPartOf: {
      "@type": "WebSite",
      url: SITE_URL,
    },
    speakable: speakable(["h1", "[data-speakable='lead']"]),
  };
}

// ── JSON-LD: Service ──────────────────────────────────────────

export function serviceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: siteConfig.brandLine,
    serviceType: "Japan Market Entry Consultation",
    description: siteConfig.primaryIntent,
    provider: orgRef(),
    areaServed: [
      { "@type": "Country", name: "Malaysia" },
      { "@type": "Country", name: "Japan" },
    ],
    url: SITE_URL,
  };
}

// ── JSON-LD: FAQPage (all items, not truncated) ───────────────

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    speakable: speakable(["h1", "dt", "dd"]),
  };
}

/** FAQPage JSON-LD for a single Q&A answer asset (detail route). */
export function faqSingleItemJsonLd(item: FAQ) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      },
    ],
    speakable: speakable(["h1", "[data-speakable='lead']"]),
  };
}

// ── JSON-LD: HowTo (consultation process steps) ──────────────

export function howToJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How the Japan market entry consultation works",
    description:
      "A structured consultation for Malaysia-based companies evaluating Japan market entry — from preparation to decision memo.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Prepare your brief",
        text: "Gather your product specification, export pricing, target customer type, and existing certifications before the session.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Request a consultation",
        text: "Submit a consultation request through the Japan Market Hub. Qualification is reviewed before scheduling.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Attend the consultation session",
        text: "A 45-to-60-minute structured session covering product fit, channel options, cost and timeline indicators, regulatory flags, and distributor pathway assessment.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Receive your decision memo",
        text: "After the session, you receive a written memo covering fit assessment, entry pathway options, key risks, and a specific next-step recommendation.",
      },
    ],
  };
}

// ── JSON-LD: DefinedTermSet (key terminology) ─────────────────

export function definedTermSetJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Japan Market Entry Terminology",
    description:
      "Key terms used in the Japan market entry consultation context.",
    hasDefinedTerm: [
      {
        "@type": "DefinedTerm",
        name: "Market Fit Evaluation",
        description:
          "Assessment of whether a product's category, pricing, and format are viable in Japan's B2B or retail distribution channels.",
      },
      {
        "@type": "DefinedTerm",
        name: "Distributor Pathway Assessment",
        description:
          "Review of a company's readiness to engage a Japan-side distributor, including pricing margins, MOQ, and documentation requirements.",
      },
      {
        "@type": "DefinedTerm",
        name: "Decision Memo",
        description:
          "A structured written output from the consultation summarising fit assessment, entry pathway options, risk flags, and a recommended next step.",
      },
      {
        "@type": "DefinedTerm",
        name: "Entry Cost Framing",
        description:
          "An indicative cost range provided during the consultation based on the entry model selected — distributor-based, direct import, or trade show.",
      },
      {
        "@type": "DefinedTerm",
        name: "Importer of Record",
        description:
          "A licensed Japanese entity required by customs to act as the official importer for products entering Japan.",
      },
    ],
  };
}
