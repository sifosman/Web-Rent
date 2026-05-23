import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hot Tub Removal Wichita KS | Fast & Affordable Disposal Service",
  description: "Professional hot tub removal in Wichita, Kansas. We remove all sizes of hot tubs from decks, patios, and backyards. Free estimates, same-day service available.",
  alternates: {
    canonical: "https://wichitahottubremoval.com/services/hot-tub-removal/",
  },
};

export default function HotTubRemovalPage() {
  return (
    <main>
      <section className="bg-primary-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Hot Tub Removal in Wichita, KS
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Fast, professional removal of any size hot tub from your Wichita property. 
            We disconnect, dismantle, and haul it all away. Free estimates.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src="/images/hot-tub-removal-service.jpg"
            alt="Professional hot tub removal crew dismantling an above ground spa"
            className="w-full h-64 object-cover rounded-xl mb-10 shadow-md"
            width="800"
            height="400"
          />
          <h2 className="text-2xl md:text-3xl font-bold mb-6">What We Remove</h2>
          <ul className="grid md:grid-cols-2 gap-4 mb-12">
            <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
              <span className="text-green-600 font-bold text-xl">✓</span>
              <span>All brands and sizes of hot tubs</span>
            </li>
            <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
              <span className="text-green-600 font-bold text-xl">✓</span>
              <span>Wooden and acrylic shell hot tubs</span>
            </li>
            <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
              <span className="text-green-600 font-bold text-xl">✓</span>
              <span>Hot tubs on decks, patios, and ground level</span>
            </li>
            <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
              <span className="text-green-600 font-bold text-xl">✓</span>
              <span>Hot tubs with built-in surrounds and cabinets</span>
            </li>
            <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
              <span className="text-green-600 font-bold text-xl">✓</span>
              <span>Inflatable and soft-sided hot tubs</span>
            </li>
            <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
              <span className="text-green-600 font-bold text-xl">✓</span>
              <span>Non-working and damaged hot tubs</span>
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Removal Process</h2>
          <ol className="space-y-6 mb-12">
            <li className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">1. Free On-Site Estimate</h3>
              <p className="text-gray-600">
                We visit your Wichita property to assess the hot tub size, location, and access. 
                You get a flat-rate quote with no hidden fees.
              </p>
            </li>
            <li className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">2. Safe Disconnection</h3>
              <p className="text-gray-600">
                Our team safely disconnects electrical and plumbing connections. 
                We can work with 110V or 220V setups.
              </p>
            </li>
            <li className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">3. Dismantle & Remove</h3>
              <p className="text-gray-600">
                We cut the hot tub into manageable sections using professional tools. 
                We protect your deck, patio, and landscaping during removal.
              </p>
            </li>
            <li className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">4. Haul Away & Dispose</h3>
              <p className="text-gray-600">
                Everything is loaded onto our truck and hauled to licensed disposal facilities 
                in Sedgwick County. We recycle metal and motors when possible.
              </p>
            </li>
          </ol>

          <h2 className="text-2xl md:text-3xl font-bold mb-6">How Much Does Hot Tub Removal Cost in Wichita?</h2>
          <div className="bg-primary-50 rounded-xl p-6 mb-12">
            <p className="text-gray-700 mb-4">
              Pricing depends on hot tub size, location, and accessibility. Here's a general guide:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Small hot tubs (2–4 person):</strong> $250 – $400</li>
              <li><strong>Medium hot tubs (5–6 person):</strong> $350 – $550</li>
              <li><strong>Large hot tubs (7–8+ person):</strong> $500 – $800</li>
              <li><strong>Built-in / hardwired units:</strong> Add $100 – $200</li>
              <li><strong>Deck removal required:</strong> Add $150 – $400</li>
            </ul>
            <p className="text-gray-600 mt-4 text-sm">
              These are estimates only. Call for a free, no-obligation quote at your Wichita location.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Remove a Hot Tub?</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">It Stopped Working</h3>
              <p className="text-gray-600 text-sm">
                Repairs can cost $500–$2,000+. If the pump, heater, or shell is damaged, 
                removal is often the smarter financial choice.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Selling Your Home</h3>
              <p className="text-gray-600 text-sm">
                An old, non-working hot tub can reduce curb appeal. Removing it makes 
                your Wichita property more attractive to buyers.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Reclaiming Space</h3>
              <p className="text-gray-600 text-sm">
                That unused hot tub takes up valuable backyard real estate. 
                Remove it and enjoy a patio, garden, or fire pit instead.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-2">High Energy Bills</h3>
              <p className="text-gray-600 text-sm">
                Running a hot tub costs $50–$100+ per month in electricity. 
                If you rarely use it, removal saves money long-term.
              </p>
            </div>
          </div>

          <div className="bg-primary-900 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Get Your Free Hot Tub Removal Estimate
            </h2>
            <p className="text-primary-100 mb-6">
              Call today for a free, no-obligation quote. Same-day removal available in Wichita.
            </p>
            <a
              href="tel:+13164022339"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-900 font-bold rounded-lg hover:bg-primary-50 transition"
            >
              Call (316) 402-2339
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
