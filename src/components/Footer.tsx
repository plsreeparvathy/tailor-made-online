"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import BlockPrintDivider from "./BlockPrintDivider";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer aria-label="Site footer" className="bg-pink-deep text-pearl">
      <BlockPrintDivider color="#F0B090" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="text-center">
          <div className="font-heading text-3xl font-semibold tracking-widest">
            TAILOR-MADE
          </div>
          <div className="font-heading text-base italic tracking-wide text-pearl/85">
            Online
          </div>

          <p className="mx-auto mt-6 max-w-xl font-heading text-lg italic text-pearl/75">
            Empowering Women • Embracing Sustainability • Crafting Quality Since 2017
          </p>
          <p className="mx-auto mt-4 max-w-lg font-body text-sm text-pearl/65 leading-relaxed">
            Ethnic wear manufacturing for designers and boutiques across India —
            block prints, handlooms, kurtis, and co-ord sets from 100 pieces.
          </p>
        </div>

        <div className="mt-12 space-y-4 text-center font-body text-sm text-pearl/85">
          <div className="flex items-center justify-center gap-2">
            <MapPin className="h-4 w-4 shrink-0 text-peach-light" />
            <span>
              C303, DSR Green Fields, Whitefield, Bengaluru – 560066, Karnataka, India
            </span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Phone className="h-4 w-4 shrink-0 text-peach-light" />
            <a href="tel:+918550807555" className="hover:text-peach-light transition-colors">
              +91 85508 07555
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <WhatsAppIcon className="h-4 w-4 shrink-0 text-peach-light" />
            <a
              href="https://wa.me/918550807555"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-peach-light transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail className="h-4 w-4 shrink-0 text-peach-light" />
            <a
              href="mailto:ahaskaraendeavors@gmail.com"
              className="hover:text-peach-light transition-colors"
            >
              ahaskaraendeavors@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-pearl/15 pt-8 text-center">
          <p className="font-body text-xs text-pearl/55">
            A platform by Ahaskara Endeavors LLP
          </p>
          <p className="mt-2 font-body text-xs text-pearl/45">
            © {new Date().getFullYear()} TailorMade Online. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
