import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas We Serve | Hot Tub Removal Wichita & Sedgwick County",
  description: "We provide hot tub, spa, and jacuzzi removal throughout Wichita, KS and surrounding communities. Serving Sedgwick County and the entire Wichita metro area.",
  alternates: {
    canonical: "https://wichitahottubremoval.com/areas-we-serve/",
  },
};

const areas = [
  "Wichita", "Derby", "Andover", "Haysville", "Goddard", "Maize",
  "Park City", "Valley Center", "Bel Aire", "Kechi", "Mulvane",
  "Rose Hill", "Clearwater", "Cheney", "Garden Plain", "Sedgwick",
  "Colwich", "Mount Hope", "Eastborough", "McConnell AFB",
];

export default function AreasPage() {
  return (
    <main>
      <section className="bg-primary-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Hot Tub Removal Service Areas
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            We provide hot tub, spa, and jacuzzi removal throughout Wichita and the surrounding 
            Sedgwick County communities.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Cities & Communities We Serve
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {areas.map((area) => (
              <div
                key={area}
                className="bg-gray-50 p-4 rounded-lg text-center font-medium text-gray-800 hover:bg-primary-50 transition"
              >
                {area}
              </div>
            ))}
          </div>

          <div className="bg-primary-50 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4">Don't See Your Area?</h3>
            <p className="text-gray-700 mb-4">
              We travel throughout Sedgwick County and nearby areas. If you're within 30 miles 
              of Wichita, we can likely help. Call us to confirm service to your location.
            </p>
            <a
              href="tel:+13164022339"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition"
            >
              Call (316) 402-2339
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
