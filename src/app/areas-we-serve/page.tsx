import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Areas We Serve | Hot Tub Removal Wichita & Sedgwick County",
  description: "We provide hot tub, spa, and jacuzzi removal throughout Wichita, KS and surrounding communities. Serving Sedgwick County and the entire Wichita metro area.",
  alternates: {
    canonical: "https://wichitahottubremoval.com/areas-we-serve/",
  },
};

const PHONE = "(316) 402-2339";
const PHONE_HREF = "tel:+13164022339";

const areas = [
  "Wichita", "Derby", "Andover", "Haysville", "Goddard", "Maize",
  "Park City", "Valley Center", "Bel Aire", "Kechi", "Mulvane",
  "Rose Hill", "Clearwater", "Cheney", "Garden Plain", "Sedgwick",
  "Colwich", "Mount Hope", "Eastborough", "McConnell AFB",
];

export default function AreasPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative pt-32 pb-20 px-6" style={{ backgroundColor: "#1a1a2e" }}>
          <div className="max-w-[1280px] mx-auto">
            <h1 className="font-display text-4xl md:text-5xl text-[#e2e2e2] uppercase mb-4">
              Hot Tub Removal Service Areas
            </h1>
            <p className="text-lg text-[#c8c5cd] max-w-2xl">
              We provide hot tub, spa, and jacuzzi removal throughout Wichita and the surrounding
              Sedgwick County communities.
            </p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="section-heading text-center mb-8">
              Cities & Communities We Serve
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {areas.map((area) => (
                <div
                  key={area}
                  className="card-dark p-4 text-center font-medium text-[#e2e2e2] hover:border-[#e94560] transition"
                >
                  {area}
                </div>
              ))}
            </div>

            <div className="card-dark p-8 text-center">
              <h3 className="font-display text-2xl text-[#e2e2e2] uppercase mb-4">Don&apos;t See Your Area?</h3>
              <p className="text-[#c8c5cd] mb-6">
                We travel throughout Sedgwick County and nearby areas. If you&apos;re within 30 miles
                of Wichita, we can likely help. Call us to confirm service to your location.
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
