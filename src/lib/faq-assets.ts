import type { FAQ } from "../content/site.config";
import { siteConfig } from "../content/site.config";

/** Stable URL segment for an FAQ item (explicit slug or derived from question). */
export function faqItemSlug(item: FAQ): string {
  if (item.slug) return item.slug;
  return item.question
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 72);
}

/** Short plain-text preview for index cards (no HTML). */
export function faqAnswerPreview(answer: string, maxLen = 140): string {
  const oneLine = answer.replace(/\s+/g, " ").trim();
  if (oneLine.length <= maxLen) return oneLine;
  return oneLine.slice(0, maxLen - 1).trimEnd() + "…";
}

export function getFaqBySlug(slug: string): FAQ | undefined {
  return siteConfig.faq.find((item) => faqItemSlug(item) === slug);
}

export function faqIndexPath(): string {
  return "/faq/";
}

export function faqAnswerPath(slug: string): string {
  return `/faq/${slug}/`;
}
