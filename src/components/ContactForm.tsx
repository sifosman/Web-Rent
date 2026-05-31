'use client';

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
      action="https://formspree.io/f/xzdwqnwa" 
      method="POST" 
      className="space-y-4"
      onSubmit={handleSubmit}
    >
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
  );
}
