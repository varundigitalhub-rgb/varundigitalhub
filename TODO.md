# TODO: SEO-Optimized Website for Varun Digital Hub

## Global Enhancements
- [x] Edit layout.tsx: Add LocalBusiness schema JSON-LD, enhance metadata, GA4 script, Search Console meta, preload critical resources, ARIA roles
- [x] Create public/sitemap.xml: Static sitemap with all pages
- [x] Create public/robots.txt: Allow all, reference sitemap
- [x] Update public/og-image.png: Copy logo for OG image

## Data Updates
- [x] Update data/projects.ts: Add 4-6 Mumbai-relevant projects with mockups and keyword-rich descriptions

## Page Edits
- [x] Edit home/page.tsx: Update hero tagline, services grid with descriptions/benefits, projects with alts, add generateMetadata
- [x] Edit about/page.tsx: Enhance story/mission with local focus, add generateMetadata
- [x] Edit services/page.tsx: Refactor to service descriptions (Web Design, Development, SEO, etc.), add generateMetadata
- [x] Edit our-work/page.tsx: Update hero/content, add generateMetadata
- [x] Edit pricing/page.tsx: Adjust plans/features, add generateMetadata
- [x] Edit contact/page.tsx: Add Google Maps embed, enhance form ARIA, add generateMetadata

## Blog
- [ ] Add sample blog post in blog/[slug]/page.tsx: "Why Mumbai Businesses Need SEO-Optimized Websites"

## Testing & Verification
- [x] Run npm run build and test responsiveness/Lighthouse (SEO >90, Perf <2s, Accessibility)
- [x] Verify metas, schema, sitemap/robots in browser inspect
- [x] Ensure form submission works, WhatsApp/Maps functional
