import Link from "next/link";
import Image from "next/image";

const PHONE = "(316) 402-2339";
const PHONE_HREF = "tel:+13164022339";
const EMAIL = "info@wichitahottubremoval.com";

export default function SiteFooter() {
  return (
    <footer className="bg-[#0c0f0f] border-t-2 border-[#929097] py-20 px-6">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo.svg"
              alt="Wichita Hot Tub Removal Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="font-display text-2xl text-[#c6c4df] uppercase">Wichita Hot Tub Removal</div>
          </div>
          <p className="text-[#c8c5cd] text-base mb-6 max-w-md">
            Fast, professional hot tub, spa, and jacuzzi removal across Wichita and Sedgwick County. Licensed, insured, and eco-friendly disposal.
          </p>
          <a
            href={PHONE_HREF}
            className="font-display text-3xl text-[#e94560] block mb-8 hover:text-white transition-colors no-underline"
          >
            {PHONE}
          </a>
        </div>
        <div>
          <h4 className="font-bold text-sm tracking-wider text-[#e2e2e2] uppercase mb-4 border-b border-[#47464c] pb-2">
            Services
          </h4>
          <ul className="flex flex-col gap-3">
            <li><Link href="/services/hot-tub-removal/" className="text-[#c8c5cd] hover:text-[#c6c4df] transition-colors text-base no-underline">Hot Tub Removal</Link></li>
            <li><Link href="/services/spa-removal/" className="text-[#c8c5cd] hover:text-[#c6c4df] transition-colors text-base no-underline">Spa Removal</Link></li>
            <li><Link href="/services/jacuzzi-removal/" className="text-[#c8c5cd] hover:text-[#c6c4df] transition-colors text-base no-underline">Jacuzzi Removal</Link></li>
            <li><Link href="/contact/" className="text-[#c8c5cd] hover:text-[#c6c4df] transition-colors text-base no-underline">Free Estimate</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm tracking-wider text-[#e2e2e2] uppercase mb-4 border-b border-[#47464c] pb-2">
            Company
          </h4>
          <ul className="flex flex-col gap-3">
            <li><Link href="/" className="text-[#c8c5cd] hover:text-[#c6c4df] transition-colors text-base no-underline">Home</Link></li>
            <li><Link href="/areas-we-serve/" className="text-[#c8c5cd] hover:text-[#c6c4df] transition-colors text-base no-underline">Service Areas</Link></li>
            <li><Link href="/faq/" className="text-[#c8c5cd] hover:text-[#c6c4df] transition-colors text-base no-underline">FAQ</Link></li>
            <li><Link href="/contact/" className="text-[#c8c5cd] hover:text-[#c6c4df] transition-colors text-base no-underline">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm tracking-wider text-[#e2e2e2] uppercase mb-4 border-b border-[#47464c] pb-2">
            Emergency
          </h4>
          <ul className="flex flex-col gap-3">
            <li><a href={PHONE_HREF} className="text-[#c8c5cd] hover:text-[#c6c4df] transition-colors text-base no-underline">{PHONE}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="text-[#c8c5cd] hover:text-[#c6c4df] transition-colors text-base no-underline">{EMAIL}</a></li>
            <li className="text-[#c8c5cd] text-base">Wichita, KS</li>
            <li className="text-[#c8c5cd] text-base">Mon–Sat, 7AM–7PM</li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto mt-12 pt-8 border-t border-[#1e2020] text-center">
        <p className="font-bold text-sm tracking-wider text-[#c8c5cd] uppercase">
          &copy; {new Date().getFullYear()} Wichita Hot Tub Removal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
