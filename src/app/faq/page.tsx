import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Hot Tub Removal FAQ Wichita | Common Questions Answered",
  description: "Answers to common hot tub removal questions in Wichita, KS. Cost, process, disposal, and same-day service info. Get your questions answered.",
  alternates: {
    canonical: "https://wichitahottubremoval.com/faq/",
  },
};

const PHONE = "(316) 402-2339";
const PHONE_HREF = "tel:+13164022339";

const faqs = [
  {
    question: "How much does it cost to remove a hot tub in Wichita?",
    answer: "Hot tub removal in Wichita typically costs between $250 and $800 depending on the size, location, and accessibility. Small 2–4 person tubs start around $250, while large 7–8 person built-in units can run $500–$800. We offer free, no-obligation estimates so you know the exact price before we start.",
  },
  {
    question: "Do you offer same-day hot tub removal in Wichita?",
    answer: "Yes, same-day hot tub removal is available in Wichita when you call before noon and we have an opening in our schedule. We understand that sometimes you need a hot tub removed urgently — before a home sale, after a storm, or when you're preparing for a remodel. Call (316) 402-2339 to check availability.",
  },
  {
    question: "What types of hot tubs do you remove?",
    answer: "We remove all types of hot tubs including above-ground hot tubs, built-in spas, portable spas, inflatable hot tubs, wooden hot tubs, acrylic shell tubs, jacuzzi brand tubs, and swim spas. No job is too big or too small — if it holds water and jets, we can remove it.",
  },
  {
    question: "Do I need to disconnect the electricity and plumbing myself?",
    answer: "You do not need to disconnect anything yourself. Our team handles electrical disconnection (both 110V and 220V) and plumbing caps. However, if you prefer to have a licensed electrician disconnect the hardwired 220V connection beforehand, that's fine too. We can work either way.",
  },
  {
    question: "Where does the hot tub go after removal?",
    answer: "We haul your hot tub to licensed disposal and recycling facilities in Sedgwick County. Metal frames, motors, and pumps are recycled whenever possible. The acrylic shell and other non-recyclable materials are disposed of responsibly at certified waste facilities. We do not dump illegally.",
  },
  {
    question: "Can you remove a hot tub from a deck or rooftop?",
    answer: "Yes, we remove hot tubs from decks, rooftops, tight backyards, and other difficult locations. We use plywood pathways to protect your deck and property during removal. For rooftop spas, we assess the structural access and use appropriate equipment to safely remove the unit.",
  },
  {
    question: "How long does hot tub removal take?",
    answer: "Most hot tub removals in Wichita take 1 to 3 hours from arrival to cleanup. Small, easily accessible tubs may take only 1 hour. Large built-in units or those requiring deck removal can take 2–4 hours. We'll give you a time estimate during your free quote.",
  },
  {
    question: "Do you serve areas outside of Wichita?",
    answer: "Yes, we serve the entire Wichita metro area including Derby, Andover, Haysville, Goddard, Maize, Park City, Valley Center, Bel Aire, Kechi, and other Sedgwick County communities. Call us to confirm service to your specific location.",
  },
  {
    question: "Is your hot tub removal service insured?",
    answer: "Yes, we are fully licensed and insured for hot tub and spa removal in Kansas. This means if any damage occurs to your property during removal, you are fully protected. We also carry workers' compensation insurance for our crew's protection.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, check, and all major credit cards. Payment is typically due upon completion of the removal, once you've inspected the work and are satisfied with the cleanup. For larger commercial jobs, we can arrange invoicing terms.",
  },
  {
    question: "Can I just leave my old hot tub at the curb for the city to pick up?",
    answer: "No, the City of Wichita does not pick up hot tubs or large appliances during regular trash collection. You would need to schedule a special bulky item pickup, and even then they may not accept hot tubs due to size and weight. Professional removal is the fastest and most reliable option.",
  },
  {
    question: "Do you buy used hot tubs?",
    answer: "We do not purchase used hot tubs. Our service is removal and disposal only. If your hot tub is in working condition, you may want to try selling it on Facebook Marketplace or Craigslist first. If it doesn't sell or is not working, call us for fast removal.",
  },
];

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative pt-32 pb-20 px-6" style={{ backgroundColor: "#1a1a2e" }}>
          <div className="max-w-[1280px] mx-auto">
            <h1 className="font-display text-4xl md:text-5xl text-[#e2e2e2] uppercase mb-4">
              Hot Tub Removal FAQ — Wichita, KS
            </h1>
            <p className="text-lg text-[#c8c5cd] max-w-2xl">
              Answers to the most common questions about hot tub removal, disposal, and pricing in Wichita.
            </p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-[1280px] mx-auto max-w-3xl">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <FaqAccordion faqs={faqs} />

            <div className="card-dark p-8 text-center mt-12">
              <h2 className="font-display text-2xl text-[#e2e2e2] uppercase mb-4">Still Have Questions?</h2>
              <p className="text-[#c8c5cd] mb-6">
                Call us directly — we&apos;re happy to answer any questions about hot tub removal in Wichita.
              </p>
              <a
                href={PHONE_HREF}
                className="btn-primary"
              >
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
