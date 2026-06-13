# Riddhi Astrology Redesign

A custom, responsive multi-page website redesign built around Riddhi Astrology's authentic content and photography.

## Pages

- Home
- About
- Guidance and services
- Contact and consultation enquiry
- Journal
- Article
- 11 dedicated service pages
- Ahmedabad and Surat location pages

## Run locally

```powershell
python -m http.server 4173
```

Then open `http://localhost:4173`.

The consultation form opens a pre-filled WhatsApp enquiry because no production form backend has been connected yet.

## Deploy to Vercel

This is a static website and does not require a build step.

- Framework Preset: `Other`
- Root Directory: project root
- Build Command: leave blank
- Output Directory: `.`
- Install Command: leave blank

The included `vercel.json` enables clean URLs and removes trailing slashes.
