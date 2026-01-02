# WebBuilder - Website Builder Platform

A SaaS Website Builder Platform built with Next.js, Clerk Auth, and Prisma + Supabase.

## Quick Start

```bash
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Push database schema (required before first use)
npx prisma db push

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

Create a `.env` file in the root with:

```env
# Prisma Database URL (Supabase PostgreSQL)
# IMPORTANT: URL-encode special characters in password
# * → %2A, ! → %21, @ → %40, # → %23, $ → %24
DATABASE_URL="postgresql://user:password@host:6543/postgres?pgbouncer=true"
```

Create a `.env.local` file with:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Clerk Routes
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/create
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/create

# Same DATABASE_URL as .env
DATABASE_URL="postgresql://user:password@host:6543/postgres?pgbouncer=true"
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: JavaScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State**: Zustand
- **Auth**: Clerk
- **Database**: Supabase PostgreSQL + Prisma

## Features

- ✅ Landing page with premium dark theme
- ✅ Clerk authentication (Email + Google OAuth)
- ✅ Protected routes (/create, /structure)
- ✅ Tech stack selection
- ✅ Dynamic folder structure visualization
- ✅ Project saving to database

## Troubleshooting

### Database Connection Issues

If `npx prisma db push` hangs:

1. Check your Supabase project is active
2. Verify the connection string is correct
3. URL-encode special characters in the password
4. Try using port `5432` instead of `6543` for direct connection

### Hydration Warnings

The `cz-shortcut-listen` hydration warning is caused by browser extensions (ColorZilla, etc.) and can be ignored.
