import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-primary-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Wichita Hot Tub Removal
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-primary-200 transition">
              Home
            </Link>
            <Link href="/services/hot-tub-removal/" className="hover:text-primary-200 transition">
              Services
            </Link>
            <Link href="/areas-we-serve/" className="hover:text-primary-200 transition">
              Areas We Serve
            </Link>
            <Link href="/faq/" className="hover:text-primary-200 transition">
              FAQ
            </Link>
            <Link
              href="/contact/"
              className="bg-white text-primary-900 px-4 py-2 rounded-lg font-semibold hover:bg-primary-50 transition"
            >
              Get a Quote
            </Link>
          </nav>

          <a
            href="tel:+13164022339"
            className="md:hidden bg-white text-primary-900 px-4 py-2 rounded-lg font-semibold hover:bg-primary-50 transition"
          >
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}
