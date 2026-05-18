import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacuzzi Removal Wichita | Jacuzzi Tub Disposal & Haul Away",
  description: "Professional jacuzzi removal in Wichita, KS. We remove built-in and freestanding jacuzzi tubs from bathrooms and outdoors. Free estimates, licensed & insured.",
  alternates: {
    canonical: "https://wichitahottubremoval.com/services/jacuzzi-removal/",
  },
};

export default function JacuzziRemovalPage() {
  return (
    <main>
      <section className="bg-primary-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Jacuzzi Removal in Wichita, KS
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            We remove all types of Jacuzzi tubs — built-in bathroom jacuzzis, outdoor jacuzzi spas, 
            and freestanding jacuzzi units throughout the Wichita metro area.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src="/images/hot-tub-unit.jpg"
            alt="Above ground jacuzzi and hot tub unit for removal and disposal"
            className="w-full h-64 object-cover rounded-xl mb-10 shadow-md"
            width="800"
            height="400"
          />
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Jacuzzi Tub Removal Services</h2>
          <div className="space-y-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Built-In Bathroom Jacuzzi Removal</h3>
              <p className="text-gray-600">
                Remodeling your bathroom? We remove built-in jacuzzi tubs, alcove jacuzzis, 
                and corner jacuzzi installations. We protect your tile, flooring, and walls during removal.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Outdoor Jacuzzi Spa Removal</h3>
              <p className="text-gray-600">
                Backyard jacuzzi spas and patio jacuzzi units. We handle electrical disconnect, 
                plumbing drainage, and haul away the entire unit.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Freestanding Jacuzzi Tub Removal</h3>
              <p className="text-gray-600">
                Standalone jacuzzi tubs that sit on the floor or platform. Quick removal 
                with minimal disruption to your Wichita home.
              </p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-6">What to Expect</h2>
          <ul className="space-y-3 mb-12 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span>Plumbing capped or connected to your new fixture</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span>Electrical safely disconnected and capped</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span>Area cleaned and debris removed</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span>Recycling of metal and motors when possible</span>
            </li>
          </ul>

          <div className="bg-primary-900 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Get a Free Jacuzzi Removal Quote</h2>
            <p className="text-primary-100 mb-6">
              Bathroom remodel or backyard cleanup — we'll remove your jacuzzi fast.
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
