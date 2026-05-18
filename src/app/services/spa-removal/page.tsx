import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spa Removal Wichita | Above-Ground Spa Disposal & Hauling",
  description: "Professional spa removal in Wichita, KS. We remove above-ground spas, portable spas, and outdoor spa tubs. Free estimates and same-day service available.",
  alternates: {
    canonical: "https://wichitahottubremoval.com/services/spa-removal/",
  },
};

export default function SpaRemovalPage() {
  return (
    <main>
      <section className="bg-primary-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Spa Removal in Wichita, KS
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Professional removal of above-ground spas, portable spas, and outdoor spa tubs 
            throughout Wichita and Sedgwick County. Fast, clean, and hassle-free.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src="/images/hot-tub-haul-away.jpg"
            alt="Hot tub hauling and disposal service removing large spa unit"
            className="w-full h-64 object-cover rounded-xl mb-10 shadow-md"
            width="800"
            height="400"
          />
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Types of Spas We Remove</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Above-Ground Spas</h3>
              <p className="text-gray-600">
                Free-standing spa units sitting on decks, patios, or concrete pads. 
                We disconnect plumbing and electrical, then haul everything away.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Portable Spas</h3>
              <p className="text-gray-600">
                Soft-sided, inflatable, and plug-and-play spas. Quick removal with 
                minimal impact on your property.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Drop-In Spas</h3>
              <p className="text-gray-600">
                Spas installed into decks or custom surrounds. We remove the spa shell 
                and can optionally remove the surrounding structure.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Swim Spas</h3>
              <p className="text-gray-600">
                Large swim spa units that combine a pool and hot tub. These require 
                specialized equipment and expertise — we have both.
              </p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-6">Spa Removal Pricing in Wichita</h2>
          <div className="bg-primary-50 rounded-xl p-6 mb-12">
            <ul className="space-y-2 text-gray-700">
              <li><strong>Small portable spa:</strong> $150 – $300</li>
              <li><strong>Medium above-ground spa:</strong> $300 – $500</li>
              <li><strong>Large spa with surround:</strong> $450 – $700</li>
              <li><strong>Swim spa:</strong> $600 – $1,000</li>
            </ul>
            <p className="text-gray-600 mt-4 text-sm">
              Prices vary based on access, stairs, and disposal requirements. 
              Contact us for a free, on-site estimate in Wichita.
            </p>
          </div>

          <div className="bg-primary-900 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Remove Your Spa?</h2>
            <p className="text-primary-100 mb-6">
              Free estimates for spa removal anywhere in Wichita and surrounding areas.
            </p>
            <a
              href="tel:316-555-0199"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-900 font-bold rounded-lg hover:bg-primary-50 transition"
            >
              Call (316) 555-0199
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
