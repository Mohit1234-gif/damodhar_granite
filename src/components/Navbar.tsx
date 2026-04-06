"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Landmark } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="glass-nav rounded-full px-8 py-4 flex items-center justify-between border border-white/10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Landmark className="w-8 h-8 text-emerald-accent group-hover:scale-110 transition-transform duration-300" />
            <div className="flex flex-col">
              <span className="font-serif text-xl tracking-widest uppercase text-white/90 leading-none">
                Damodhar
              </span>
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-emerald-accent/80 font-semibold italic">
                granite
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-sans text-xs tracking-widest uppercase text-white/50 hover:text-emerald-accent transition-all duration-300 hover-glow"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-emerald-accent/5 border border-emerald-accent/20 hover:bg-emerald-accent/20 text-emerald-accent px-6 py-2 rounded-full text-[10px] tracking-widest uppercase transition-all duration-500 backdrop-blur-sm"
            >
              Consult
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/60 hover:text-emerald-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 md:hidden z-40"
          >
            <div className="glass-nav rounded-3xl p-8 flex flex-col gap-6 border border-white/10 shadow-2xl">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-serif text-2xl text-white/80 hover:text-emerald-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-white/5" />
              <Link
                href="#contact"
                className="w-full bg-emerald-accent text-black font-bold py-4 rounded-xl text-center tracking-widest uppercase"
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
