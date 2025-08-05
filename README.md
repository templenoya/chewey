# Highland Capital Partners Homepage Clone

A modern clone of the Highland Capital Partners website built with Next.js, TypeScript, and ShadCN UI.

## Features

- **Responsive Design**: Mobile-first approach with responsive layouts
- **Modern UI**: Clean, professional design using ShadCN UI components
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Vercel Ready**: Optimized for deployment on Vercel

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **Font**: Inter
- **Deployment**: Vercel

## Components

- **Header**: Navigation with logo and investor login
- **Hero Section**: Main banner with key messaging
- **Statistics Section**: Key metrics display (200+ Exits, 50+ IPOs, 40 Unicorns, $7B AUM)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd hcp-clone
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the site

## Deployment

### Deploy to Vercel

The easiest way to deploy is using Vercel:

1. Push your code to GitHub
2. Import your GitHub repository in Vercel
3. Vercel will automatically deploy your application

### Manual Deployment

```bash
npm run build
```

The built files will be in the `.next` directory.

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/          # ShadCN UI components
│   ├── Header.tsx   # Site header
│   ├── Hero.tsx     # Hero section
│   └── Stats.tsx    # Statistics section
└── lib/
    └── utils.ts     # Utility functions
```

## License

This project is for educational purposes only.
