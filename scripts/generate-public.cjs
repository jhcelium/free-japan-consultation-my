/**
 * Auto-generates public/sitemap.xml and public/robots.txt
 * from src/content/site.config.ts.
 *
 * DO NOT EDIT — this file is a build tool.
 * To customise a sub-site, edit src/content/site.config.ts only.
 */

"use strict";

const fs = require("fs");
const path = require("path");

// ── Read the TypeScript source as raw text ───────────────────
const configPath = path.join(__dirname, "..", "src", "content", "site.config.ts");
const src = fs.readFileSync(configPath, "utf8");

// ── Extract ACTIVE_SITE_KEY ──────────────────────────────────
const keyMatch = src.match(/ACTIVE_SITE_KEY\s*=\s*["']([^"']+)["']/);
if (!keyMatch) {
  console.error("[generate-public] ERROR: Cannot find ACTIVE_SITE_KEY in site.config.ts");
  process.exit(1);
}
const activeKey = keyMatch[1];

// ── Find the preset block for the active key ─────────────────
const keyIndex = src.indexOf('"' + activeKey + '"');
if (keyIndex === -1) {
  console.error("[generate-public] ERROR: Cannot find preset key '" + activeKey + "' in SITE_PRESETS");
  process.exit(1);
}

const blockStart = keyIndex;
const rawBlock = src.slice(blockStart, blockStart + 4000);
const presetChunk = src.slice(blockStart, blockStart + 20000);

// ── Extract domain ────────────────────────────────────────────
const domainMatch = rawBlock.match(/domain\s*:\s*["']([^"']+)["']/);
const domain = domainMatch ? domainMatch[1] : activeKey + ".neoidigital.com";

// ── Extract noindex flag ──────────────────────────────────────
const noindexMatch = rawBlock.match(/noindex\s*:\s*(true|false)/);
const noindex = noindexMatch ? noindexMatch[1] === "true" : false;

// ── Build sitemap.xml (trailing-slash enforced) ──────────────
const today = new Date().toISOString().split("T")[0];
const baseUrl = "https://" + domain;

const faqSlugs = [];
const slugIter = presetChunk.matchAll(/slug:\s*["']([^"']+)["']/g);
for (const m of slugIter) {
  faqSlugs.push(m[1]);
}

const pages = [
  { path: "/",       changefreq: "weekly",  priority: "1.0" },
  { path: "/about/", changefreq: "monthly", priority: "0.8" },
  { path: "/faq/",   changefreq: "weekly",  priority: "0.9" },
];

faqSlugs.forEach(function (s) {
  pages.push({
    path: "/faq/" + s + "/",
    changefreq: "monthly",
    priority: "0.7",
  });
});

const urlEntries = pages.map(function (p) {
  return [
    "  <url>",
    "    <loc>" + baseUrl + p.path + "</loc>",
    "    <lastmod>" + today + "</lastmod>",
    "    <changefreq>" + p.changefreq + "</changefreq>",
    "    <priority>" + p.priority + "</priority>",
    "  </url>",
  ].join("\n");
});

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  urlEntries.join("\n"),
  "</urlset>",
  "",
].join("\n");

// ── Build robots.txt ─────────────────────────────────────────
const robots = noindex
  ? "User-agent: *\nDisallow: /\n"
  : "User-agent: *\nAllow: /\n\nSitemap: " + baseUrl + "/sitemap.xml\n";

// ── Write output ─────────────────────────────────────────────
const publicDir = path.join(__dirname, "..", "public");
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(publicDir, "robots.txt"), robots);

console.log("[generate-public] OK");
console.log("  Active key : " + activeKey);
console.log("  Domain     : " + domain);
console.log("  noindex    : " + noindex);
console.log("  Wrote      : public/sitemap.xml, public/robots.txt");
