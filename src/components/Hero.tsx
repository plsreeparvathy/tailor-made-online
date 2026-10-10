"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import BlockPrintPattern from "./BlockPrintPattern";
import WhatsAppIcon from "./WhatsAppIcon";
import { siteConfig } from "@/lib/site";

const WHATSAPP_START_URL = `${siteConfig.whatsapp}?text=${encodeURIComponent(
  "Hi TailorMade Online! I'd like to start my own label."
)}`;

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full overflow-hidden bg-pearl lg:min-h-screen"
    >
      {/* Warm peach · pink wash */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-peach-light via-pearl to-pink-light" />
        <div className="absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-peach/40 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-[32rem] w-[32rem] rounded-full bg-pink/30 blur-3xl" />
        <BlockPrintPattern opacity={0.05} />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pb-16 pt-28 sm:px-8 lg:min-h-screen lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pb-20">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <p className="font-body text-sm uppercase tracking-[0.25em] text-brown/70">
            Bengaluru · Since 2017
          </p>

          <h1
            id="hero-heading"
            className="mt-5 whitespace-nowrap font-heading text-[clamp(2.25rem,12vw,3rem)] font-semibold leading-[0.95] tracking-[0.04em] text-brown sm:text-7xl xl:text-[5.5rem]"
          >
            TAILOR<span className="text-peach-deep">-</span>MADE
          </h1>
          <p className="mt-1 font-heading text-3xl italic text-pink-deep sm:text-4xl">
            Online
          </p>

          <p className="mt-8 max-w-md font-body text-lg leading-relaxed text-brown">
            Ethnic wear manufacturing for designers and boutiques — block prints,
            handlooms, kurtis and co&#8209;ord sets, from just 100&nbsp;pieces.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:gap-8"
          >
            <Button size="lg" className="h-13 px-8 py-4 text-base [&_svg]:size-5" asChild>
              <a href={WHATSAPP_START_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                Start Your Label
              </a>
            </Button>
            <Link
              href="/wholesale"
              className="group font-body text-base text-brown transition-colors hover:text-pink-deep"
            >
              Wholesale
              <span className="ml-1.5 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Photo collage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative ml-auto aspect-[4/5] w-[82%] overflow-hidden rounded-[2rem] shadow-2xl ring-8 ring-white/70">
            <Image
              src="/images/one.jpeg"
              alt="Block-printed fabric with measuring tape and thread at the cutting table"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 80vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -left-2 bottom-[-6%] aspect-square w-[46%] overflow-hidden rounded-[1.5rem] shadow-xl ring-8 ring-white sm:left-0">
            <Image
              src="/images/six.jpeg"
              alt="Hand-embroidered detailing on a kurta"
              fill
              sizes="(min-width: 1024px) 22vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="absolute left-[4%] top-[8%] rounded-2xl bg-white/95 px-5 py-3 shadow-warm backdrop-blur">
            <p className="font-heading text-2xl font-semibold italic leading-none text-pink-deep">Handcrafted</p>
            <p className="mt-1 font-body text-xs font-medium uppercase tracking-wider text-brown">
              Block prints · Handlooms
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
