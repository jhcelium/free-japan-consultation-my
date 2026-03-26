import { Link, useParams } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import FAQAnswerLayout from "../components/FAQAnswerLayout";
import { getFaqBySlug, faqAnswerPreview, faqIndexPath } from "../lib/faq-assets";
import { faqSingleItemJsonLd, pageTitle } from "../lib/seo";

export default function FAQDetail() {
  const { slug = "" } = useParams<{ slug: string }>();
  const item = slug ? getFaqBySlug(slug) : undefined;

  if (!item) {
    return (
      <>
        <SEOHead
          path="/faq/"
          title={pageTitle("Question not found")}
          description="This FAQ page is not available. Browse the consultation FAQ index for current questions."
          noIndex
        />
        <main className="max-w-2xl mx-auto px-6 py-16 space-y-6">
          <h1 className="text-xl font-semibold text-neutral-900">Question not found</h1>
          <p className="text-sm text-neutral-600 leading-relaxed">
            This FAQ link may be outdated. Return to the consultation FAQ index to
            browse current questions.
          </p>
          <Link
            to={faqIndexPath()}
            className="text-sm text-neutral-700 underline hover:text-neutral-900"
          >
            ← Consultation FAQ
          </Link>
        </main>
      </>
    );
  }

  const path = `faq/${slug}/`;
  const title = pageTitle(item.question);
  const description =
    item.metaDescription ?? faqAnswerPreview(item.answer, 155);

  return (
    <>
      <SEOHead
        path={path}
        title={title}
        description={description}
        extraJsonLd={[faqSingleItemJsonLd(item)]}
      />
      <FAQAnswerLayout
        question={item.question}
        answer={item.answer}
        relatedLinks={item.relatedLinks}
      />
    </>
  );
}
