# superioraquariums.com

Static luxury website for a custom aquarium / terrarium manufacturer. Built with [Astro](https://astro.build) (no client framework, tiny JS, AVIF/WebP via `astro:assets`).

```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs ./dist (includes sitemap-index.xml)
```

## Replacing placeholders
Nothing about the company is invented. Every `[BRACKETED]` value is a placeholder.

| What | Where |
| --- | --- |
| Name, phone, email, address, service area, form endpoint, analytics id | `src/data/site.ts` |
| Stats (years, projects, resellers); add `count` to animate | `src/data/site.ts` → `stats` |
| FAQ, process steps, materials, technical topics | `src/data/site.ts` |
| Projects / case studies / portfolio filters | `src/content/projects/*.json` (copy `_template.json`) |
| Testimonials (real ones only) | `src/content/testimonials/` |
| Resellers | `src/content/resellers/` |
| Blog articles | `src/content/posts/*.md` |
| Photography | `src/assets/photos/` + `src/data/photos.ts` |
| About timeline | `src/pages/about.astro` |

The five photos in `src/assets/photos` are low-resolution samples. Replace them with full-resolution originals (the hero needs 2400px+ wide). Project entries with `"sample": true` show a "Sample entry" tag; remove the flag once the content is real.

## Contact form
Set `formEndpoint` in `src/data/site.ts` (Formspree, Netlify Forms, your own API). Fields change by inquiry type, and a honeypot field is included. Validate and scan uploads server-side at the endpoint.
