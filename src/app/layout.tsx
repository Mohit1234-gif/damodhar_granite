import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Damodhar granite | Premium Granite Supplier",
  description: "Exquisite granite slabs from Bagalkot, Karnataka. High-end natural stone for premium interior design.",
  keywords: ["granite supplier", "Bagalkot granite", "premium natural stone", "interior design Bangalore"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-background text-foreground font-sans antialiased selection:bg-emerald-accent/30 selection:text-emerald-light">
        <Navbar />
        <main className="relative">{children}</main>
        
        {/* Simple Footer */}
        <footer className="py-12 px-6 border-t border-white/5 bg-[#050505] text-center">
          <p className="text-white/30 text-xs tracking-[0.3em] uppercase">
            © {new Date().getFullYear()} Damodhar granite • Bagalkot, Karnataka
          </p>
        </footer>
      </body>
    </html>
  );
}
