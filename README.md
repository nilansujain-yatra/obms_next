# Fusion Next.js

A Next.js conversion of the Fusion Starter project with the latest Next.js versions.

## Tech Stack

- **Framework**: Next.js 16 (Latest)
- **Frontend**: React 18 + TypeScript + TailwindCSS 3
- **API Routes**: Next.js App Router with built-in API routes
- **UI**: Radix UI + TailwindCSS 3 + Lucide React icons
- **Package Manager**: pnpm

## Project Structure

```
app/                      # Next.js App Router
├── layout.tsx             # Root layout with providers
├── page.tsx               # Home page
├── not-found.tsx          # 404 page
└── api/                   # API routes
    ├── ping/route.ts      # Ping endpoint
    └── demo/route.ts      # Demo endpoint

components/
├── ui/                    # Pre-built UI components
├── pages/                 # Page-specific components
└── widgets/               # Reusable widget components

lib/
└── utils.ts               # Utility functions (cn helper)

app/globals.css            # Global styles and Tailwind
tailwind.config.ts         # Tailwind configuration
```

## Getting Started

### Install Dependencies

```bash
cd nextjs
pnpm install
```

### Development

```bash
pnpm dev
```

Opens http://localhost:3000 in your browser.

### Build

```bash
pnpm build
```

### Production

```bash
pnpm start
```

## Key Differences from Vite Version

1. **No Express Server**: API routes are handled by Next.js App Router (`app/api/`)
2. **SSR by Default**: Pages are server-rendered by default (can be changed with `'use client'`)
3. **File-Based Routing**: Routes are automatically created from file structure in `/app`
4. **Single Command**: `pnpm dev` runs everything (no separate server)
5. **Environment Variables**: Use `NEXT_PUBLIC_` prefix for client-side variables

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_BUILDER_KEY="__BUILDER_PUBLIC_KEY__"
PING_MESSAGE="ping pong"
```

## API Routes

All API endpoints are in `app/api/`:

- `GET /api/ping` - Simple ping endpoint
- `GET /api/demo` - Demo endpoint

## Deployment

### Vercel (Recommended)

```bash
vercel deploy
```

### Netlify

1. Connect your repository
2. Set build command: `pnpm build`
3. Set publish directory: `.next`

### Standard Node.js

```bash
pnpm build
pnpm start
```

## Component Updates

When updating client-interactive components, add `'use client'` at the top:

```typescript
'use client';

import { useState } from 'react';

export default function MyComponent() {
  const [count, setCount] = useState(0);
  return <div onClick={() => setCount(count + 1)}>{count}</div>;
}
```

## Migration Notes

- React Router has been removed (Next.js handles routing)
- QueryClientProvider setup can be added in root layout if needed
- All styling remains the same (Tailwind CSS)
- UI component library is fully compatible
