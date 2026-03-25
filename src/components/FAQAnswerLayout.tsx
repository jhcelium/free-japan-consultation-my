import { Link } from "react-router-dom";
import CTA from "./CTA";
import { siteConfig } from "../content/site.config";
import { faqIndexPath } from "../lib/faq-assets";

type Props = {
  question: string;
  answer: string;
};

/**
 * Reusable shell for FAQ answer pages: breadcrumb, H1, lead-sized answer block, nav, CTA.
 */
export default function FAQAnswerLayout({ question, answer }: Props) {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-10">
      <nav className="text-xs text-neutral-500" aria-label="Breadcrumb">
        <Link to="/" className="underline hover:text-neutral-900">
          Home
        </Link>
        <span className="mx-2" aria-hidden>
          /
        </span>
        <Link to={faqIndexPath()} className="underline hover:text-neutral-900">
          Consultation FAQ
        </Link>
      </nav>

      <article>
        <h1 className="text-2xl font-semibold text-neutral-900 leading-tight mb-6">
          {question}
        </h1>
        <div className="text-sm text-neutral-600 leading-relaxed space-y-4">
          {answer.split(/\n\n+/).map((para, i) => (
            <p key={i} data-speakable={i === 0 ? "lead" : undefined}>
              {para}
            </p>
          ))}
        </div>
      </article>

      <section className="border-t border-neutral-200 pt-8 space-y-6">
        <div className="flex flex-wrap gap-6 text-sm">
          <Link
            to={faqIndexPath()}
            className="text-neutral-700 underline hover:text-neutral-900"
          >
            ← All consultation questions
          </Link>
          <a
            href={siteConfig.hubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-700 underline hover:text-neutral-900"
          >
            Japan Market Hub →
          </a>
        </div>
        <div className="max-w-md">
          <p className="text-xs text-neutral-500 mb-4 leading-relaxed">
            If this matches your situation, you can request a consultation through
            the hub. There is no obligation after the first session.
          </p>
          <CTA />
        </div>
      </section>
    </main>
  );
}
