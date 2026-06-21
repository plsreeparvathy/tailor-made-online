# TailorMade Online

A premium Next.js website for **TailorMade Online** by Ahaskara Endeavors LLP — helping designers, boutiques, and fashion entrepreneurs create signature labels via low-MOQ garment manufacturing for Indian ethnic wear.

**Tagline:** Curate & Create Your Own Label

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- framer-motion
- react-hook-form + zod
- googleapis (Google Sheets integration)
- lucide-react

## Getting Started

> **Note:** If your project folder path contains spaces (e.g. `Tailor Made`), `npm run dev` works fine but `npm run build` may fail due to a Next.js path resolution issue. Rename the folder (e.g. `tailormade-online`) or clone into a path without spaces for production builds.

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy the example env file and fill in your Google Sheets credentials:

```bash
cp .env.local.example .env.local
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Google Sheets Setup

The enquiry form submits data to a Google Sheet via a service account. Follow these steps:

1. Go to [Google Cloud Console](https://console.cloud.google.com/) and create a new project.
2. Enable the **Google Sheets API** for your project.
3. Create a **Service Account** under IAM & Admin → Service Accounts.
4. Download the JSON credentials file for the service account.
5. Copy `client_email` from the JSON → set as `GOOGLE_SERVICE_ACCOUNT_EMAIL` in `.env.local`.
6. Copy `private_key` (entire value including `\n` characters) → set as `GOOGLE_PRIVATE_KEY` in `.env.local`.
7. Create a new Google Sheet and copy its ID from the URL:
   - URL format: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
   - Set the ID as `GOOGLE_SHEET_ID` in `.env.local`.
8. Share the Google Sheet with the service account email (from step 5) as **Editor**.
9. Add the following headers to **Row 1** of your sheet:

   | A | B | C | D | E | F | G | H | I | J | K | L | M |
   |---|---|---|---|---|---|---|---|---|---|---|---|---|
   | Timestamp | Full Name | Brand Name | Phone | Email | City & State | Are You | Registered Brand | Product Types | Styles Planned | Expected Quantity | Colours Required | Design Assets |

## Project Structure

```
src/
  app/
    page.tsx              # Main page assembling all sections
    layout.tsx            # Fonts, metadata, global providers
    api/
      enquiry/
        route.ts          # Google Sheets API route
  components/
    Navbar.tsx
    Hero.tsx
    MarqueeBanner.tsx
    About.tsx
    WhatWeMake.tsx
    HowItWorks.tsx
    EnquiryForm.tsx
    Footer.tsx
    BlockPrintDivider.tsx
    BlockPrintPattern.tsx
    ui/                   # shadcn/ui components
  lib/
    googleSheets.ts       # Sheets helper function
    enquirySchema.ts      # Zod validation schema
    utils.ts
  types/
    enquiry.ts            # Form data TypeScript interface
  hooks/
    use-toast.ts
```

## Build for Production

```bash
npm run build
npm start
```

## Brand

- **Platform:** TailorMade Online
- **By:** Ahaskara Endeavors LLP
- **Founded:** 2017, Bengaluru
- **Specialisation:** Indian ethnic wear — block prints, kurtis, co-ord sets, handloom fabrics
