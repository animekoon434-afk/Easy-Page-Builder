import { Navbar } from "@/components/ui";
import { Hero, TechStack, Features, Pricing, Testimonials, Contact, CTA, Footer } from "@/components/landing";

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

