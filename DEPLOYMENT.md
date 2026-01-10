# Deployment Guide - AI Trend Analyser

## Option 1: Deploy to Vercel (Recommended - Free Tier)

### Prerequisites

1. Create a [Vercel account](https://vercel.com/signup)
2. Install Vercel CLI: `npm i -g vercel`

### Steps:

#### 1. Prepare Your Repository

```bash
cd "/Users/parthgupta/Desktop/AI Trend Analyser"

# Add all changes
git add .

# Commit changes
git commit -m "Add registration, login, and AI chat features"

# Push to GitHub
git push origin main
```

#### 2. Deploy via Vercel Website (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository: `ParthGupta1304/AI-Trend-Analyser`
4. Configure:

   - **Root Directory**: `frontend`
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

5. Add Environment Variables:

   - `OPENAI_API_KEY`: Your OpenAI API key
   - `DATABASE_URL`: Your production database URL (see below)

6. Click "Deploy"

#### 3. Deploy via CLI (Alternative)

```bash
cd "/Users/parthgupta/Desktop/AI Trend Analyser/frontend"
vercel

# Follow prompts:
# - Setup and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name: ai-trend-analyser
# - Directory: ./ (already in frontend)
# - Override settings? No

# Add environment variables
vercel env add OPENAI_API_KEY
vercel env add DATABASE_URL

# Deploy to production
vercel --prod
```

---

## Option 2: Deploy Database (PostgreSQL)

### Option A: Vercel Postgres (Recommended)

1. Go to your Vercel project dashboard
2. Click "Storage" → "Create Database"
3. Select "Postgres"
4. Copy connection string
5. Add to environment variables as `DATABASE_URL`

### Option B: Neon (Free PostgreSQL)

1. Go to [neon.tech](https://neon.tech)
2. Create free account
3. Create new project
4. Copy connection string
5. Update your Vercel environment variables

### Option C: Supabase (Free PostgreSQL + more)

1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Go to Project Settings → Database
4. Copy connection string (use "Connection pooling" for production)
5. Update your Vercel environment variables

---

## Option 3: Deploy to Railway (Alternative)

1. Go to [railway.app](https://railway.app)
2. Click "Start a New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository
5. Add environment variables:
   - `OPENAI_API_KEY`
   - `DATABASE_URL`
6. Railway will auto-detect Next.js and deploy

---

## Post-Deployment Steps

### 1. Set up Database Schema

After deploying database, run migrations:

```bash
# Install dependencies
cd frontend
npm install

# Push schema to production database
DATABASE_URL="your-production-db-url" npm run db:push
```

### 2. Test Your Deployment

- Visit your deployed URL
- Test registration
- Test login
- Test AI chat

### 3. Configure Domain (Optional)

- In Vercel: Go to Settings → Domains
- Add your custom domain
- Update DNS records as instructed

---

## Environment Variables Needed

```env
# Production Environment Variables
OPENAI_API_KEY=sk-proj-your-key-here
DATABASE_URL=postgresql://user:password@host:5432/database
NODE_ENV=production
```

---

## Troubleshooting

### Build Fails

- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Verify TypeScript has no errors

### Database Connection Issues

- Verify DATABASE_URL format
- Check if database allows external connections
- For Vercel Postgres, ensure you're using the correct region

### API Key Issues

- Verify OPENAI_API_KEY is set in production
- Check OpenAI account has credits
- Ensure key has proper permissions

---

## Cost Estimates

### Free Tier (Hobby Projects)

- **Vercel**: Free (includes SSL, CDN, analytics)
- **Neon/Supabase Postgres**: Free (0.5 GB storage)
- **OpenAI**: Pay per use (~$0.50 per 1M tokens with GPT-4o-mini)

### Expected Monthly Costs (100 users)

- Vercel: $0 (free tier)
- Database: $0 (free tier sufficient)
- OpenAI: ~$5-20 (depends on usage)
- **Total**: ~$5-20/month

---

## Next Steps After Deployment

1. ✅ Monitor usage in Vercel dashboard
2. ✅ Set up custom domain
3. ✅ Add analytics (Vercel Analytics is free)
4. ✅ Set up error monitoring (Sentry)
5. ✅ Add rate limiting for API routes
6. ✅ Enable HTTPS (automatic on Vercel)
