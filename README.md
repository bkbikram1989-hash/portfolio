# Bikram Bishwakarma — Portfolio

Personal portfolio built with Next.js 15 (App Router, TypeScript), exported as a static site.

## Edit content

All text lives in `data/profile.ts`: name, about, experience, Lions leadership, education, skills, and contact links. Leave a contact field empty (`""`) to hide it.

To change the photo, replace `public/profile.jpg`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build      # static site written to out/
```

## Deploy

- **Vercel / Netlify:** import the repository; the default settings work.
- **GitHub Pages:** push this repository to GitHub, then set
  Settings → Pages → Source to **GitHub Actions**. The workflow in
  `.github/workflows/deploy.yml` builds the site and publishes it on every push to `main`,
  and sets the correct base path automatically.
- **Any static host / cPanel:** upload the contents of `out/`.
