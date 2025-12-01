# Dev Dockerfile for Next.js frontend
FROM node:20-alpine

WORKDIR /app

# Install dependencies for better caching
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

EXPOSE 3000

# Use development server with hot reload
CMD ["npm", "run", "dev"]
