# LMS Platform

A modern Learning Management System built with React, TypeScript, and Node.js.

## Features

- User & Organization management with RBAC
- Course, module, and lesson creation with rich content support
- Assignments and quizzes with rubrics
- Gradebook system
- Forum and communication tools
- SCORM 1.2/2004 support
- xAPI integration
- LTI 1.3 compatibility

## Tech Stack

- **Frontend**: Next.js (App Router) + React 18 + TypeScript + Tailwind CSS + shadcn/ui
- **Backend**: Next.js API routes with tRPC + Zod validation
- **Database**: PostgreSQL + Prisma ORM
- **Storage**: S3-compatible (MinIO in dev)
- **Authentication**: Auth.js (NextAuth) with Email/Password and OAuth2
- **Infrastructure**: Docker Compose

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+
- Docker & Docker Compose

### Setup

```bash
# Clone the repository
git clone <repo-url>
cd lms-platform

# Install dependencies
npm install

# Start development environment
docker-compose up -d

# Run database migrations
npm run db:migrate

# Seed the database with sample data
npm run db:seed

# Start the development server
npm run dev
```

### Development Scripts

- `npm run dev` - Start development server
- `npm run test` - Run unit tests
- `npm run e2e` - Run E2E tests
- `npm run lint` - Lint code
- `npm run format` - Format code
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed database with sample data

## Project Structure

```
lms-platform/
├── web/                 # Next.js frontend application
├── packages/            # Shared packages and components
│   ├── ui/              # UI component library
│   └── core/            # Core business logic
├── infra/               # Infrastructure configurations
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a pull request

## License

This project is licensed under the MIT License.
