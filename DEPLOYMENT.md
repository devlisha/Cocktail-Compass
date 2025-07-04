# 🚀 Deployment Guide for Vercel

## Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/cocktail-compass)

## Manual Deployment Steps

### 1. Prerequisites

- [Vercel account](https://vercel.com/signup)
- [Vercel CLI](https://vercel.com/cli) (optional but recommended)
- Node.js 20+ installed locally

### 2. Prepare Your Repository

1. **Push to GitHub/GitLab/Bitbucket:**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Environment Variables:**
   - Copy `.env.example` to `.env.local`
   - Fill in your environment variables (if any)

### 3. Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your Git repository
4. Configure project settings:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`

5. Set environment variables (if needed):
   - `NEXT_PUBLIC_APP_URL`
   - `GOOGLE_GENAI_API_KEY` (optional)

6. Click "Deploy"

### 4. Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### 5. Custom Domain (Optional)

1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Configure DNS records as instructed

## Environment Variables

The following environment variables can be configured in Vercel:

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_APP_URL` | No | Your app's URL (auto-set by Vercel) |
| `GOOGLE_GENAI_API_KEY` | No | Google AI API key for enhanced features |
| `NEXT_PUBLIC_DEFAULT_LANGUAGE` | No | Default language (defaults to 'en') |

## Vercel Configuration

The project includes:

- ✅ `vercel.json` - Deployment configuration
- ✅ `next.config.ts` - Optimized for Vercel
- ✅ `.vercelignore` - Files to ignore during deployment
- ✅ SEO optimization with sitemap and robots.txt
- ✅ Open Graph images
- ✅ Security headers

## Performance Optimizations

- **Image Optimization:** Automatic WebP/AVIF conversion
- **Bundle Optimization:** Tree shaking and code splitting
- **Caching:** Static assets cached for 1 year
- **Compression:** Gzip/Brotli compression enabled
- **CDN:** Global edge network delivery

## Monitoring & Analytics

### Vercel Analytics (Recommended)
```bash
npm install @vercel/analytics
```

Add to your layout:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Google Analytics (Optional)
Set `NEXT_PUBLIC_GA_ID` in environment variables.

## Troubleshooting

### Common Issues

1. **Build Fails:**
   - Check Node.js version (should be 20+)
   - Run `npm run build` locally first
   - Check for TypeScript/ESLint errors

2. **Images Not Loading:**
   - Verify image domains in `next.config.ts`
   - Check CORS settings

3. **Environment Variables:**
   - Make sure they're set in Vercel dashboard
   - Prefix client-side vars with `NEXT_PUBLIC_`

### Build Commands

```bash
# Test build locally
npm run build

# Preview build locally
npm run preview

# Check for type errors
npm run typecheck

# Fix linting issues
npm run lint:fix
```

## Post-Deployment Checklist

- [ ] App loads correctly
- [ ] All languages work
- [ ] Images load properly
- [ ] Search functionality works
- [ ] Favorites system works
- [ ] Mobile responsiveness
- [ ] SEO meta tags present
- [ ] Analytics tracking (if configured)

## Support

For deployment issues:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Vercel Community](https://github.com/vercel/vercel/discussions)
