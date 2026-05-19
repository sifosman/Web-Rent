import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Hot Tub Removal Wichita — Free Estimate",
  description: "Contact Wichita Hot Tub Removal for a free estimate. Call (316) 555-0199 or fill out our form. Same-day hot tub removal available in Wichita, KS.",
  alternates: {
    canonical: "https://wichitahottubremoval.com/contact/",
  },
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-primary-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get a Free Hot Tub Removal Estimate
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Call us now or fill out the form below. We'll respond within 2 hours during business hours 
            with your free, no-obligation quote.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-bold text-gray-900">Phone</h3>
                  <p className="text-gray-700">
                    <a href="tel:316-555-0199" className="text-primary-600 hover:text-primary-800 font-semibold text-lg">
                      (316) 555-0199
                    </a>
                  </p>
                  <p className="text-sm text-gray-500">Mon–Sat, 7:00 AM – 7:00 PM</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">WhatsApp</h3>
                  <p className="text-gray-700">
                    <a href="https://wa.me/27658475289?text=I%20need%20hot%20tub%20removal" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800">
                      Message us on WhatsApp
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Service Area</h3>
                  <p className="text-gray-700">Wichita, KS and surrounding communities</p>
                </div>
              </div>

              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="font-bold text-primary-900 mb-2">Need Same-Day Service?</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Call before noon for same-day hot tub removal availability in Wichita. 
                  We do our best to accommodate urgent requests.
                </p>
                <a
                  href="tel:316-555-0199"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition w-full"
                >
                  Call Now
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Request a Free Quote</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
