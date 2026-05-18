import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hot Tub Removal Wichita | Same-Day Spa & Jacuzzi Disposal",
  description: "Professional hot tub removal in Wichita, KS. Fast, affordable spa, jacuzzi, and above-ground tub hauling. Free estimates. Same-day service available.",
  alternates: {
    canonical: "https://wichitahottubremoval.com/",
  },
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hot Tub Removal Wichita — Fast, Affordable & Hassle-Free
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8">
              Professional spa, jacuzzi, and above-ground hot tub removal in Wichita, KS.
              Same-day service available. Free estimates with no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:316-555-0199"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-900 font-bold rounded-lg hover:bg-primary-50 transition"
              >
                Call (316) 555-0199
              </a>
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary-900 transition"
              >
                Get a Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-primary-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-primary-700">Same-Day</p>
              <p className="text-gray-600">Service Available</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-700">Free</p>
              <p className="text-gray-600">Estimates</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-700">Licensed</p>
              <p className="text-gray-600">& Insured</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-700">Eco-Friendly</p>
              <p className="text-gray-600">Disposal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Hot Tub Removal Services in Wichita
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            We handle all types of hot tub, spa, and jacuzzi removal throughout the Wichita metro area. 
            No job is too big or too small.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition overflow-hidden">
              <img
                src="/images/hot-tub-removal-service.jpg"
                alt="Professional hot tub removal crew dismantling an above ground spa"
                className="w-full h-48 object-cover"
                width="600"
                height="300"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary-900">
                  <Link href="/services/hot-tub-removal/" className="hover:text-primary-600">
                    Hot Tub Removal
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  Full removal of any size hot tub from your deck, patio, or backyard.
                  We disconnect, dismantle, and haul away everything.
                </p>
                <Link href="/services/hot-tub-removal/" className="text-primary-600 font-semibold hover:text-primary-800">
                  Learn more →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition overflow-hidden">
              <img
                src="/images/hot-tub-haul-away.jpg"
                alt="Hot tub hauling and disposal service removing large spa unit"
                className="w-full h-48 object-cover"
                width="600"
                height="300"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary-900">
                  <Link href="/services/spa-removal/" className="hover:text-primary-600">
                    Spa Removal
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  Above-ground spa and portable spa removal.
                  We handle the plumbing disconnect and proper disposal.
                </p>
                <Link href="/services/spa-removal/" className="text-primary-600 font-semibold hover:text-primary-800">
                  Learn more →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition overflow-hidden">
              <img
                src="/images/hot-tub-unit.webp"
                alt="Above ground jacuzzi and hot tub unit for removal and disposal"
                className="w-full h-48 object-cover"
                width="600"
                height="300"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary-900">
                  <Link href="/services/jacuzzi-removal/" className="hover:text-primary-600">
                    Jacuzzi Removal
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  Jacuzzi brand and built-in jacuzzi tub removal.
                  Careful dismantling to protect your property.
                </p>
                <Link href="/services/jacuzzi-removal/" className="text-primary-600 font-semibold hover:text-primary-800">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Our Wichita Hot Tub Removal Service?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Fast Same-Day Service</h3>
                <p className="text-gray-600">
                  Need it gone today? We offer same-day hot tub removal throughout Wichita 
                  when you call before noon. We understand you want your space back.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Transparent Estimates</h3>
                <p className="text-gray-600">
                  We provide clear, upfront estimates before any work begins. 
                  No surprise charges or hidden fees.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Eco-Friendly Disposal</h3>
                <p className="text-gray-600">
                  We recycle metal, motors, and pumps whenever possible. 
                  The rest is disposed of responsibly at licensed Sedgwick County facilities.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">
                  Fully licensed and insured for your protection. 
                  If anything happens during removal, you're covered — zero liability for you.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-xl">
                5
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Property Protection</h3>
                <p className="text-gray-600">
                  We use plywood pathways and padding to protect your deck, patio, and lawn 
                  during removal. We leave your property clean.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-xl">
                6
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Any Size, Any Location</h3>
                <p className="text-gray-600">
                  From small 2-person spas to large 8-person hot tubs. 
                  Ground level, rooftop deck, or tight backyard access — we handle it all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How Hot Tub Removal Works in Wichita
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Request a Free Quote</h3>
              <p className="text-gray-600">
                Call or fill out our form. Tell us about your hot tub size, location, and access.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Get Your Estimate</h3>
              <p className="text-gray-600">
                We provide a flat-rate, no-obligation estimate. No hidden fees, ever.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Schedule Removal</h3>
              <p className="text-gray-600">
                Pick a time that works for you. Same-day and next-day slots available.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold mb-2">We Haul It Away</h3>
              <p className="text-gray-600">
                Our team arrives, disconnects, dismantles, and removes your hot tub. 
                We clean up before we leave.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-primary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Serving All of Wichita & Surrounding Areas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We provide hot tub removal services across Sedgwick County and the entire Wichita metro area.
          </p>
          <Link
            href="/areas-we-serve/"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition"
          >
            View All Service Areas
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Rid of Your Hot Tub?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation estimate today. Same-day service available 
            for hot tub removal in Wichita and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:316-555-0199"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-900 font-bold rounded-lg hover:bg-primary-50 transition"
            >
              Call (316) 555-0199
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary-900 transition"
            >
              Request Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                  "text": "The fastest way is to call Wichita Hot Tub Removal at (316) 555-0199 before noon for same-day service. Most removals take 1–3 hours from arrival to cleanup. We handle electrical disconnection, dismantling, hauling, and disposal — all in one visit.",
                },
              },
            ],
          }),
        }}
      />

      {/* GEO: People Also Ask Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Common Questions About Hot Tub Removal in Wichita
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary-900 mb-3">
                Who removes hot tubs in Wichita, Kansas?
              </h3>
              <p className="text-gray-700">
                Wichita Hot Tub Removal is a licensed and insured local service provider specializing in hot tub, 
                spa, and jacuzzi removal throughout Wichita and Sedgwick County. We serve Derby, Andover, Haysville, 
                Goddard, Maize, and all surrounding communities.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary-900 mb-3">
                Can you remove a hot tub from a deck in Wichita?
              </h3>
              <p className="text-gray-700">
                Yes, we remove hot tubs from decks, patios, rooftops, and tight backyards throughout the Wichita metro area. 
                We use plywood pathways to protect your deck during removal. If partial deck disassembly is required, 
                we handle that too at an additional cost of $150–$400.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary-900 mb-3">
                Does the City of Wichita pick up old hot tubs?
              </h3>
              <p className="text-gray-700">
                No, the City of Wichita does not include hot tubs in regular trash collection. You would need to 
                schedule a special bulky item pickup, and even then they may not accept hot tubs due to size and weight. 
                Professional hot tub removal is the fastest and most reliable option.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary-900 mb-3">
                What is the fastest way to get a hot tub removed in Wichita?
              </h3>
              <p className="text-gray-700">
                The fastest way is to call Wichita Hot Tub Removal at (316) 555-0199 before noon for same-day service. 
                Most removals take 1–3 hours from arrival to cleanup. We handle electrical disconnection, dismantling, 
                hauling, and disposal — all in one visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Wichita Hot Tub Removal</h3>
              <p className="text-sm">
                Professional hot tub, spa, and jacuzzi removal services in Wichita, KS. 
                Licensed, insured, and eco-friendly.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services/hot-tub-removal/" className="hover:text-white">Hot Tub Removal</Link></li>
                <li><Link href="/services/spa-removal/" className="hover:text-white">Spa Removal</Link></li>
                <li><Link href="/services/jacuzzi-removal/" className="hover:text-white">Jacuzzi Removal</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/areas-we-serve/" className="hover:text-white">Areas We Serve</Link></li>
                <li><Link href="/faq/" className="hover:text-white">FAQ</Link></li>
                <li><Link href="/contact/" className="hover:text-white">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <p className="text-sm mb-2">Phone: <a href="tel:316-555-0199" className="hover:text-white">(316) 555-0199</a></p>
              <p className="text-sm">Hours: Mon–Sat, 7AM–7PM</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-sm text-center">
            <p>© {new Date().getFullYear()} Wichita Hot Tub Removal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
