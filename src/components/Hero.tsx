"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import BlockPrintPattern from "./BlockPrintPattern";
import { ENQUIRY_FORM_URL } from "@/lib/enquiryFormUrl";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen w-full bg-pearl">
      {/* Pearl · peach · pink background wash */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 pearl-peach-pink-glow opacity-80" />
        <BlockPrintPattern opacity={0.03} />
        <div className="absolute inset-0 linen-texture opacity-20" />
      </div>

      {/* True viewport center */}
      <div className="relative z-10 grid min-h-screen w-full place-items-center px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex w-full max-w-3xl flex-col items-center text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-peach sm:w-16" />
            <span className="font-body text-[10px] uppercase tracking-[0.35em] text-brown-muted">
              Bengaluru · Since 2017
            </span>
            <span className="h-px w-12 bg-peach sm:w-16" />
          </div>

          <h1 className="w-full text-center font-heading text-[2.75rem] font-light leading-[0.95] tracking-[0.08em] text-brown sm:text-6xl md:text-7xl">
            TAILOR
            <span className="text-peach-deep">-</span>
            MADE
          </h1>
          <p className="mt-2 text-center font-heading text-xl italic tracking-[0.06em] text-pink md:text-2xl">
            Online
          </p>
          <p className="mt-3 text-center font-subheading text-sm italic tracking-wide text-brown-muted md:text-base">
            Curate &amp; Create Your Own Label
          </p>

          <div className="my-8 flex items-center justify-center gap-2" aria-hidden="true">
            <span className="h-1.5 w-1.5 rotate-45 bg-pink" />
            <span className="h-px w-20 bg-gradient-to-r from-transparent via-peach/60 to-transparent sm:w-28" />
            <span className="h-1 w-1 rounded-full bg-peach" />
            <span className="h-px w-20 bg-gradient-to-r from-transparent via-peach/60 to-transparent sm:w-28" />
            <span className="h-1.5 w-1.5 rotate-45 bg-pink" />
          </div>

          <h2 className="w-full text-center font-heading text-2xl font-light leading-[1.3] text-brown sm:text-3xl md:text-4xl">
            Where Indian Craft
            <br />
            <span className="italic text-brown-muted">Meets Contemporary Style</span>
          </h2>

          <p className="mt-5 max-w-xl text-center font-body text-[15px] leading-[1.75] text-brown-muted md:text-base">
            Low-MOQ manufacturing for ethnic wear labels — block prints,
            handlooms, and artisanal Indian fashion. Start with just{" "}
            <em className="font-subheading not-italic text-peach-deep">100 pieces.</em>
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          >
            <Button size="lg" asChild>
              <a href={ENQUIRY_FORM_URL} target="_blank" rel="noopener noreferrer">
                Start Your Label
              </a>
            </Button>
            <button
              onClick={() => scrollTo("#how-it-works")}
              className="group font-body text-sm tracking-wide text-brown transition-colors hover:text-peach-deep"
            >
              <span className="border-b border-brown/30 pb-0.5 transition-colors group-hover:border-peach-deep">
                How It Works
              </span>
              <span className="ml-1.5 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
