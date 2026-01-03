import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import "./globals.css";
import LenisScroll from "@/components/LenisScroll";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Easy Page Builder - Build Websites Your Way",
  description: "Create stunning websites with Code, Drag & Drop, or AI. Fully editable and exportable.",
  keywords: ["website builder", "web development", "nextjs", "react", "ai"],
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#db2777",
          colorBackground: "#000000",
          colorInputBackground: "rgba(255, 255, 255, 0.05)",
          colorInputText: "#ffffff",
        },
        elements: {
          formButtonPrimary:
            "bg-pink-600 hover:bg-pink-700",
          card: "bg-slate-900/95 backdrop-blur-xl border border-white/10",
          headerTitle: "text-white",
          headerSubtitle: "text-gray-400",
          socialButtonsBlockButton:
            "bg-white/5 border-white/10 hover:bg-white/10",
          formFieldLabel: "text-gray-300",
          formFieldInput:
            "bg-white/5 border-white/10 text-white",
          footerActionLink: "text-pink-400 hover:text-pink-300",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="preload" href="/assets/background-splash.svg" as="image" />
        </head>
        <body
          className={`${poppins.variable} antialiased bg-black min-h-screen`}
          suppressHydrationWarning
        >
          <LenisScroll />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}


