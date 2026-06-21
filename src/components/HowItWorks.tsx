"use client";

import { motion } from "framer-motion";
import BlockPrintPattern from "./BlockPrintPattern";

const steps = [
  {
    number: 1,
    title: "Share Your Design Idea",
    description:
      "Send us your sketches, reference images, tech packs, or design concepts. We help evaluate and develop your collection.",
  },
  {
    number: 2,
    title: "Design Consultation",
    description:
      "Our team discusses garment construction, sizing, fabrics, trims, finishing details, and production requirements.",
  },
  {
    number: 3,
    title: "Sampling & Development",
    description:
      "A sample is developed based on approved specs. Sampling charges are payable before development begins.",
  },
  {
    number: 4,
    title: "Sample Approval",
    description:
      "Review the sample, request modifications. Once approved, the style is locked for production.",
  },
  {
    number: 5,
    title: "Source Your Materials",
    description:
      "Clients source their own fabrics, trims, labels, tags, and packaging. Up to 5 colours per style for 100-piece orders.",
  },
  {
    number: 6,
    title: "Material Receipt & Production Confirmation",
    description:
      "Once materials arrive, production is planned. 50% of the production quotation is due before we begin.",
  },
  {
    number: 7,
    title: "Production",
    description:
      "Our team handles cutting, stitching, finishing, and assembly to your approved sample.",
  },
  {
    number: 8,
    title: "Final Quality Check",
    description:
      "Every order is inspected before packing to ensure it meets approved standards.",
  },
  {
    number: 9,
    title: "Final Payment & Dispatch",
    description:
      "Remaining balance is due on the final day. Once cleared, your order is packed and shipped.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-pink-soft py-24 lg:py-32">
      <BlockPrintPattern />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-4xl font-light text-brown md:text-5xl">
            From Idea to Label
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-brown-muted">
            A transparent, step-by-step process designed for fashion entrepreneurs
          </p>
        </motion.div>

        <div className="relative">
          <div
            className="absolute left-6 top-0 hidden h-full w-0.5 bg-pink/30 md:left-1/2 md:block md:-translate-x-1/2"
            aria-hidden="true"
          />

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`relative mb-8 flex items-start gap-6 md:mb-12 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block md:w-1/2" />

                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-peach-deep font-heading text-lg font-semibold text-white shadow-warm md:absolute md:left-1/2 md:-translate-x-1/2">
                  {step.number}
                </div>

                <div
                  className={`flex-1 md:w-1/2 ${
                    isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                  }`}
                >
                  <div className="rounded-sm border border-peach-light/60 bg-pearl p-6 shadow-sm transition-shadow hover:shadow-warm">
                    <span className="mb-2 inline-block rounded-full bg-pink-light/80 px-3 py-1 font-body text-xs font-semibold text-pink">
                      Step {step.number}
                    </span>
                    <h3 className="font-subheading text-lg font-semibold text-brown">
                      {step.title}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-brown-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
