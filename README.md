# Kiran Sanjivani Trust Website

A modern, premium, fully responsive NGO website built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and Shadcn UI.

## Features

- **8 Pages**: Home, About, Projects, Our Work (Media), Volunteer, Donate, Gallery, Contact
- **Premium Design**: Green, white, and gold color palette with professional NGO aesthetics
- **Dark Mode**: System-aware theme toggle with next-themes
- **Animations**: Framer Motion scroll animations and animated counters
- **Accessibility**: Skip links, ARIA labels, focus states, reduced motion support
- **SEO**: Metadata, Open Graph tags, structured data (NGO schema), sitemap
- **Forms**: Contact and volunteer forms with Zod validation and toast notifications
- **Responsive**: Mobile-first with sticky navbar and mobile drawer navigation

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Shadcn UI (Radix primitives)
- React Hook Form + Zod
- next-themes

## Project Structure

```
src/
├── app/              # Pages and routing
├── components/
│   ├── forms/        # Contact & volunteer forms
│   ├── layout/       # Navbar & footer
│   ├── providers/    # Theme provider
│   ├── sections/     # Home page sections
│   ├── shared/       # Reusable utilities
│   └── ui/           # Shadcn UI components
└── lib/
    ├── constants.ts  # Site content & data
    └── utils.ts      # Utility functions
```

## Customization

Update organization details, contact info, and content in `src/lib/constants.ts`.

Replace placeholder UPI QR, bank details, and images with your actual assets before going live.
