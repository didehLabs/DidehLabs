import fs from "fs";
import path from "path";

const site = JSON.parse(fs.readFileSync(path.join(process.cwd(), "src/data/site.json"), "utf-8"));
const baseUrl = site.url;
const today = new Date().toISOString().split("T")[0];

// Single-page site: one canonical URL. Add new routes here as the site grows.
const pages = [
  {
    url: "/",
    changefreq: "weekly",
    priority: "1.0",
    images: [
      { loc: "/og-image.png", title: site.title, caption: site.description },
      { loc: "/favicon/android-chrome-512x512.png", title: "didehLabs logo", caption: "didehLabs brand mark" },
    ],
  },
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;
for (const p of pages) {
  xml += `  <url>\n    <loc>${baseUrl}${p.url}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n`;
  xml += `    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${p.url}" />\n`;
  xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${p.url}" />\n`;
  for (const i of p.images) {
    xml += `    <image:image>\n      <image:loc>${baseUrl}${i.loc}</image:loc>\n      <image:title>${esc(i.title)}</image:title>\n      <image:caption>${esc(i.caption)}</image:caption>\n    </image:image>\n`;
  }
  xml += `  </url>\n`;
}
xml += `</urlset>\n`;

const publicDir = path.join(process.cwd(), "public");
fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), xml);
console.log("sitemap.xml written");
