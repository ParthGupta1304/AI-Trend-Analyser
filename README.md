# 🚀 SentiMax - AI Trend Analyser

<div align="center">

![SentiMax Logo](https://img.shields.io/badge/SentiMax-AI%20Powered-emerald?style=for-the-badge)
[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o--mini-412991?style=for-the-badge&logo=openai)](https://openai.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-336791?style=for-the-badge&logo=postgresql)](https://www.postgresql.org/)

**An intelligent AI-powered platform for sentiment analysis and trend prediction**

[Features](#-features) • [Quick Start](#-quick-start) • [Documentation](#-documentation) • [Tech Stack](#-tech-stack) • [Contributing](#-contributing)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Documentation](#-documentation)
- [API Documentation](#-api-documentation)
- [Environment Variables](#-environment-variables)
- [Development](#-development)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

**SentiMax** is a modern web application that leverages artificial intelligence to analyze market trends, social media sentiment, and provide data-driven insights. Built with Next.js 16, it offers a seamless user experience with real-time AI chat capabilities powered by OpenAI's GPT-4o-mini model.

### Why SentiMax?

- 🤖 **AI-Powered Analysis**: Real-time sentiment analysis using state-of-the-art language models
- 💡 **Intelligent Insights**: Get data-driven predictions and trend analysis
- 🔒 **Secure Authentication**: Industry-standard bcrypt password hashing
- ⚡ **Lightning Fast**: Built on Next.js 16 with Turbopack for optimal performance
- 📱 **Responsive Design**: Beautiful UI that works on all devices
- 🎨 **Modern Stack**: TypeScript, React 19, Tailwind CSS 4, Framer Motion

---

## ✨ Features

### 🔐 Authentication System

- **User Registration**: Secure account creation with email validation
- **User Login**: Protected routes with session management
- **Password Security**: Bcrypt hashing (never stores plain passwords)
- **Form Validation**: Client and server-side validation

### 💬 AI Chat Interface

- **OpenAI Integration**: Powered by GPT-4o-mini for cost-effective AI responses
- **Conversation History**: Maintains context across messages
- **Real-time Responses**: Streaming AI responses with loading states
- **Error Handling**: Comprehensive error messages and retry logic
- **Beautiful UI**: Modern chat interface with smooth animations

### 📊 Sentiment Analysis (Coming Soon)

- Market trend analysis
- Social media sentiment tracking
- Data visualization dashboards
- Predictive analytics

### 🎨 User Interface

- **Landing Page**: Professional marketing page with features showcase
- **Responsive Design**: Mobile-first approach with Tailwind CSS 4
- **Smooth Animations**: Framer Motion for delightful interactions
- **Dark/Light Mode**: (Coming soon)

---

## 🛠 Tech Stack

### Frontend

- **Framework**: [Next.js 16.0](https://nextjs.org/) with App Router
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/)
- **UI Components**: Custom components with modern design

### Backend

- **API Routes**: Next.js API Routes (serverless)
- **Database**: [PostgreSQL 15](https://www.postgresql.org/)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication**: bcrypt password hashing

### AI & ML

- **AI Provider**: [OpenAI](https://openai.com/)
- **Model**: GPT-4o-mini (cost-effective, fast)
- **Integration**: Official OpenAI Node.js SDK

### DevOps

- **Containerization**: Docker & Docker Compose
- **Database Management**: Drizzle Kit for migrations
- **Version Control**: Git & GitHub
- **Deployment**: Vercel (recommended)

---

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 20+ ([Download](https://nodejs.org/))
- **Docker** & Docker Compose ([Download](https://www.docker.com/))
- **Git** ([Download](https://git-scm.com/))
- **OpenAI API Key** ([Get one](https://platform.openai.com/api-keys))

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ParthGupta1304/AI-Trend-Analyser.git
   cd AI-Trend-Analyser
   ```

2. **Set up environment variables**

   ```bash
   # Copy example environment file
   cp .env.example .env

   # Edit .env and add your OpenAI API key
   # OPENAI_API_KEY=sk-your-key-here
   ```

3. **Start the database**

   ```bash
   docker-compose up -d postgres
   ```

4. **Install dependencies and run the app**

   ```bash
   cd frontend
   npm install
   npm run db:push  # Set up database schema
   npm run dev      # Start development server
   ```

5. **Open your browser**
   ```
   Navigate to http://localhost:3000
   ```

### First Steps

1. **Register an account** at `/register`
2. **Login** at `/login`
3. **Start chatting** with AI at `/ai_model`

---

## 📁 Project Structure

```
AI-Trend-Analyser/
├── frontend/                    # Next.js application
│   ├── app/                     # App router pages
│   │   ├── api/                 # API routes
│   │   │   ├── ai/
│   │   │   │   └── chat/        # AI chat endpoint
│   │   │   └── users/
│   │   │       ├── login/       # Login endpoint
│   │   │       └── register/    # Registration endpoint
│   │   ├── components/          # React components
│   │   │   ├── navbar.tsx
│   │   │   ├── hero.tsx
│   │   │   ├── features.tsx
│   │   │   └── ...
│   │   ├── login/               # Login page
│   │   ├── register/            # Registration page
│   │   ├── ai_model/            # AI chat interface
│   │   ├── page.tsx             # Landing page
│   │   └── layout.tsx           # Root layout
│   ├── db/
│   │   └── schema.ts            # Database schema
│   ├── public/                  # Static assets
│   ├── package.json
│   └── next.config.ts
├── worker/                      # Python worker (optional)
│   ├── app/
│   │   └── main.py
│   └── requirements.txt
├── docker-compose.yml           # Docker services config
├── .env.example                 # Environment variables template
├── SETUP.md                     # Detailed setup guide
├── DEPLOYMENT.md                # Deployment guide
└── README.md                    # This file
```

---

## 📚 Documentation

- **[Setup Guide](./SETUP.md)** - Detailed installation and configuration
- **[Deployment Guide](./DEPLOYMENT.md)** - Deploy to production (Vercel, Railway, etc.)
- **[API Documentation](#-api-documentation)** - API endpoints and usage

---

## 🔌 API Documentation

### Authentication Endpoints

#### Register User

```http
POST /api/users/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}
```

**Response:**

```json
{
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "user_name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### Login User

```http
POST /api/users/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "message": "Login successful",
  "user": {
    "id": 1,
    "user_name": "John Doe",
    "email": "john@example.com"
  }
}
```

### AI Chat Endpoint

#### Send Message

```http
POST /api/ai/chat
Content-Type: application/json

{
  "message": "Analyze the current crypto market trends",
  "conversationHistory": [
    {
      "role": "user",
      "content": "Hello"
    },
    {
      "role": "assistant",
      "content": "Hi! How can I help you today?"
    }
  ]
}
```

**Response:**

```json
{
  "response": "Based on current data...",
  "usage": {
    "prompt_tokens": 50,
    "completion_tokens": 100,
    "total_tokens": 150
  }
}
```

---

## 🔑 Environment Variables

Create a `.env.local` file in the `frontend` directory:

```env
# Database (Required)
DATABASE_URL=postgres://postgres:postgres@localhost:5432/ai_market

# OpenAI API (Required)
OPENAI_API_KEY=sk-proj-your-key-here

# Application
NODE_ENV=development
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Getting API Keys

1. **OpenAI API Key**

   - Visit [OpenAI Platform](https://platform.openai.com/api-keys)
   - Create a new API key
   - Add credits to your account

2. **Database URL** (Production)
   - Use [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres) (free tier)
   - Or [Neon](https://neon.tech) (free tier)
   - Or [Supabase](https://supabase.com) (free tier)

---

## 💻 Development

### Running Locally

```bash
# Start PostgreSQL
docker-compose up -d postgres

# Install dependencies
cd frontend
npm install

# Run database migrations
npm run db:push

# Start development server
npm run dev
```

### Useful Commands

```bash
# Database Management
npm run db:generate     # Generate migrations
npm run db:push         # Push schema to database
npm run db:studio       # Open Drizzle Studio (GUI)

# Docker Commands
docker-compose up -d              # Start all services
docker-compose down               # Stop all services
docker-compose logs -f frontend   # View logs

# Code Quality
npm run lint            # Run ESLint
npm run build           # Build for production
```

### Adding New Features

1. Create a new branch

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes

3. Test thoroughly

4. Commit and push

   ```bash
   git add .
   git commit -m "Add: your feature description"
   git push origin feature/your-feature-name
   ```

5. Create a Pull Request

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your repository
   - Set root directory to `frontend`
   - Add environment variables

3. **Deploy!**
   - Click "Deploy"
   - Your app will be live in ~2 minutes

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Use TypeScript for type safety
- Follow ESLint rules
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [OpenAI](https://openai.com/) - AI capabilities
- [Vercel](https://vercel.com/) - Hosting platform
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations

---

## 📧 Contact

**Parth Gupta** - [@ParthGupta1304](https://github.com/ParthGupta1304)

Project Link: [https://github.com/ParthGupta1304/AI-Trend-Analyser](https://github.com/ParthGupta1304/AI-Trend-Analyser)

---

<div align="center">

**Built with ❤️ using Next.js and OpenAI**

⭐ Star this repo if you find it helpful!

</div>
