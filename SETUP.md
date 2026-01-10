# 🛠️ SentiMax - Complete Setup Guide

This guide will walk you through setting up the SentiMax AI Trend Analyser on your local machine.

---

## 📋 Table of Contents

- [Prerequisites](#-prerequisites)
- [Installation Methods](#-installation-methods)
  - [Method 1: Local Development (Recommended)](#method-1-local-development-recommended)
  - [Method 2: Full Docker Setup](#method-2-full-docker-setup)
- [Database Setup](#-database-setup)
- [Environment Configuration](#-environment-configuration)
- [Running the Application](#-running-the-application)
- [Troubleshooting](#-troubleshooting)

---

## 📦 Prerequisites

### Required Software

1. **Node.js 20 or higher**

   - Download: https://nodejs.org/
   - Verify installation:
     ```bash
     node --version  # Should show v20.x.x or higher
     npm --version   # Should show 10.x.x or higher
     ```

2. **Docker & Docker Compose**

   - Download: https://www.docker.com/get-started
   - Verify installation:
     ```bash
     docker --version
     docker-compose --version
     ```

3. **Git**
   - Download: https://git-scm.com/
   - Verify installation:
     ```bash
     git --version
     ```

### Required API Keys

1. **OpenAI API Key**
   - Sign up at: https://platform.openai.com/
   - Go to: https://platform.openai.com/api-keys
   - Click "Create new secret key"
   - Copy and save the key (starts with `sk-proj-...`)
   - **Important**: Add credits to your OpenAI account

---

## 🚀 Installation Methods

### Method 1: Local Development (Recommended)

This method runs the frontend locally while using Docker only for PostgreSQL.

#### Step 1: Clone the Repository

```bash
git clone https://github.com/ParthGupta1304/AI-Trend-Analyser.git
cd "AI Trend Analyser"
```

#### Step 2: Start PostgreSQL with Docker

```bash
# Start only the PostgreSQL container
docker-compose up -d postgres

# Verify it's running
docker ps | grep postgres
# You should see: ai_postgres ... (healthy)
```

#### Step 3: Set Up Frontend Environment

```bash
cd frontend

# Create environment file
cat > .env.local << EOF
# Database Configuration
DATABASE_URL=postgres://postgres:postgres@localhost:5432/ai_market

# OpenAI Configuration
OPENAI_API_KEY=sk-proj-YOUR-KEY-HERE

# Application Configuration
NODE_ENV=development
NEXT_PUBLIC_API_URL=http://localhost:3000
EOF

# Replace YOUR-KEY-HERE with your actual OpenAI API key
```

#### Step 4: Install Dependencies

```bash
npm install
```

#### Step 5: Set Up Database Schema

```bash
# Push database schema to PostgreSQL
npm run db:push

# You should see: ✓ Pushing schema changes to database
```

#### Step 6: Start Development Server

```bash
npm run dev
```

✅ **Success!** Your app is now running at http://localhost:3000

---

### Method 2: Full Docker Setup

This method runs everything in Docker containers.

#### Step 1: Clone Repository

```bash
git clone https://github.com/ParthGupta1304/AI-Trend-Analyser.git
cd "AI Trend Analyser"
```

#### Step 2: Configure Environment

```bash
# Copy example environment file
cp .env.example .env

# Edit .env file
nano .env
# OR
code .env

# Update these values:
# OPENAI_API_KEY=sk-proj-YOUR-KEY-HERE
```

#### Step 3: Start All Services

```bash
# Start PostgreSQL first
docker-compose up -d postgres

# Wait for PostgreSQL to be healthy (about 10 seconds)
docker-compose ps postgres

# Once healthy, start frontend
docker-compose up -d frontend
```

#### Step 4: Set Up Database

```bash
# Access frontend container
docker exec -it ai_frontend sh

# Inside container, push database schema
npm run db:push

# Exit container
exit
```

✅ **Success!** Your app is running at http://localhost:3000

---

## 🗄️ Database Setup

### Understanding the Database Schema

The application uses PostgreSQL with the following structure:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR(100) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  time_acc_created INTEGER NOT NULL
);
```

### Database Management Commands

```bash
cd frontend

# Generate migration files
npm run db:generate

# Apply migrations to database
npm run db:migrate

# Push schema directly (for development)
npm run db:push

# Open Drizzle Studio (visual database editor)
npm run db:studio
# Opens at http://localhost:4983
```

### Accessing PostgreSQL Directly

```bash
# Using Docker
docker exec -it ai_postgres psql -U postgres -d ai_market

# Common PostgreSQL commands:
# \dt          - List all tables
# \d users     - Describe users table
# SELECT * FROM users;  - View all users
# \q           - Exit psql
```

---

## ⚙️ Environment Configuration

### Frontend Environment Variables

Create `frontend/.env.local`:

```env
# ===========================================
# Database Configuration
# ===========================================
DATABASE_URL=postgres://postgres:postgres@localhost:5432/ai_market

# ===========================================
# OpenAI API Configuration
# ===========================================
OPENAI_API_KEY=sk-proj-your-actual-key-here

# ===========================================
# Application Configuration
# ===========================================
NODE_ENV=development
NEXT_PUBLIC_API_URL=http://localhost:3000

# ===========================================
# Optional: Debugging
# ===========================================
# NEXT_PUBLIC_DEBUG=true
```

### Root Environment Variables

Create `.env` at project root:

```env
# ===========================================
# PostgreSQL Database
# ===========================================
DATABASE_URL=postgres://postgres:postgres@postgres:5432/ai_market

# ===========================================
# Worker Configuration (Optional)
# ===========================================
OPENAI_API_KEY=sk-proj-your-key-here
WORKER_MODEL=local

# ===========================================
# Frontend Configuration
# ===========================================
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Security Notes

⚠️ **Important Security Practices:**

1. **Never commit `.env` files** - They're in `.gitignore`
2. **Use different keys** for development and production
3. **Rotate API keys** regularly
4. **Set spending limits** on OpenAI account
5. **Use environment-specific configurations**

---

## 🏃 Running the Application

### Starting the Development Server

```bash
# Navigate to frontend
cd frontend

# Start development server
npm run dev

# The server will start on http://localhost:3000
```

### Application Features to Test

1. **Landing Page** - http://localhost:3000

   - View features, testimonials, pricing

2. **Registration** - http://localhost:3000/register

   - Create a new account
   - Test form validation

3. **Login** - http://localhost:3000/login

   - Login with created account
   - Test error messages

4. **AI Chat** - http://localhost:3000/ai_model
   - After login, you'll be redirected here
   - Ask AI questions about trends
   - Test conversation history

### Useful Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Database commands
npm run db:generate  # Generate migrations
npm run db:push      # Push schema changes
npm run db:studio    # Open database GUI
```

### Docker Commands

```bash
# Start all services
docker-compose up -d

# Start specific service
docker-compose up -d postgres
docker-compose up -d frontend

# View logs
docker-compose logs -f
docker-compose logs -f frontend

# Stop all services
docker-compose down

# Rebuild and restart
docker-compose up -d --build

# View running containers
docker ps

# Access container shell
docker exec -it ai_frontend sh
docker exec -it ai_postgres bash

# Remove all containers and volumes
docker-compose down -v
```

---

## 🔧 Troubleshooting

### Common Issues and Solutions

#### 1. Port Already in Use

**Error:** `Port 3000 is already in use`

**Solution:**

```bash
# Find process using port 3000
lsof -i :3000

# Kill the process
kill -9 <PID>

# OR use a different port
PORT=3001 npm run dev
```

#### 2. Database Connection Failed

**Error:** `Connection refused` or `Can't reach database`

**Solutions:**

```bash
# Check if PostgreSQL is running
docker ps | grep postgres

# If not running, start it
docker-compose up -d postgres

# Wait for it to be healthy
docker-compose ps postgres

# Check logs
docker-compose logs postgres

# Verify DATABASE_URL is correct
cat frontend/.env.local | grep DATABASE_URL
```

#### 3. OpenAI API Key Invalid

**Error:** `Invalid API key` or `401 Unauthorized`

**Solutions:**

```bash
# Verify your API key
echo $OPENAI_API_KEY

# Check if key is set in .env.local
cat frontend/.env.local | grep OPENAI_API_KEY

# Ensure key starts with sk-proj- or sk-
# Get a new key from: https://platform.openai.com/api-keys

# Restart the server after updating
```

#### 4. Module Not Found Errors

**Error:** `Cannot find module 'xyz'`

**Solution:**

```bash
cd frontend

# Delete node_modules and lockfile
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install

# Clear Next.js cache
rm -rf .next

# Restart server
npm run dev
```

#### 5. Database Schema Issues

**Error:** `Table doesn't exist` or `Column not found`

**Solution:**

```bash
cd frontend

# Reset database schema
npm run db:push

# If that doesn't work, recreate database
docker-compose down -v
docker-compose up -d postgres

# Wait for PostgreSQL to start, then
npm run db:push
```

#### 6. Docker Issues

**Error:** `Docker daemon not running`

**Solution:**

- Start Docker Desktop application
- Wait for Docker to fully start
- Check Docker status: `docker ps`

**Error:** `Port already allocated`

**Solution:**

```bash
# Stop all Docker containers
docker-compose down

# Find conflicting container
docker ps -a

# Remove conflicting containers
docker rm -f <container-id>

# Restart services
docker-compose up -d
```

---

## 📊 Verifying Installation

### Health Checks

1. **PostgreSQL**

   ```bash
   docker exec -it ai_postgres pg_isready -U postgres
   # Should output: /var/run/postgresql:5432 - accepting connections
   ```

2. **Frontend Server**

   ```bash
   curl http://localhost:3000
   # Should return HTML
   ```

3. **API Routes**
   ```bash
   # Test AI chat endpoint
   curl -X POST http://localhost:3000/api/ai/chat \
     -H "Content-Type: application/json" \
     -d '{"message":"Hello"}'
   ```

### Test User Flow

1. Open http://localhost:3000
2. Click "Sign Up" or navigate to `/register`
3. Register with:
   - Name: Test User
   - Email: test@example.com
   - Password: password123
4. Login with the same credentials
5. You should be redirected to `/ai_model`
6. Send a message to the AI
7. Verify you get a response

---

## 🎓 Next Steps

After successful setup:

1. **Explore the codebase**

   - Review `frontend/app` directory structure
   - Check out API routes in `frontend/app/api`
   - Examine database schema in `frontend/db/schema.ts`

2. **Customize the application**

   - Modify landing page in `frontend/app/page.tsx`
   - Update branding in components
   - Add new features

3. **Read deployment guide**

   - See [DEPLOYMENT.md](./DEPLOYMENT.md) for production deployment

4. **Join the community**
   - Star the repository
   - Report issues
   - Contribute improvements

---

## 📞 Getting Help

If you encounter issues:

1. Check this troubleshooting guide
2. Search existing [GitHub Issues](https://github.com/ParthGupta1304/AI-Trend-Analyser/issues)
3. Create a new issue with:
   - Error message
   - Steps to reproduce
   - System information (OS, Node version, Docker version)
   - Relevant logs

---

## ✅ Setup Checklist

Use this checklist to ensure everything is configured correctly:

- [ ] Node.js 20+ installed
- [ ] Docker & Docker Compose installed
- [ ] Repository cloned
- [ ] PostgreSQL container running
- [ ] `.env.local` created in `frontend/` directory
- [ ] OpenAI API key added to `.env.local`
- [ ] Dependencies installed (`npm install`)
- [ ] Database schema pushed (`npm run db:push`)
- [ ] Development server running (`npm run dev`)
- [ ] Can access http://localhost:3000
- [ ] Can register a new user
- [ ] Can login successfully
- [ ] Can chat with AI

---

<div align="center">

**Setup Complete! 🎉**

Ready to deploy? Check out [DEPLOYMENT.md](./DEPLOYMENT.md)

</div>
