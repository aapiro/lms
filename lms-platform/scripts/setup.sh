#!/bin/bash

echo "Setting up LMS Platform..."

# Install dependencies for the monorepo
cd /workspace/lms-platform
npm install

# Start Docker containers
echo "Starting development environment..."
cd infra
docker-compose up -d

# Wait a moment for services to start
sleep 5

# Run database migrations
echo "Running database migrations..."
cd ../web
npx prisma migrate dev

# Seed the database
echo "Seeding database with sample data..."
npx prisma db seed

echo "Setup complete! You can now run:"
echo "npm run dev - to start development server"
echo "docker-compose up -d - to start services"
