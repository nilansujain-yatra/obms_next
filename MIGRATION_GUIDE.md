# Migration Guide: Vite React to Next.js

This document outlines the changes made during the conversion from Vite + React Router to Next.js App Router.

## Key Changes

### 1. **Routing System**
- **Before**: React Router 6 with SPA mode
- **After**: Next.js App Router (file-based routing)
- Files in `/app` automatically become routes
- `page.tsx` is the default page for a route
- `layout.tsx` wraps all routes
- `not-found.tsx` handles 404 errors

### 2. **Server Architecture**
- **Before**: Express server + Vite dev server
- **After**: Next.js built-in server
- Single command: `pnpm dev` (no separate frontend/backend)

### 3. **API Routes**
- **Before**: Express routes in `server/routes/`
- **After**: Next.js API routes in `app/api/`
- Routes are functions in `route.ts` files
- Example: `/api/ping` → `app/api/ping/route.ts`

### 4. **Client Components**
- Components using React hooks must have `'use client'` directive
- Server components by default (no `'use client'`)
- SearchBar, Header, TopAttraction, etc. are marked as client components

### 5. **Environment Variables**
- **Before**: `VITE_PUBLIC_*` prefix for client-side vars
- **After**: `NEXT_PUBLIC_*` prefix for client-side vars
- Update `.env.local` accordingly

### 6. **Build & Development**
- **Before**: `pnpm dev` (Vite) + `pnpm build` (separate client/server builds)
- **After**: `pnpm dev` + `pnpm build` (unified build)

## File Structure Mapping

```
OLD (Vite)              →  NEW (Next.js)
client/pages/Index.tsx  →  app/page.tsx
client/pages/*          →  app/*/page.tsx (if needed)
client/components/*     →  components/*
client/global.css       →  app/globals.css
server/routes/*.ts      →  app/api/*/route.ts
server/index.ts         →  (built-in, no file needed)
```

## Breaking Changes

### 1. **React Router Removed**
- No more `useNavigate()`, `useParams()`, etc.
- Use Next.js `useRouter` from `'next/navigation'`:
  ```typescript
  'use client';
  import { useRouter } from 'next/navigation';
  
  export default function MyComponent() {
    const router = useRouter();
    // router.push('/page')
  }
  ```

### 2. **QueryClientProvider**
- If using React Query, add provider in layout:
  ```typescript
  'use client';
  import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
  
  const queryClient = new QueryClient();
  
  export default function RootLayout({ children }) {
    return (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    );
  }
  ```

### 3. **Static Assets**
- Assets still in `/public` folder
- Reference paths remain the same: `src="/images/logo.png"`

### 4. **Styles**
- Tailwind CSS works the same
- Global styles in `app/globals.css`
- CSS modules still supported

## What's New in Next.js

### Server Components
- By default, all components are server components
- Better performance, no JavaScript sent to browser
- Can directly access databases, APIs, etc.

### 'use client'
- Only components that need interactivity need this directive
- Moves the component boundary to the client
- Reduces JavaScript bundle size

### Image Optimization
- Use `next/image` for automatic optimization:
  ```typescript
  import Image from 'next/image';
  
  <Image src="/images/logo.png" width={100} height={100} alt="Logo" />
  ```

### Link Optimization
- Use `next/link` for client-side navigation:
  ```typescript
  import Link from 'next/link';
  
  <Link href="/about">About</Link>
  ```

## Installation & Running

```bash
cd nextjs
pnpm install
pnpm dev        # Start development server
pnpm build      # Production build
pnpm start      # Run production build
```

## Deployment

### Vercel (Recommended)
- Automatic deployment on git push
- Set root to `nextjs/` folder in project settings

### Netlify
- Build command: `pnpm build`
- Publish directory: `.next`
- Functions are handled automatically

### Self-hosted
- `pnpm build` creates `.next` folder
- `pnpm start` runs the production server
- Node.js 18+ required

## Testing the Migration

1. **Check dev server**: `pnpm dev` should start without errors
2. **Test API routes**: Visit `http://localhost:3000/api/ping`
3. **Check home page**: `http://localhost:3000/` should load
4. **Test interactive components**: Check that buttons, search, etc. work
5. **Build for production**: `pnpm build` should complete successfully

## Common Issues & Solutions

### Issue: Images not loading
- **Solution**: Check image paths in components. Use `/images/...` not `./images/...`

### Issue: 'use client' errors
- **Solution**: Ensure `'use client'` is at the very top of the file before imports

### Issue: TypeScript errors about modules
- **Solution**: Check `tsconfig.json` path aliases match folder structure

### Issue: API routes returning 404
- **Solution**: Ensure file is in `app/api/path/route.ts` and exported as `GET`, `POST`, etc.

## Next Steps

1. Test all functionality thoroughly
2. Update deployment pipeline if needed
3. Remove old Vite project when ready
4. Update CI/CD if using automated deployments
5. Consider migrating to Image optimization with `next/image`
6. Consider using Next.js middleware for authentication
