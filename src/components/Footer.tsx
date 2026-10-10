"use client";

import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import BlockPrintDivider from "./BlockPrintDivider";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  return (
    <footer aria-label="Site footer" className="bg-pink-deep text-pearl">
      <BlockPrintDivider color="#F0B090" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="text-center">
          <Image
            src="/images/logo.jpeg"
            alt="TailorMade Online — Since 2017"
            width={976}
            height={1076}
            sizes="176px"
            className="mx-auto h-36 w-36 rounded-full object-cover shadow-warm sm:h-44 sm:w-44"
          />

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
