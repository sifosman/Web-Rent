import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Hot Tub Removal Wichita KS | Fast & Affordable Disposal Service",
  description: "Professional hot tub removal in Wichita, Kansas. We remove all sizes of hot tubs from decks, patios, and backyards. Free estimates, same-day service available.",
  alternates: {
    canonical: "https://wichitahottubremoval.com/services/hot-tub-removal/",
  },
};

const PHONE = "(316) 402-2339";
const PHONE_HREF = "tel:+13164022339";

export default function HotTubRemovalPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative pt-32 pb-20 px-6" style={{ backgroundColor: "#1a1a2e" }}>
          <div className="max-w-[1280px] mx-auto">
            <h1 className="font-display text-4xl md:text-5xl text-[#e2e2e2] uppercase mb-4">
              Hot Tub Removal in Wichita, KS
            </h1>
            <p className="text-lg text-[#c8c5cd] max-w-2xl">
              Fast, professional removal of any size hot tub from your Wichita property.
              We disconnect, dismantle, and haul it all away. Free estimates.
            </p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-[1280px] mx-auto">
            <img
              src="/images/hot-tub-removal-service.jpg"
              alt="Professional hot tub removal crew dismantling an above ground spa"
              className="w-full h-80 object-cover rounded-lg mb-12 card-dark"
              width="800"
              height="400"
            />
            <h2 className="section-heading mb-8">What We Remove</h2>
            <ul className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "All brands and sizes of hot tubs",
                "Wooden and acrylic shell hot tubs",
                "Hot tubs on decks, patios, and ground level",
                "Hot tubs with built-in surrounds and cabinets",
                "Inflatable and soft-sided hot tubs",
                "Non-working and damaged hot tubs",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 card-dark p-4">
                  <span className="text-[#0f9b0f] font-bold text-xl">✓</span>
                  <span className="text-[#e2e2e2]">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="section-heading mb-8">Our Removal Process</h2>
            <ol className="space-y-6 mb-12">
              {[
                { title: "1. Free On-Site Estimate", desc: "We visit your Wichita property to assess the hot tub size, location, and access. You get a flat-rate quote with no hidden fees." },
                { title: "2. Safe Disconnection", desc: "Our team safely disconnects electrical and plumbing connections. We can work with 110V or 220V setups." },
                { title: "3. Dismantle & Remove", desc: "We cut the hot tub into manageable sections using professional tools. We protect your deck, patio, and landscaping during removal." },
                { title: "4. Haul Away & Dispose", desc: "Everything is loaded onto our truck and hauled to licensed disposal facilities in Sedgwick County. We recycle metal and motors when possible." },
              ].map((step, i) => (
                <li key={i} className="card-dark p-6">
                  <h3 className="font-display text-xl text-[#e2e2e2] uppercase mb-2">{step.title}</h3>
                  <p className="text-[#c8c5cd]">{step.desc}</p>
                </li>
              ))}
            </ol>

            <h2 className="section-heading mb-8">How Much Does Hot Tub Removal Cost in Wichita?</h2>
            <div className="card-dark p-8 mb-12">
              <p className="text-[#c8c5cd] mb-4">
                Pricing depends on hot tub size, location, and accessibility. Here&apos;s a general guide:
              </p>
              <ul className="space-y-2 text-[#e2e2e2]">
                <li><strong>Small hot tubs (2–4 person):</strong> $250 – $400</li>
                <li><strong>Medium hot tubs (5–6 person):</strong> $350 – $550</li>
                <li><strong>Large hot tubs (7–8+ person):</strong> $500 – $800</li>
                <li><strong>Built-in / hardwired units:</strong> Add $100 – $200</li>
                <li><strong>Deck removal required:</strong> Add $150 – $400</li>
              </ul>
              <p className="text-[#c8c5cd] mt-4 text-sm">
                These are estimates only. Call for a free, no-obligation quote at your Wichita location.
              </p>
            </div>

            <h2 className="section-heading mb-8">Why Remove a Hot Tub?</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "It Stopped Working", desc: "Repairs can cost $500–$2,000+. If the pump, heater, or shell is damaged, removal is often the smarter financial choice." },
                { title: "Selling Your Home", desc: "An old, non-working hot tub can reduce curb appeal. Removing it makes your Wichita property more attractive to buyers." },
                { title: "Reclaiming Space", desc: "That unused hot tub takes up valuable backyard real estate. Remove it and enjoy a patio, garden, or fire pit instead." },
                { title: "High Energy Bills", desc: "Running a hot tub costs $50–$100+ per month in electricity. If you rarely use it, removal saves money long-term." },
              ].map((reason, i) => (
                <div key={i} className="service-card">
                  <h3 className="font-display text-xl text-[#e2e2e2] uppercase mb-2">{reason.title}</h3>
                  <p className="text-[#c8c5cd] text-sm">{reason.desc}</p>
                </div>
              ))}
            </div>

            <div className="card-dark p-8 text-center">
              <h2 className="font-display text-2xl md:text-3xl text-[#e2e2e2] uppercase mb-4">
                Get Your Free Hot Tub Removal Estimate
              </h2>
              <p className="text-[#c8c5cd] mb-6">
                Call today for a free, no-obligation quote. Same-day removal available in Wichita.
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
