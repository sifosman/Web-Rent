'use client';

const FORMSPREE_ID = "xzdwqnwa";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'submit', {
        event_category: 'form',
        event_label: 'contact_form',
      });
    }
  };

  return (
    <form
      action={`https://formspree.io/f/${FORMSPREE_ID}`}
      method="POST"
      className="flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="_subject" value="New Hot Tub Removal Quote Request - Wichita" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://wichitahottubremoval.com/contact/?sent=1" />

      <div>
        <label className="font-bold text-sm tracking-wider text-[#c8c5cd] block mb-2 uppercase">
          Name
        </label>
        <input
          className="input-dark"
          name="name"
          placeholder="John Doe"
          type="text"
          required
        />
      </div>
      <div>
        <label className="font-bold text-sm tracking-wider text-[#c8c5cd] block mb-2 uppercase">
          Phone
        </label>
        <input
          className="input-dark"
          name="phone"
          placeholder="(316) 555-0123"
          type="tel"
          required
        />
      </div>
      <div>
        <label className="font-bold text-sm tracking-wider text-[#c8c5cd] block mb-2 uppercase">
          Address
        </label>
        <input
          className="input-dark"
          name="address"
          placeholder="123 Wichita St."
          type="text"
        />
      </div>
      <button className="btn-primary w-full mt-4" type="submit">
        Get Started
      </button>
      <p className="text-xs text-[#c8c5cd] text-center">
        We respect your privacy. Your information will never be shared.
      </p>
    </form>
  );
}
