import fs from "fs";
import path from "path";

const site = JSON.parse(fs.readFileSync(path.join(process.cwd(), "src/data/site.json"), "utf-8"));
const publicDir = path.join(process.cwd(), "public");
fs.mkdirSync(publicDir, { recursive: true });

const summary = `${site.name} is an AI growth intelligence studio for local businesses. Our engine finds the hidden website problems that cost owner-run businesses customers and revenue, then our engineers fix them.`;
const services = site.services.map((s) => `- ${s.name}: ${s.description}`).join("\n");
const contact = `- Website: ${site.url}/\n- Email: ${site.email}\n- WhatsApp: ${site.whatsapp}\n- Location: Lagos, Nigeria (remote-first)`;

const short = `# ${site.name}

> ${summary}

## Pages

- [Home](${site.url}/): ${site.description}
- [Sitemap](${site.url}/sitemap.xml): Machine-readable list of pages
- [Full details for AI systems](${site.url}/llms-full.txt): Services, markets, industries and FAQ

## Services

${services}

## Markets

${site.markets.join(", ")}

## Contact

${contact}
`;
fs.writeFileSync(path.join(publicDir, "llms.txt"), short);

const faq = site.faqs.map((f) => `### ${f.q}\n${f.a}`).join("\n\n");
const full = `# ${site.name}

> ${summary}

## What we do

The engine scans local businesses on Google Maps and business directories, audits their real websites, turns the findings into business language (lost bookings, lost trust, lost revenue), and ranks each opportunity. We reach owners by email or WhatsApp with what we found, follow up, and then fix the problems.

## Services

${services}

## Industries

${site.industries.join(", ")}

## Markets

${site.markets.join(", ")}. Based in Lagos, Nigeria; work is remote-first.

## Founder

${site.founder.name}, ${site.founder.jobTitle} (${site.founder.url})

## FAQ

${faq}

## Contact

${contact}
`;
fs.writeFileSync(path.join(publicDir, "llms-full.txt"), full);
console.log("llms.txt and llms-full.txt written");
