# 🚀 Easy Page Builder - No-Code Website Builder Platform

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Prisma](https://img.shields.io/badge/Prisma-5.22-2D3748?style=for-the-badge&logo=prisma)
![Status](https://img.shields.io/badge/Status-In%20Development-yellow?style=for-the-badge)

**A modern SaaS Website Builder Platform for creating professional websites without writing code.**

[Getting Started](#-quick-start) • [Features](#-features) • [Tech Stack](#-tech-stack) • [Roadmap](#-roadmap)

</div>

---

## 📋 Project Overview

Easy Page Builder is a no-code website building platform that allows users to create professional websites by selecting their preferred tech stack and customizing pre-built templates. Built with Next.js 16 (App Router), Clerk Authentication, Prisma ORM, and Supabase PostgreSQL.

---

## 🏗️ Phase 1: Foundation (✅ Completed)

Phase 1 focused on establishing the core infrastructure and landing experience for the platform.

### ✅ Completed Features

| Feature | Description | Status |
|---------|-------------|--------|
| **Landing Page** | Premium dark-themed landing page with modern aesthetics | ✅ Done |
| **Hero Section** | Eye-catching hero with gradient text and animations | ✅ Done |
| **Tech Stack Display** | Showcase of supported technologies with marquee | ✅ Done |
| **Features Section** | Highlight platform capabilities with animated cards | ✅ Done |
| **Pricing Section** | Tiered pricing display (Free, Pro, Enterprise) | ✅ Done |
| **Testimonials** | Customer testimonials with avatars and ratings | ✅ Done |
| **Contact Form** | User inquiry form with validation | ✅ Done |
| **CTA Section** | Call-to-action with compelling copy | ✅ Done |
| **Footer** | Comprehensive footer with links and social icons | ✅ Done |
| **Authentication** | Clerk integration (Email + Google OAuth) | ✅ Done |
| **Protected Routes** | Route protection for `/create` and `/structure` | ✅ Done |
| **Tech Stack Selection** | Multi-step tech stack picker wizard | ✅ Done |
| **Folder Structure** | Dynamic project structure visualization | ✅ Done |
| **Database Integration** | Prisma + Supabase PostgreSQL setup | ✅ Done |
| **Project Saving** | Save user projects to database | ✅ Done |
| **Smooth Scrolling** | Lenis smooth scroll implementation | ✅ Done |
| **Animations** | Framer Motion animations throughout | ✅ Done |
| **Centralized Data** | Data folder for all static content | ✅ Done |

### 📁 Phase 1 Project Structure

```
web-builder/
├── app/
│   ├── api/              # API routes
│   ├── create/           # Tech stack selection page
│   ├── dashboard/        # User dashboard
│   ├── sign-in/          # Clerk sign-in page
│   ├── sign-up/          # Clerk sign-up page
│   ├── structure/        # Project structure visualization
│   ├── globals.css       # Global styles
│   ├── layout.js         # Root layout with providers
│   └── page.js           # Landing page
├── components/
│   ├── landing/          # Landing page components
│   │   ├── Hero.js
│   │   ├── TechStack.js
│   │   ├── Features.js
│   │   ├── Pricing.js
│   │   ├── Testimonials.js
│   │   ├── Contact.js
│   │   ├── CTA.js
│   │   └── Footer.js
│   ├── stack/            # Tech stack selection components
│   ├── structure/        # Folder structure components
│   └── ui/               # Reusable UI components
├── data/                 # Centralized static data
│   ├── features.js
│   ├── navlinks.js
│   ├── pricing.js
│   ├── techOptions.js
│   ├── techstack.js
│   └── testimonials.js
├── lib/                  # Utility libraries
│   └── prisma.js         # Prisma client singleton
├── prisma/
│   └── schema.prisma     # Database schema
├── public/               # Static assets
├── store/                # Zustand state management
└── middleware.js         # Clerk auth middleware
```

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | JavaScript (ES6+) |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **State Management** | Zustand |
| **Authentication** | Clerk |
| **Database** | PostgreSQL (Supabase) |
| **ORM** | Prisma |
| **Smooth Scroll** | Lenis |

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or pnpm
- Supabase account (for PostgreSQL database)
- Clerk account (for authentication)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd web-builder

# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Push database schema
npx prisma db push

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Environment Variables

### `.env.local` (Local Development)

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Clerk Routes
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/create
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/create

# Database URL (Supabase PostgreSQL)
# IMPORTANT: URL-encode special characters in password (* → %2A, ! → %21, @ → %40)
DATABASE_URL="postgresql://user:password@host:6543/postgres?pgbouncer=true"
```

> [!TIP]
> **Production (Vercel):** Add the same environment variables in your Vercel Dashboard → Project Settings → Environment Variables. No `.env` file needed in production.

---

## 🗺️ Roadmap

### Phase 2: Visual Editor (🚧 Upcoming)
- [ ] Drag-and-drop page builder
- [ ] Component library (buttons, forms, cards, etc.)
- [ ] Real-time preview
- [ ] Responsive design tools
- [ ] Custom styling options

### Phase 3: Templates & Themes (📋 Planned)
- [ ] Pre-built website templates
- [ ] Theme customization
- [ ] Color palette picker
- [ ] Font selection

### Phase 4: Export & Deploy (📋 Planned)
- [ ] One-click deployment
- [ ] Code export functionality
- [ ] Custom domain support
- [ ] SEO optimization tools

### Phase 5: Collaboration (📋 Planned)
- [ ] Team workspaces
- [ ] Real-time collaboration
- [ ] Version history
- [ ] Comments and annotations

---

## 🐛 Troubleshooting

### Database Connection Issues

If `npx prisma db push` hangs:

1. Check your Supabase project is active
2. Verify the connection string is correct
3. URL-encode special characters in the password
4. Try using port `5432` instead of `6543` for direct connection

### Hydration Warnings

The `cz-shortcut-listen` hydration warning is caused by browser extensions (ColorZilla, etc.) and can be safely ignored.

---

## 📄 Database Schema

```prisma
model User {
  id        String    @id
  email     String    @unique
  projects  Project[]
  createdAt DateTime  @default(now())
}

model Project {
  id        String   @id @default(cuid())
  userId    String
  name      String
  slug      String
  frontend  String   // React, Next.js, Vue, etc.
  styling   String   // Tailwind, CSS, Styled-Components
  language  String   // JavaScript, TypeScript
  backend   String   // Node.js, Python, etc.
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  user User @relation(fields: [userId], references: [id])

  @@unique([userId, slug])
  @@index([userId])
}
```

---

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📜 License

This project is private and proprietary.

---

<div align="center">

**Built with ❤️ using Next.js, Clerk, and Supabase**

</div>
