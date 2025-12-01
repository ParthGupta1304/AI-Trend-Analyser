# AI Trend Analyser - Quick Start Guide

## Prerequisites

- Docker and Docker Compose installed
- Node.js 20+ (for local development)

## Setup Instructions

### 1. Environment Variables

Copy the environment file:

```bash
cp .env.example .env
```

Edit `.env` and add your API keys (especially `GEMINI_API_KEY`).

### 2. Start Services with Docker

Start PostgreSQL database:

```bash
docker-compose up -d postgres
```

Wait for PostgreSQL to be ready, then start all services:

```bash
docker-compose up -d
```

Or start services individually:

```bash
# Frontend only
docker-compose up -d frontend

# Worker only
docker-compose up -d worker
```

### 3. Setup Database Schema

From the frontend directory:

```bash
cd frontend
npm run db:push
```

### 4. Access Services

- **Frontend**: http://localhost:3000
- **Worker API**: http://localhost:8000
- **PostgreSQL**: localhost:5432

### 5. Local Development (without Docker)

If you want to run frontend locally:

```bash
# Start only PostgreSQL in Docker
docker-compose up -d postgres

# Run frontend locally
cd frontend
npm install
npm run dev
```

## Useful Commands

```bash
# View logs
docker-compose logs -f

# Stop all services
docker-compose down

# Rebuild services
docker-compose up -d --build

# Access database
docker exec -it ai_postgres psql -U postgres -d ai_market

# Open Drizzle Studio (database GUI)
cd frontend && npm run db:studio
```

## Database Management

```bash
# Generate migrations
npm run db:generate

# Apply migrations
npm run db:migrate

# Push schema directly (dev mode)
npm run db:push
```

## Troubleshooting

1. **Port conflicts**: Change ports in `docker-compose.yml`
2. **Database connection issues**: Check if PostgreSQL is running: `docker ps`
3. **Reset database**: `docker-compose down -v` (removes volumes)
