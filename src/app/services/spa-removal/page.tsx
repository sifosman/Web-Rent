import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Spa Removal Wichita | Above-Ground Spa Disposal & Hauling",
  description: "Professional spa removal in Wichita, KS. We remove above-ground spas, portable spas, and outdoor spa tubs. Free estimates and same-day service available.",
  alternates: {
    canonical: "https://wichitahottubremoval.com/services/spa-removal/",
  },
};

const PHONE = "(316) 402-2339";
const PHONE_HREF = "tel:+13164022339";

export default function SpaRemovalPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative pt-32 pb-20 px-6" style={{ backgroundColor: "#1a1a2e" }}>
          <div className="max-w-[1280px] mx-auto">
            <h1 className="font-display text-4xl md:text-5xl text-[#e2e2e2] uppercase mb-4">
              Spa Removal in Wichita, KS
            </h1>
            <p className="text-lg text-[#c8c5cd] max-w-2xl">
              Professional removal of above-ground spas, portable spas, and outdoor spa tubs
              throughout Wichita and Sedgwick County. Fast, clean, and hassle-free.
            </p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-[1280px] mx-auto">
            <img
              src="/images/hot-tub-haul-away.jpg"
              alt="Hot tub hauling and disposal service removing large spa unit"
              className="w-full h-80 object-cover rounded-lg mb-12 card-dark"
              width="800"
              height="400"
            />
            <h2 className="section-heading mb-8">Types of Spas We Remove</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "Above-Ground Spas", desc: "Free-standing spa units sitting on decks, patios, or concrete pads. We disconnect plumbing and electrical, then haul everything away." },
                { title: "Portable Spas", desc: "Soft-sided, inflatable, and plug-and-play spas. Quick removal with minimal impact on your property." },
                { title: "Drop-In Spas", desc: "Spas installed into decks or custom surrounds. We remove the spa shell and can optionally remove the surrounding structure." },
                { title: "Swim Spas", desc: "Large swim spa units that combine a pool and hot tub. These require specialized equipment and expertise — we have both." },
              ].map((spa, i) => (
                <div key={i} className="service-card">
                  <h3 className="font-display text-xl text-[#e2e2e2] uppercase mb-2">{spa.title}</h3>
                  <p className="text-[#c8c5cd]">{spa.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="section-heading mb-8">Spa Removal Pricing in Wichita</h2>
            <div className="card-dark p-8 mb-12">
              <ul className="space-y-2 text-[#e2e2e2]">
                <li><strong>Small portable spa:</strong> $150 – $300</li>
                <li><strong>Medium above-ground spa:</strong> $300 – $500</li>
                <li><strong>Large spa with surround:</strong> $450 – $700</li>
                <li><strong>Swim spa:</strong> $600 – $1,000</li>
              </ul>
              <p className="text-[#c8c5cd] mt-4 text-sm">
                Prices vary based on access, stairs, and disposal requirements.
                Contact us for a free, on-site estimate in Wichita.
              </p>
            </div>

            <div className="card-dark p-8 text-center">
              <h2 className="font-display text-2xl text-[#e2e2e2] uppercase mb-4">Ready to Remove Your Spa?</h2>
              <p className="text-[#c8c5cd] mb-6">
                Free estimates for spa removal anywhere in Wichita and surrounding areas.
              </p>
              <a href={PHONE_HREF} className="btn-primary">
                Call {PHONE}
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
