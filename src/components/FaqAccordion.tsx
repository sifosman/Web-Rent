"use client";

import { useState } from "react";

interface Faq {
  question: string;
  answer: string;
}

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-2">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item card-dark ${activeFaq === index ? "active" : ""}`}
        >
          <button
            className="faq-btn"
            onClick={() => setActiveFaq(activeFaq === index ? null : index)}
          >
            {faq.question}
          </button>
          <div className="faq-answer">
            <p className="text-[#c8c5cd] text-base">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
