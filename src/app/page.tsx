"use client";

import { motion, useScroll, useTransform, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, ChevronRight, MapPin, Sparkles, MoveUpRight, ArrowUp, Phone, Send, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const varieties = [
  { name: "Ruby Red", image: "/granite-ruby-red.jpg", finish: "Polished Finish" },
  { name: "Midnight Black", image: "/granite-midnight-black.jpg", finish: "Lapatro Finish" },
  { name: "Steel Grey", image: "/cherry-grey-new.jpg", finish: "Leathered Finish" },
  { name: "Ivory Brown", image: "/granite-red-new.jpg", finish: "Polished Finish" }, // Placeholder updated to Red Granite
  { name: "Mudgal Grey", image: "/granite-mudgalgrey-new.jpg", finish: "Polished Finish" },
  { name: "Paradiso", image: "/granite-paradiso-new.jpg", finish: "Polished Finish" },
];

function SectionHeader({ title, subtitle, description }: { title: string; subtitle: string; description: string }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
      <div>
        <p className="text-xs tracking-[0.4em] uppercase text-emerald-accent font-bold mb-4">{subtitle}</p>
        <h2 className="text-[clamp(2.5rem,8vw,5rem)] font-serif text-white/90 tracking-tighter leading-none">{title}</h2>
      </div>
      <p className="max-w-xs text-white/40 text-sm font-sans tracking-wide leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function CollectionSection() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="signature-collection" className="py-32 bg-[#050505] px-6 lg:px-12 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Signature Collection"
          subtitle="Our Masterpieces"
          description="A curation of the most sought-after granite varieties, processed with precision for the discerning aesthetic."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {varieties.map((stone, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -8 }}
              className="group relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/5 bg-[#111]"
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src={stone.image}
                  alt={stone.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_50px_rgba(16,185,129,0.2)] pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-nav border border-white/10 flex items-center justify-between z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div>
                  <h3 className="text-xl md:text-2xl font-serif text-white/90">{stone.name}</h3>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-emerald-accent font-bold mt-1 opacity-70">{stone.finish}</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/40 group-hover:text-emerald-accent group-hover:border-emerald-accent/40 transition-all duration-300">
                  <MoveUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function HeritageAboutSection() {
  return (
    <section id="about" className="py-32 bg-[#050505] px-6 lg:px-12 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left: Image with Clip-path reveal */}
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          whileInView={{ clipPath: "inset(0 0 0% 0)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
          className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10"
        >
          <Image
            src="/heritage-stone.jpg"
            alt="Granite Quarry in Bagalkot"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-emerald-accent/5 mix-blend-overlay" />
        </motion.div>

        {/* Right: Narrative Text */}
        <div className="flex flex-col gap-8">
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xs tracking-[0.4em] uppercase text-emerald-accent font-bold"
          >
            The Heritage
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-serif text-white/90 leading-[1.1] tracking-tight"
          >
            Legacy in Every Layer.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-xl text-white/50 font-sans font-light leading-relaxed max-w-lg italic"
          >
            Based in Bagalkot, we bridge the gap between Karnataka&apos;s geological heritage and the modern Bangalore home.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="h-[1px] w-32 bg-emerald-accent/30 origin-left mt-4"
          />
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({ name: "", project: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.project || !formData.phone) return;

    const message = `🪨 New Inquiry - Damodhar granite\n👤 Name: ${formData.name}\n🏗️ Project: ${formData.project}\n📞 Phone: ${formData.phone}\n\nSent from damodhargranite.in`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919448274047?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
    setFormData({ name: "", project: "", phone: "" });

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-40 bg-[#050505] px-6 lg:px-12 relative overflow-hidden scroll-mt-24">
      {/* Background Decorative Gradients */}
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-emerald-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
        {/* Contact Info */}
        <div className="lg:col-span-5 flex flex-col gap-12">
          <div>
            <h2 className="text-5xl md:text-7xl font-serif text-white/90 tracking-tighter mb-6 underline decoration-emerald-accent/20 underline-offset-8">Connection</h2>
            <p className="text-white/40 text-lg max-w-sm leading-relaxed">
              Experience the pinnacle of natural stone craftsmanship.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-emerald-accent">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-white/30 mb-1">Our Location</p>
                <p className="text-white/80 font-serif text-lg leading-snug">Hanamsagar Road, Ilkal - 587125<br />Bagalkot, Karnataka</p>
              </div>
            </div>
          </div>

          {/* WhatsApp Button */}
          <Link
            href="https://wa.me/919448274047?text=I'm%20interested%20in%20Damodhar%20granite"
            target="_blank"
            className="inline-flex items-center gap-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-accent px-10 py-5 rounded-full font-bold tracking-widest uppercase text-xs hover:bg-emerald-500/20 transition-all duration-500 self-start group"
          >
            <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Consult with our Stone Expert
          </Link>
        </div>

        {/* Inquiry Form */}
        <div className="lg:col-span-1" /> {/* Spacer */}
        <div className="lg:col-span-6 bg-neutral-900/40 backdrop-blur-2xl p-10 md:p-16 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden">
          <AnimatePresence>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 backdrop-blur-3xl text-center px-10"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mb-6">
                  <Sparkles className="w-10 h-10 text-emerald-accent" />
                </div>
                <h3 className="text-3xl font-serif text-white/90 mb-4">Inquiry Received</h3>
                <p className="text-white/60 leading-relaxed font-sans max-w-xs">Your inquiry has been sent via WhatsApp. We will contact you shortly.</p>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            <div className="flex flex-col gap-2 group">
              <label className="text-[10px] tracking-[0.4em] uppercase text-white/30 font-bold ml-1 transition-colors group-focus-within:text-emerald-accent">Your Name</label>
              <input
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-transparent border-b border-white/10 py-4 outline-none text-white focus:border-emerald-accent transition-colors font-serif text-xl"
                placeholder="Full Name"
              />
            </div>
            <div className="flex flex-col gap-2 group">
              <label className="text-[10px] tracking-[0.4em] uppercase text-white/30 font-bold ml-1 transition-colors group-focus-within:text-emerald-accent">Project Type</label>
              <input
                required
                type="text"
                value={formData.project}
                onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                className="bg-transparent border-b border-white/10 py-4 outline-none text-white focus:border-emerald-accent transition-colors font-serif text-xl"
                placeholder="e.g. Residential Villa"
              />
            </div>
            <div className="flex flex-col gap-2 group">
              <label className="text-[10px] tracking-[0.4em] uppercase text-white/30 font-bold ml-1 transition-colors group-focus-within:text-emerald-accent">Direct Phone</label>
              <input
                required
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-transparent border-b border-white/10 py-4 outline-none text-white focus:border-emerald-accent transition-colors font-serif text-xl"
                placeholder="+91"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-between w-full bg-white text-black font-bold py-6 px-10 rounded-2xl hover:bg-emerald-accent transition-all duration-500 group overflow-hidden"
            >
              <span className="tracking-widest uppercase text-xs">Send Inquiry</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col bg-[#050505]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 px-6 lg:px-12 overflow-hidden">
        {/* Anti-Gravity Hero Image Component */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: 0.8,
              scale: 1,
              y: [0, -15, 0]
            }}
            transition={{
              opacity: { duration: 2 },
              scale: { duration: 2 },
              y: {
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="relative w-full h-full"
          >
            <Image
              src="/hero-granite.jpg"
              alt="Luxury Granite Kitchen"
              fill
              className="object-cover"
              priority
            />
            {/* Softened vignettes for better image visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/60 via-[#050505]/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 via-transparent to-transparent" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <div className="flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-emerald-accent" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/50 font-sans">
                Karnataka&apos;s Finest Stone
              </span>
            </div>

            <h1 className="text-[clamp(3.5rem,15vw,9rem)] leading-[0.85] tracking-tighter text-white/90 mb-10">
              Earthly <br />
              <span className="text-emerald-accent italic font-serif opacity-80">
                Artistry
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-lg mb-12 font-sans font-light leading-relaxed">
              Exquisite granite slabs hand-picked from the heart of Bagalkot.
              Designed for the sophisticated visions of Bangalore’s elite
              interior designers.
            </p>

            <div className="flex flex-wrap gap-8 items-center">
              <Link
                href="#signature-collection"
                className="group flex items-center gap-4 bg-white/90 text-black px-10 py-5 rounded-full font-sans font-bold text-sm tracking-widest uppercase hover:bg-emerald-accent hover:text-black transition-all duration-500 shadow-2xl shadow-emerald-accent/0 hover:shadow-emerald-accent/20"
              >
                Experience Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>

              <Link
                href="#contact"
                className="group flex items-center gap-2 text-white/40 hover:text-white/90 transition-colors duration-300 py-3"
              >
                <MapPin className="w-4 h-4 text-emerald-accent/60" />
                <span className="text-xs tracking-widest uppercase font-semibold">Bagalkot, KA</span>
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </div>
          </motion.div>

          {/* Floating Focal Point (Decorative) - Removed text as requested */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="hidden lg:flex justify-end"
          >
            <div className="relative w-80 h-80">
              <motion.div
                animate={{
                  rotate: 360,
                  y: [0, 20, 0]
                }}
                transition={{
                  rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute inset-0 border border-emerald-accent/5 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: -360,
                  y: [0, -10, 0]
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute inset-4 border border-white/5 rounded-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
        >
          <span className="text-[8px] tracking-[0.4em] uppercase text-white font-bold">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-emerald-accent to-transparent" />
        </motion.div>
      </section>

      {/* Stats Section with Updated Contrast */}
      <section className="py-24 bg-[#050505] border-y border-white/5 relative z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Elite Quarry Partners", value: "10+" },
            { label: "Projects Delivered", value: "1000+" },
            { label: "Legacy & Heritage", value: "20Y" },
            { label: "Retail Showrooms", value: "2" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="text-4xl md:text-6xl font-serif text-white/90 tracking-tighter">{stat.value}</span>
              <span className="text-[10px] tracking-[0.4em] uppercase text-emerald-accent/60 font-bold">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <CollectionSection />

      <HeritageAboutSection />

      <ContactSection />

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 z-50 w-14 h-14 bg-emerald-accent text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
