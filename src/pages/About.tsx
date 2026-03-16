import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import CTA from "../components/CTA";
import { siteConfig } from "../content/site.config";
import { pageTitle } from "../lib/seo";

const COVERS = [
  {
    title: "Market Fit Evaluation",
    body: "Direct assessment of whether your product category and pricing are viable in Japan's B2B or retail channels.",
  },
  {
    title: "Entry Channel Recommendation",
    body: "Distributor-based, direct import, or trade show approach — with a clear recommendation on which is appropriate for your stage.",
  },
  {
    title: "Cost and Timeline Framing",
    body: "Indicative cost range and realistic timeline milestones for the entry model discussed.",
  },
  {
    title: "Regulatory and Labeling Review",
    body: "Key compliance requirements — labeling standards, certifications, import documentation — specific to your product category.",
  },
  {
    title: "Distributor Readiness Check",
    body: "Assessment of whether your pricing margins, MOQ, and documentation meet what Japan distributors require before agreeing to carry a product.",
  },
  {
    title: "Decision Memo Output",
    body: "A written summary of findings, fit assessment, risk flags, and a specific recommendation on next steps.",
  },
];

export default function About() {
  const title = pageTitle("About");
  const description =
    "Japan market entry consultation for Malaysian companies — who it is for, what it covers, what to expect, and who should not book. NeoiDigital, Osaka, Japan.";

  return (
    <>
      <SEOHead path="/about" title={title} description={description} />

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">

        {/* Page header */}
        <section className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            About
          </p>
          <h1 className="text-3xl font-semibold text-neutral-900 leading-tight mb-4">
            Japan Market Entry Consultation — About NeoiDigital
          </h1>
          <p className="text-sm text-neutral-600 leading-relaxed">
            {siteConfig.primaryIntent}
          </p>
        </section>

        {/* What the consultation is */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            What the Consultation Is
          </h2>
          <div className="max-w-2xl space-y-3 text-sm text-neutral-700 leading-relaxed">
            <p>
              A structured, one-session engagement focused on decision clarity.
              It reviews your product, company stage, and Japan market conditions
              to produce a clear recommendation on fit, entry pathway, and next
              steps.
            </p>
            <p>
              It is not a discovery call and not a sales presentation. It has a
              defined agenda and a defined output: a decision memo you can use
              internally.
            </p>
          </div>
        </section>

        {/* Who it is for */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-6">
            Who It Is For
          </h2>
          <ul className="space-y-3 max-w-2xl text-sm text-neutral-700 leading-relaxed">
            {[
              "Malaysian SMEs with an export-ready product and a defined target customer type.",
              "ASEAN manufacturers evaluating Japan as a first developed-market entry.",
              "Companies that have completed basic export compliance but are unsure of the Japan channel.",
              "Business owners who need a cost and timeline framework before committing internal resources.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-900" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* What it covers */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-6">
            What the Consultation Covers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {COVERS.map((item) => (
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

        {/* What it is NOT */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-6">
            What the Consultation Is Not
          </h2>
          <ul className="space-y-3 max-w-2xl text-sm text-neutral-600 leading-relaxed">
            {[
              "Not a distributor search — distributor identification is a separate engagement.",
              "Not a legal or customs advisory — regulatory guidance is directional, not a legal opinion.",
              "Not an ongoing service — one session, defined output.",
              "Not a commitment — no obligation after the session.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Who should NOT book */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xl font-semibold text-neutral-900 mb-6">
            Who Should Not Book
          </h2>
          <ul className="space-y-3 max-w-2xl text-sm text-neutral-600 leading-relaxed">
            {[
              "Companies at the idea stage without a developed, exportable product.",
              "Businesses without basic export documentation or a pricing structure in place.",
              "Companies seeking retail or e-commerce entry only — the consultation focuses on B2B distribution pathways.",
              "Anyone expecting a service presentation — the session is an assessment, not a pitch.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-neutral-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Where we operate */}
        {siteConfig.localPresence && (
          <section className="border-t border-neutral-200 pt-10">
            <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
              Where We Operate
            </h2>
            <div className="max-w-2xl space-y-3 text-sm text-neutral-700 leading-relaxed">
              <p>
                NeoiDigital (ネオインスパイア株式会社) is based in{" "}
                <strong className="text-neutral-900">Osaka, Japan</strong>.
                Consultations are conducted in English and cover the Malaysia–Japan
                trade corridor.
              </p>
              <p>
                Operating from within Japan means our assessments reflect current
                distributor behaviour, regulatory practice, and channel
                conditions — not second-hand knowledge.
              </p>
            </div>
          </section>
        )}

        {/* Internal navigation */}
        <section className="border-t border-neutral-200 pt-10">
          <div className="flex flex-wrap gap-6 text-sm">
            <Link
              to="/"
              className="text-neutral-700 underline hover:text-neutral-900"
            >
              ← Consultation overview
            </Link>
            <Link
              to="/faq"
              className="text-neutral-700 underline hover:text-neutral-900"
            >
              Consultation FAQ →
            </Link>
          </div>
        </section>

        {/* Hub link */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            Part of NeoiDigital Japan Market Hub
          </h2>
          <p className="text-sm text-neutral-600 mb-5 max-w-xl leading-relaxed">
            This site is one component within the NeoiDigital Japan market entry
            system. The hub aggregates tools, guides, and consulting pathways
            across the full export journey.
          </p>
          <a
            href={siteConfig.hubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-neutral-900 text-neutral-900 text-sm px-4 py-2 hover:bg-neutral-900 hover:text-white"
          >
            Visit Japan Market Hub →
          </a>
        </section>

        {/* CTA */}
        <section className="border-t border-neutral-200 pt-10">
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">
              Request a consultation.
            </h2>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              If your product is export-ready and Japan is on your roadmap, the
              consultation is the right starting point.
            </p>
            <CTA />
          </div>
        </section>

      </main>
    </>
  );
}
