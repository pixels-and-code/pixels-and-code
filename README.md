# Pixels and Code

Portfolio website for Pixels and Code, a frontend engineering and design systems consultancy.

## Tech Stack

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- Deployed on Vercel

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
pnpm build
```

### Production

```bash
pnpm start
```

## Deployment

This project is configured for deployment on Vercel.

### Deploy to Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click Deploy

Alternatively, deploy directly from the command line:

```bash
pnpm add -g vercel
vercel
```

## Project Structure

```
/app
  layout.tsx      # Root layout with metadata and providers
  page.tsx        # Home page
  globals.css     # Global styles and Tailwind utilities
/components
  Header.tsx      # Site header with navigation
  Footer.tsx      # Site footer
  Hero.tsx        # Hero section
  Services.tsx    # Services section
  CaseStudies.tsx # Featured work section
  Experience.tsx  # Experience highlights
  Credibility.tsx # Credibility signals
  Contact.tsx     # Contact section
  ThemeProvider.tsx # Dark mode context
  ThemeToggle.tsx # Dark mode toggle button
/public
  cv.pdf          # Downloadable CV
```

## Customisation

### Adding Case Studies

Edit the `caseStudies` array in `components/CaseStudies.tsx`:

```tsx
const caseStudies = [
  {
    company: "Company Name",
    title: "Project Title",
    problem: "The challenge faced",
    solution: "How it was solved",
    outcome: "The results achieved",
    tags: ["React", "TypeScript"],
  },
  // ... more case studies
];
```

### Updating Content

- **Hero**: Edit `components/Hero.tsx`
- **Services**: Edit the `services` array in `components/Services.tsx`
- **Experience**: Edit `components/Experience.tsx`
- **Contact**: Edit `components/Contact.tsx`

### Colours

The accent colour can be changed in `tailwind.config.ts`:

```ts
colors: {
  accent: {
    DEFAULT: "#2563eb", // Primary accent
    hover: "#1d4ed8",   // Hover state
  },
},
```

## License

Private - All rights reserved.
