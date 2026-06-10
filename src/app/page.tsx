"use client";

import { useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

const PHONE = "(316) 402-2339";
const PHONE_HREF = "tel:+13164022339";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who removes hot tubs in Wichita, Kansas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wichita Hot Tub Removal is a licensed and insured local service provider specializing in hot tub, spa, and jacuzzi removal throughout Wichita and Sedgwick County. We serve Derby, Andover, Haysville, Goddard, Maize, and all surrounding communities.",
      },
    },
    {
      "@type": "Question",
      "name": "Can you remove a hot tub from a deck in Wichita?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we remove hot tubs from decks, patios, rooftops, and tight backyards throughout the Wichita metro area. We use plywood pathways to protect your deck during removal. If partial deck disassembly is required, we handle that too.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the fastest way to get a hot tub removed in Wichita?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The fastest way is to call Wichita Hot Tub Removal at (316) 402-2339 before noon for same-day service. Most removals take 1–3 hours from arrival to cleanup. We handle electrical disconnection, dismantling, hauling, and disposal — all in one visit.",
      },
    },
    {
      "@type": "Question",
      "name": "How much does hot tub removal cost in Wichita?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Small hot tubs (2–4 person) typically cost $250–$400. Medium hot tubs (5–6 person) run $350–$550. Large hot tubs (7–8+ person) are $500–$800. Built-in units and deck removal may add $100–$400. We provide free, no-obligation estimates.",
      },
    },
    {
      "@type": "Question",
      "name": "Does the City of Wichita pick up old hot tubs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, the City of Wichita does not include hot tubs in regular trash collection. You would need to schedule a special bulky item pickup, and even then they may not accept hot tubs due to size and weight. Professional hot tub removal is the fastest and most reliable option.",
      },
    },
  ],
};

const services = [
  { title: "Hot Tub Removal", desc: "Full removal of any size hot tub from your deck, patio, or backyard. We disconnect, dismantle, and haul away everything.", image: "/images/service-hot-tub.svg" },
  { title: "Spa Removal", desc: "Above-ground spa and portable spa removal. We handle the plumbing disconnect and proper disposal.", image: "/images/service-spa.svg" },
  { title: "Jacuzzi Removal", desc: "Jacuzzi brand and built-in jacuzzi tub removal. Careful dismantling to protect your property.", image: "/images/service-jacuzzi.svg" },
  { title: "Same-Day Service", desc: "Call before noon for same-day hot tub removal throughout Wichita. Most jobs take 1–3 hours.", image: "/images/hero-hot-tub-removal.svg" },
  { title: "Eco-Friendly Disposal", desc: "We recycle metal, motors, and pumps whenever possible. The rest is disposed of responsibly at licensed facilities.", image: "/images/service-hot-tub.svg" },
  { title: "Deck & Patio Repair", desc: "If your hot tub is built into a deck, we can handle partial disassembly and leave the area clean.", image: "/images/service-spa.svg" },
];

const galleryImages = [
  { src: "/images/hot-tub-removal-service.jpg", alt: "Professional hot tub removal crew dismantling an above ground spa in Wichita" },
  { src: "/images/hot-tub-haul-away.jpg", alt: "Hot tub hauling and disposal service removing large spa unit" },
  { src: "/images/hot-tub-unit.webp", alt: "Above ground jacuzzi and hot tub unit for removal and disposal" },
];

const whyUs = [
  { num: "01", title: "Speed", desc: "Same-day service available when you call before noon. We show up on time and get the job done fast — most removals take 1–3 hours." },
  { num: "02", title: "Transparency", desc: "Clear, upfront flat-rate estimates before any work begins. No surprise charges, no hidden fees, no games." },
  { num: "03", title: "Protection", desc: "Licensed and insured for your protection. We use plywood pathways to protect your deck, patio, and lawn during removal." },
];

const testimonials = [
  { name: "Mike T.", loc: "Wichita", text: "Called in the morning and they had our old hot tub gone by 3pm. Professional crew, left the deck spotless. Highly recommend.", rating: 5 },
  { name: "Sarah L.", loc: "Derby", text: "We sold our house and needed the hot tub removed ASAP. They gave us a fair quote over the phone and showed up the next day. Stress-free experience.", rating: 5 },
  { name: "James R.", loc: "Andover", text: "Our jacuzzi was built into the deck and I thought it would be a nightmare. They handled everything including the deck repair. Great service.", rating: 5 },
];

const faq = [
  { q: "Who removes hot tubs in Wichita, Kansas?", a: "Wichita Hot Tub Removal is a licensed and insured local service provider specializing in hot tub, spa, and jacuzzi removal throughout Wichita and Sedgwick County. We serve Derby, Andover, Haysville, Goddard, Maize, and all surrounding communities." },
  { q: "Can you remove a hot tub from a deck in Wichita?", a: "Yes, we remove hot tubs from decks, patios, rooftops, and tight backyards throughout the Wichita metro area. We use plywood pathways to protect your deck during removal. If partial deck disassembly is required, we handle that too." },
  { q: "How much does hot tub removal cost in Wichita?", a: "Small hot tubs (2–4 person) typically cost $250–$400. Medium hot tubs (5–6 person) run $350–$550. Large hot tubs (7–8+ person) are $500–$800. Built-in units and deck removal may add $100–$400. We provide free, no-obligation estimates." },
  { q: "What is the fastest way to get a hot tub removed in Wichita?", a: "The fastest way is to call Wichita Hot Tub Removal at (316) 402-2339 before noon for same-day service. Most removals take 1–3 hours from arrival to cleanup. We handle electrical disconnection, dismantling, hauling, and disposal — all in one visit." },
  { q: "Does the City of Wichita pick up old hot tubs?", a: "No, the City of Wichita does not include hot tubs in regular trash collection. You would need to schedule a special bulky item pickup, and even then they may not accept hot tubs due to size and weight. Professional hot tub removal is the fastest and most reliable option." },
];

const trustBadges = [
  { text: "4.9 ★ 300+ Reviews", type: "success" },
  { text: "Licensed & Insured", type: "trust" },
  { text: "5+ Years in Wichita", type: "trust" },
  { text: "Same-Day Available", type: "trust" },
];

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SiteHeader />

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center pt-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1200&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(18,20,20,0.75)" }}></div>
        <div className="relative max-w-[1280px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center py-20 lg:py-[80px]">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h1 className="font-display text-5xl md:text-7xl md:leading-[72px] text-[#e2e2e2] uppercase leading-tight">
              Your Hot Tub Is Broken. Your Backyard Is Wasted. We Fix Both.
            </h1>
            <p className="text-lg md:text-xl text-[#c8c5cd] max-w-2xl">
              Free estimate. No obligation. Same-day hot tub removal across Wichita and Sedgwick County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a href="#quote-form" className="btn-primary">
                Get Free Estimate
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </a>
              <a href={PHONE_HREF} className="btn-outline">
                Call Now: {PHONE}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
            </div>
            <div className="flex items-center gap-4 mt-8 flex-wrap">
              {trustBadges.map((badge, i) => (
                <span key={i} className={badge.type === "success" ? "success-chip" : "trust-chip"}>
                  {badge.text}
                </span>
              ))}
            </div>
          </div>

          {/* Lead Form in Hero */}
          <div className="lg:col-span-5 mt-12 lg:mt-0" id="quote-form">
            <div className="card-dark p-8">
              <h3 className="font-display text-2xl text-[#e2e2e2] uppercase mb-6 border-b-2 inline-block" style={{ borderColor: "#e94560", paddingBottom: "8px" }}>
                Request Estimate
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES STRIP */}
      <section className="border-b border-[#929097]">
        <div className="max-w-[1280px] mx-auto px-6 py-8 flex justify-center items-center gap-6 md:gap-12 flex-wrap">
          <span className="font-bold text-sm tracking-wider text-[#c8c5cd] uppercase">
            Licensed. Insured. Trusted.
          </span>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6" id="services">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="section-heading text-center md:text-left mb-12">Our Hot Tub Removal Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="service-card">
                <img src={s.image} alt={s.title} className="w-16 h-16 mb-4 opacity-90" loading="lazy" />
                <h3 className="font-display text-xl text-[#e2e2e2] uppercase mb-3">{s.title}</h3>
                <p className="text-[#c8c5cd] text-base">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 px-6" style={{ backgroundColor: "#1a1a2e" }} id="why-us">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="section-heading text-center mb-4">Why Homeowners Trust Us</h2>
          <p className="text-[#c8c5cd] text-lg text-center mb-12 max-w-2xl mx-auto">
            We have earned the confidence of Wichita homeowners with fast, reliable, and honest hot tub removal service.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((w, i) => (
              <div key={i} className="text-center">
                <div className="text-[#e94560] font-display text-5xl mb-4">{w.num}</div>
                <h3 className="font-display text-2xl text-[#e2e2e2] uppercase mb-3">{w.title}</h3>
                <p className="text-[#c8c5cd] text-base max-w-sm mx-auto">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6" id="reviews">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="section-heading text-center md:text-left mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="text-yellow-400 text-lg mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j}>{j < t.rating ? "★" : "☆"}</span>
                  ))}
                </div>
                <p className="text-[#c8c5cd] text-base italic mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="font-bold text-[#e2e2e2]">&mdash; {t.name}</div>
                <div className="text-[#c8c5cd] text-sm">{t.loc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 px-6" style={{ backgroundColor: "#1a1a2e" }} id="gallery">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="section-heading text-center mb-4">Real Jobs. Real Results.</h2>
          <p className="text-[#c8c5cd] text-lg text-center mb-12 max-w-2xl mx-auto">
            See the kind of work we do across Wichita and Sedgwick County. From backyard hot tubs to built-in deck spas, we handle it all.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <div key={i} className="card-dark overflow-hidden group">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6" style={{ backgroundColor: "#121414" }}>
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl text-[#e2e2e2] uppercase mb-6">
            We Only Take On 15 Jobs Per Week
          </h2>
          <p className="text-[#c8c5cd] text-lg mb-8 max-w-xl mx-auto">
            Limited availability. Don't wait until your broken hot tub becomes a bigger problem.
          </p>
          <a href="#quote-form" className="btn-primary text-lg">Get Your Free Estimate</a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" id="faq">
        <div className="max-w-[1280px] mx-auto max-w-3xl">
          <h2 className="section-heading text-center mb-12">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-2">
            {faq.map((f, i) => (
              <div key={i} className={`faq-item card-dark ${activeFaq === i ? "active" : ""}`}>
                <button className="faq-btn" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                  {f.q}
                </button>
                <div className="faq-answer">
                  <p className="text-[#c8c5cd] text-base">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
