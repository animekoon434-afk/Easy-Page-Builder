import { Navbar } from "@/components/ui";
import { Hero, TechStack, Features, Pricing, Testimonials, Contact, CTA, Footer } from "@/components/landing";

// Enhanced SEO Metadata
export const metadata = {
  title: "Easy Page Builder - No-Code Website Builder | Build Websites Your Way",
  description: "Create stunning websites with Code, Drag & Drop, or AI. Choose your tech stack, generate folder structures, and deploy instantly. Start your 30-day free trial today.",
  keywords: ["website builder", "no-code", "drag and drop", "AI website builder", "React", "Next.js", "web development", "SaaS"],
  authors: [{ name: "Easy Page Builder Team" }],
  creator: "Easy Page Builder",
  publisher: "Easy Page Builder",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://easy-page-builder-seven.vercel.app",
    siteName: "Easy Page Builder",
    title: "Easy Page Builder - Build Websites Your Way",
    description: "Create stunning websites with Code, Drag & Drop, or AI. Fully editable and exportable.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Easy Page Builder - No-Code Website Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Easy Page Builder - Build Websites Your Way",
    description: "Create stunning websites with Code, Drag & Drop, or AI. Start free today.",
    images: ["/assets/og-image.png"],
    creator: "@easypagebuilder",
  },
  alternates: {
    canonical: "https://easy-page-builder-seven.vercel.app",
  },
};
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background Glow - from pexel-theme */}
      <div className="absolute top-40 left-1/4 w-72 h-72 bg-pink-600 blur-[300px] z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TechStack />
        <Features />
        <Pricing />
        <Testimonials />
        <Contact />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}

