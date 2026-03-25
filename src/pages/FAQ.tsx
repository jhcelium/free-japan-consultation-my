import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import CTA from "../components/CTA";
import { siteConfig } from "../content/site.config";
import { pageTitle } from "../lib/seo";
import {
  faqAnswerPath,
  faqAnswerPreview,
  faqItemSlug,
} from "../lib/faq-assets";

export default function FAQ() {
  const title = pageTitle("Consultation FAQ");
  const description =
    "Practical answers on whether to book a Japan market entry consultation, what is covered, who it is for, cost and timeline framing, and what you can decide after one session. For Malaysian companies.";

  return (
    <>
      <SEOHead path="/faq/" title={title} description={description} isFaq={true} />

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">

        <section className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
            Consultation FAQ
          </p>
          <h1 className="text-3xl font-semibold text-neutral-900 leading-tight mb-4">
            Japan market entry consultation — questions and answers
          </h1>
          <div
            data-speakable="lead"
            className="text-sm text-neutral-600 leading-relaxed space-y-3"
          >
            <p>
              This hub answers practical questions about whether booking makes
              sense for your company, what the session covers, who it is for,
              and what decisions you can clarify in one structured conversation.
            </p>
            <p>
              Each item below links to a dedicated answer page you can share or
              revisit. For qualification and scheduling, use the Japan Market Hub.
            </p>
          </div>
        </section>

        <section className="border-t border-neutral-200 pt-10" aria-labelledby="faq-index-heading">
          <h2 id="faq-index-heading" className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-8">
            All questions
          </h2>
          <ul className="divide-y divide-neutral-200">
            {siteConfig.faq.map((item) => {
              const s = faqItemSlug(item);
              return (
                <li key={s} className="py-8 first:pt-0">
                  <Link
                    to={faqAnswerPath(s)}
                    className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
                  >
                    <span className="text-base font-semibold text-neutral-900 group-hover:underline">
                      {item.question}
                    </span>
                    <p className="mt-2 text-sm text-neutral-500 leading-relaxed max-w-3xl">
                      {faqAnswerPreview(item.answer, 160)}
                    </p>
                    <span className="mt-2 inline-block text-xs text-neutral-400">
                      Read answer →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="border-t border-neutral-200 pt-10">
          <div className="flex flex-wrap gap-6 text-sm">
            <Link
              to="/"
              className="text-neutral-700 underline hover:text-neutral-900"
            >
              ← Consultation overview (home)
            </Link>
            <a
              href={siteConfig.hubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 underline hover:text-neutral-900"
            >
              Japan Market Hub →
            </a>
            <Link
              to="/about/"
              className="text-neutral-700 underline hover:text-neutral-900"
            >
              About this consultation
            </Link>
          </div>
        </section>

        <section className="border-t border-neutral-200 pt-10">
          <div className="max-w-xl">
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              Ready to check fit?
            </h2>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              Request a consultation through the hub if your product is
              export-ready and you want a structured first conversation.
            </p>
            <CTA />
          </div>
        </section>

      </main>
    </>
  );
}
