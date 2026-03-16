import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import CTA from "../components/CTA";
import { siteConfig } from "../content/site.config";
import { pageTitle, serviceJsonLd, howToJsonLd, faqPageJsonLd } from "../lib/seo";

const CONSULTATION_COVERS = [
  "Market fit evaluation against Japan's B2B channel structure.",
  "Channel structure clarity — distributor, direct import, or trade show path.",
  "Distributor pathway assessment based on product category and pricing.",
  "Regulatory and labeling risk review for Japan market compliance.",
  "Timeline estimation across a realistic first-phase entry sequence.",
  "Entry cost framing by entry model — distributor, direct, or trade show.",
];

const FOR_LIST = [
  "Malaysian SMEs with export-ready products seeking Japan channel clarity.",
  "ASEAN manufacturers exploring Japan as a target B2B market.",
  "Companies evaluating distributor-based entry before committing to search.",
];

const NOT_FOR_LIST = [
  "Companies without export capability or compliant documentation.",
  "Purely retail-only ambitions without a B2B distribution pathway.",
  "Early-stage idea validation without product readiness.",
];

const RISK_ITEMS = [
  {
    title: "Product Compliance Review",
    body: "Assessment of labeling requirements, allergen declarations, and category-specific certification gaps that would prevent Japan market entry.",
  },
  {
    title: "Channel Mismatch Risks",
    body: "Review of whether your target channel — supermarket, specialty retail, or B2B distributor — aligns with product format, pricing, and MOQ.",
  },
  {
    title: "Budget Underestimation Patterns",
    body: "Common cost gaps including translation, labeling redesign, Japan importer fees, and trade show participation that are frequently excluded from initial budgets.",
  },
  {
    title: "Timeline Realism",
    body: "Japan B2B relationships operate on measured timelines. We provide an honest assessment of what is achievable within 6, 12, and 24-month horizons.",
  },
];

const DECISION_OUTPUTS = [
  "Fit / no-fit summary — a direct assessment of Japan market readiness.",
  "Entry pathway outline — distributor-based, direct import, or trade show approach.",
  "Budget range framing — indicative cost structure by entry model.",
  "Distributor search recommendation — whether to proceed and on what timeline.",
  "Regulatory checklist — product-specific compliance gaps to address.",
  "Next-step decision memo — a written summary of findings and recommended actions.",
];

const SYSTEM_PATHWAYS = [
  {
    label: "Export Pathway",
    detail: "Structured guidance for companies ready to export from Malaysia to Japan, covering documentation, compliance, and importer coordination.",
    anchor: "export from Malaysia to Japan",
  },
  {
    label: "Distributor Search",
    detail: "A structured search process to identify and qualify the right distribution partner for your product in Japan.",
    anchor: "find a reliable distributor in Japan",
  },
  {
    label: "Trade Show Preparation",
    detail: "Selecting, preparing for, and following up on Japan B2B trade shows as part of a market entry strategy.",
    anchor: null,
  },
  {
    label: "Local Presence Coordination",
    detail: "Japan-based coordination for meetings, distributor visits, and relationship management — without requiring relocation.",
    anchor: "local presence in Japan",
  },
];

export default function Home() {
  const title = pageTitle();
  const description = `${siteConfig.brandLine} — ${siteConfig.primaryIntent}`;

  return (
    <>
      <SEOHead
        path="/"
        title={title}
        description={description}
        extraJsonLd={[serviceJsonLd(), howToJsonLd(), faqPageJsonLd()]}
      />

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-20">

        {/* A — Hero */}
        <section className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            {siteConfig.domain}
          </p>

          <h1 className="text-3xl font-semibold text-neutral-900 leading-tight mb-4">
            Japan Market Entry Consultation
          </h1>

          <p data-speakable="lead" className="text-sm text-neutral-600 leading-relaxed mb-8">
            {"NeoiDigital offers structured japan market entry consultation for Malaysia-based companies evaluating expansion into Japan. This is a qualification and decision-clarity engagement — not a sales call."}
          </p>

          <div className="flex flex-wrap gap-3">
            <CTA />
            <a
              href={siteConfig.hubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-neutral-300 text-neutral-700 text-sm font-medium px-6 py-3 hover:border-neutral-600 hover:text-neutral-900"
            >
              Japan market entry guide for Malaysian businesses →
            </a>
          </div>
          <div className="flex flex-wrap gap-6 mt-6 text-sm">
            <Link
              to="/about"
              className="text-neutral-500 underline hover:text-neutral-900"
            >
              About this consultation
            </Link>
            <Link
              to="/faq"
              className="text-neutral-500 underline hover:text-neutral-900"
            >
              Consultation FAQ
            </Link>
          </div>
        </section>

        {/* B — What a Japan Market Entry Consultation Covers */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-4">
            What a Japan Market Entry Consultation Covers
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed mb-8 max-w-3xl">
            {"Each session is structured to help companies understand japan market entry cost and timeline before committing resources to distributor search or trade show preparation."}
          </p>
          <ul className="space-y-3 text-neutral-700 text-sm leading-relaxed">
            {CONSULTATION_COVERS.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* C — Who It Is For / Not For */}
        <section className="border-t border-neutral-200 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-semibold text-neutral-900 mb-6">
                Who This Consultation Is For
              </h2>
              <ul className="space-y-3 text-sm text-neutral-700 leading-relaxed">
                {FOR_LIST.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-neutral-900 mb-6">
                Who It Is Not For
              </h2>
              <ul className="space-y-3 text-sm text-neutral-600 leading-relaxed">
                {NOT_FOR_LIST.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* D — Initial Risk Assessment */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-4">
            Initial Risk Assessment
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed mb-8 max-w-3xl">
            {"The consultation functions as a japan market entry risk assessment call — identifying structural risks before they become operational problems. Four risk areas are reviewed:"}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RISK_ITEMS.map((item) => (
              <div key={item.title} className="border-l-2 border-neutral-200 pl-4">
                <p className="text-sm font-semibold text-neutral-900 mb-1">
                  {item.title}
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* E — What You Leave With */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-4">
            What You Leave With
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed mb-8 max-w-3xl">
            Each consultation produces a structured decision memo. The six outputs are:
          </p>
          <ul className="space-y-3 text-sm text-neutral-700 leading-relaxed">
            {DECISION_OUTPUTS.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* F — Common Questions Answered */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
            Common Questions
          </h2>
          <dl className="divide-y divide-neutral-200">
            <div className="py-6">
              <dt className="text-sm font-semibold text-neutral-900 mb-2">
                Should my Malaysia business enter the Japan market?
              </dt>
              <dd className="text-sm text-neutral-600 leading-relaxed">
                The answer depends on product fit, export readiness, and channel availability. The consultation provides a structured assessment based on your specific product and company stage — not a generalised recommendation.
              </dd>
            </div>
            <div className="py-6">
              <dt className="text-sm font-semibold text-neutral-900 mb-2">
                How do Malaysian companies access a structured consultation?
              </dt>
              <dd className="text-sm text-neutral-600 leading-relaxed">
                {"A free japan market entry consultation for malaysian companies is available through the Japan Market Hub. Qualification is required — the session is designed for companies with export-ready products and a defined target channel."}
              </dd>
            </div>
            <div className="py-6">
              <dt className="text-sm font-semibold text-neutral-900 mb-2">
                Where is NeoiDigital based?
              </dt>
              <dd className="text-sm text-neutral-600 leading-relaxed">
                {"NeoiDigital operates from Osaka, Japan. Companies that want to talk to japan market entry consultant in japan — rather than a remote generalist — can request a consultation through the hub. Our team works within the Japan market with direct access to distributor and trade channel networks."}
              </dd>
            </div>
          </dl>
        </section>

        {/* G — Structural Context */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-4">
            Part of the Japan Market Entry System
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed mb-8 max-w-3xl">
            This consultation page is one component within a broader Japan market entry system. Companies that complete the consultation are positioned to move into the following pathways:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SYSTEM_PATHWAYS.map((item) => (
              <div key={item.label} className="border-l-2 border-neutral-200 pl-4">
                <p className="text-sm font-semibold text-neutral-900 mb-1">
                  {item.label}
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.detail}
                </p>
                {item.anchor && (
                  <p className="mt-2 text-xs text-neutral-400">
                    Related: {item.anchor}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-neutral-100">
            <p className="text-sm text-neutral-500">
              All pathways are accessible through the{" "}
              <a
                href={siteConfig.hubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-neutral-700 hover:text-neutral-900"
              >
                Japan Market Hub
              </a>
              .
            </p>
          </div>
        </section>

        {/* H — Coverage Map */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-2">
            Coverage Map
          </h2>
          <p className="text-xs text-neutral-400 mb-8">
            Common consultation topics addressed on this page.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xs font-semibold tracking-wide text-neutral-500 uppercase mb-3">
                Main Topics
              </h3>
              <ul className="space-y-2">
                {siteConfig.mainKeywords.map((kw) => (
                  <li key={kw} className="text-sm text-neutral-800 font-medium">
                    {kw}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold tracking-wide text-neutral-500 uppercase mb-3">
                Related Topics
              </h3>
              <ul className="space-y-1">
                {siteConfig.supportingKeywords.map((kw) => (
                  <li key={kw} className="text-sm text-neutral-600">
                    {kw}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold tracking-wide text-neutral-500 uppercase mb-3">
                Specific Questions
              </h3>
              <ul className="space-y-1">
                {siteConfig.longTailKeywords.slice(0, 5).map((kw) => (
                  <li key={kw} className="text-sm text-neutral-500">
                    {kw}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* I — FAQ Preview (3) */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
            Consultation FAQs
          </h2>
          <dl className="divide-y divide-neutral-200">
            {[siteConfig.faq[0], siteConfig.faq[1], siteConfig.faq[7]].map(
              (item) => (
                <div key={item.question} className="py-6">
                  <dt className="text-sm font-semibold text-neutral-900 mb-2">
                    {item.question}
                  </dt>
                  <dd className="text-sm text-neutral-600 leading-relaxed">
                    {item.answer}
                  </dd>
                </div>
              )
            )}
          </dl>
          <div className="mt-4">
            <Link
              to="/faq"
              className="text-sm text-neutral-700 underline hover:text-neutral-900"
            >
              View all consultation FAQs →
            </Link>
          </div>
        </section>

        {/* Regulatory Framework */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            Regulatory Oversight Context
          </h2>
          <div className="max-w-3xl space-y-3 text-sm text-neutral-600 leading-relaxed">
            <p>
              Product entry into the Japan market is regulated by several
              authorities depending on product category. For food and beverage
              products, the Ministry of Health, Labour and Welfare (MHLW) and
              the Consumer Affairs Agency (CAA) enforce the Food Sanitation Act
              and the Food Labelling Standards Act respectively.
            </p>
            <p>
              The CAA oversees labelling compliance — including ingredient lists,
              allergen declarations, nutritional information, and Japanese-language
              requirements on all consumer-facing packaging. Non-compliance results
              in product rejection at customs or recall from retail.
            </p>
            <p>
              For non-food categories, METI (Ministry of Economy, Trade and
              Industry) administers product safety standards, and PMDA
              (Pharmaceuticals and Medical Devices Agency) regulates health
              products and medical devices. Relevant regulatory requirements are
              reviewed as part of the consultation.
            </p>
          </div>
        </section>

        {/* J — Final CTA */}
        <section className="border-t border-neutral-200 pt-10">
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">
              If you are evaluating Japan expansion, start with structured clarity.
            </h2>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              The consultation is the first structured step — a direct review of your product, channel options, cost and timeline reality, and a clear recommendation on whether and how to proceed.
            </p>
            <CTA />
          </div>
        </section>

      </main>
    </>
  );
}
