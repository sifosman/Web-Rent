import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Jacuzzi Removal Wichita | Jacuzzi Tub Disposal & Haul Away",
  description: "Professional jacuzzi removal in Wichita, KS. We remove built-in and freestanding jacuzzi tubs from bathrooms and outdoors. Free estimates, licensed & insured.",
  alternates: {
    canonical: "https://wichitahottubremoval.com/services/jacuzzi-removal/",
  },
};

const PHONE = "(316) 402-2339";
const PHONE_HREF = "tel:+13164022339";

export default function JacuzziRemovalPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative pt-32 pb-20 px-6" style={{ backgroundColor: "#1a1a2e" }}>
          <div className="max-w-[1280px] mx-auto">
            <h1 className="font-display text-4xl md:text-5xl text-[#e2e2e2] uppercase mb-4">
              Jacuzzi Removal in Wichita, KS
            </h1>
            <p className="text-lg text-[#c8c5cd] max-w-2xl">
              We remove all types of Jacuzzi tubs — built-in bathroom jacuzzis, outdoor jacuzzi spas,
              and freestanding jacuzzi units throughout the Wichita metro area.
            </p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-[1280px] mx-auto">
            <img
              src="/images/hot-tub-unit.webp"
              alt="Above ground jacuzzi and hot tub unit for removal and disposal"
              className="w-full h-80 object-cover rounded-lg mb-12 card-dark"
              width="800"
              height="400"
            />
            <h2 className="section-heading mb-8">Jacuzzi Tub Removal Services</h2>
            <div className="space-y-6 mb-12">
              {[
                { title: "Built-In Bathroom Jacuzzi Removal", desc: "Remodeling your bathroom? We remove built-in jacuzzi tubs, alcove jacuzzis, and corner jacuzzi installations. We protect your tile, flooring, and walls during removal." },
                { title: "Outdoor Jacuzzi Spa Removal", desc: "Backyard jacuzzi spas and patio jacuzzi units. We handle electrical disconnect, plumbing drainage, and haul away the entire unit." },
                { title: "Freestanding Jacuzzi Tub Removal", desc: "Standalone jacuzzi tubs that sit on the floor or platform. Quick removal with minimal disruption to your Wichita home." },
              ].map((item, i) => (
                <div key={i} className="service-card">
                  <h3 className="font-display text-xl text-[#e2e2e2] uppercase mb-2">{item.title}</h3>
                  <p className="text-[#c8c5cd]">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="section-heading mb-8">What to Expect</h2>
            <ul className="space-y-3 mb-12">
              {[
                "Plumbing capped or connected to your new fixture",
                "Electrical safely disconnected and capped",
                "Area cleaned and debris removed",
                "Recycling of metal and motors when possible",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 card-dark p-4">
                  <span className="text-[#0f9b0f] font-bold">✓</span>
                  <span className="text-[#e2e2e2]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="card-dark p-8 text-center">
              <h2 className="font-display text-2xl text-[#e2e2e2] uppercase mb-4">Get a Free Jacuzzi Removal Quote</h2>
              <p className="text-[#c8c5cd] mb-6">
                Bathroom remodel or backyard cleanup — we&apos;ll remove your jacuzzi fast.
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
