import type { Metadata } from "next";

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
              <form action="https://formsubmit.co/mohamed@owdsolutions.co.za" method="POST" className="space-y-4">
                <input type="hidden" name="_subject" value="New Hot Tub Removal Quote Request - Wichita" />
                <input type="hidden" name="_next" value="https://wichitahottubremoval.com/contact/" />
                <input type="hidden" name="_captcha" value="false" />
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="(316) 555-1234"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Location / City *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Wichita, Derby, Andover, etc."
                  />
                </div>
                <div>
                  <label htmlFor="tub-type" className="block text-sm font-medium text-gray-700 mb-1">
                    Type of Hot Tub
                  </label>
                  <select
                    id="tub-type"
                    name="tub-type"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select a type</option>
                    <option value="above-ground-hot-tub">Above-ground hot tub</option>
                    <option value="built-in-spa">Built-in spa</option>
                    <option value="portable-spa">Portable / inflatable spa</option>
                    <option value="jacuzzi">Jacuzzi tub</option>
                    <option value="swim-spa">Swim spa</option>
                    <option value="not-sure">Not sure / other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Tell us about the size, location (deck/patio/ground), and any access issues..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition"
                >
                  Request Free Estimate
                </button>
                <p className="text-xs text-gray-500 text-center">
                  We respect your privacy. Your information will never be shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
