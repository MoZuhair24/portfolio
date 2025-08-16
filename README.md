# Mo. Zuhair — Java Developer Portfolio (Next.js + TailwindCSS)

A clean, modern portfolio powered by Next.js (App Router) and TailwindCSS. Content is populated from your resume.

## Quick Start

```bash
# 1) Install dependencies
npm install

# 2) Start dev server
npm run dev

# 3) Build for production
npm run build
npm start
```

## Customize

- **Profile & content:** `lib/profile.ts`
- **Avatar:** drop an image at `public/avatar.jpg` and it will show automatically.
- **SEO:** `app/layout.tsx` (OpenGraph, title, description).
- **Styling:** `app/globals.css` and utility classes in components.

## Deploy

- Push to GitHub and import into **Vercel**, or run `vercel` from the project directory.

## Notes

- The contact form is static. Hook it up to Formspree or Resend for real submissions.
- Replace `https://example.com` in `app/layout.tsx` metadata with your final domain.
- Update `github` in `lib/profile.ts` with your real GitHub URL.
