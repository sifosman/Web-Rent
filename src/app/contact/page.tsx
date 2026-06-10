import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Hot Tub Removal Wichita — Free Estimate",
  description: "Contact Wichita Hot Tub Removal for a free estimate. Call (316) 402-2339 or fill out our form. Same-day hot tub removal available in Wichita, KS.",
  alternates: {
    canonical: "https://wichitahottubremoval.com/contact/",
  },
};

const PHONE = "(316) 402-2339";
const PHONE_HREF = "tel:+13164022339";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative pt-32 pb-20 px-6" style={{ backgroundColor: "#1a1a2e" }}>
          <div className="max-w-[1280px] mx-auto">
            <h1 className="font-display text-4xl md:text-5xl text-[#e2e2e2] uppercase mb-4">
              Get a Free Hot Tub Removal Estimate
            </h1>
            <p className="text-lg text-[#c8c5cd] max-w-2xl">
              Call us now or fill out the form below. We will respond within 2 hours during business hours
              with your free, no-obligation quote.
            </p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-display text-2xl text-[#e2e2e2] uppercase mb-6">Contact Information</h2>
                <div className="space-y-4 mb-8">
                  <div>
                    <h3 className="font-bold text-sm tracking-wider text-[#c8c5cd] uppercase">Phone</h3>
                    <p className="text-[#e2e2e2]">
                      <a href={PHONE_HREF} className="text-[#e94560] hover:text-white font-bold text-lg transition-colors no-underline">
                        {PHONE}
                      </a>
                    </p>
                    <p className="text-sm text-[#c8c5cd]">Mon–Sat, 7:00 AM – 7:00 PM</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm tracking-wider text-[#c8c5cd] uppercase">Service Area</h3>
                    <p className="text-[#e2e2e2]">Wichita, KS and surrounding communities</p>
                  </div>
                </div>

                <div className="card-dark p-6">
                  <h3 className="font-display text-xl text-[#e2e2e2] uppercase mb-3">Need Same-Day Service?</h3>
                  <p className="text-[#c8c5cd] text-sm mb-4">
                    Call before noon for same-day hot tub removal availability in Wichita.
                    We do our best to accommodate urgent requests.
                  </p>
                  <a href={PHONE_HREF} className="btn-primary w-full">
                    Call Now
                  </a>
                </div>
              </div>

              <div className="card-dark p-8">
                <h2 className="font-display text-2xl text-[#e2e2e2] uppercase mb-6 border-b-2 inline-block" style={{ borderColor: "#e94560", paddingBottom: "8px" }}>
                  Request a Free Quote
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
