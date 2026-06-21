"use client";

import { motion } from "framer-motion";
import { Scissors, Leaf, Users } from "lucide-react";
import BlockPrintPattern from "./BlockPrintPattern";

const valueCards = [
  {
    icon: Users,
    title: "Empowering Women",
    description:
      "12 skilled women tailors leading every stitch — ethical, women-led garment production in Bengaluru",
  },
  {
    icon: Leaf,
    title: "Embracing Sustainability",
    description:
      "Natural fabrics, mindful production, and low-waste practices across every collection",
  },
  {
    icon: Scissors,
    title: "Crafting Quality",
    description:
      "Precision tailoring, rigorous QC, and consistency from sample to final dispatch",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative bg-peach-wash py-24 lg:py-32">
      <BlockPrintPattern />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 id="about-heading" className="font-heading text-4xl font-light text-brown md:text-5xl">
            Crafted with Purpose, Rooted in Tradition
          </h2>
          <div className="mt-6 space-y-4 font-body text-brown-muted leading-relaxed">
            <p>
              Founded in 2017, Ahaskara Endeavors LLP was built on a simple belief —
              that fashion should empower. Based in Whitefield, Bengaluru, we are a
              team of 20 dedicated professionals, including 12 skilled women tailors,
              who specialise in low-MOQ ethnic wear manufacturing for independent
              labels across India.
            </p>
            <p>
              From intricate hand block prints to flowing anarkalis and handloom co-ord
              sets, we bring the richness of Indian textile traditions into every
              collection we help create. Whether you are launching your first kurti
              line or scaling a boutique brand, we offer transparent sampling,
              flexible 100-piece minimums, and end-to-end production support.
            </p>
            <p>
              With a strong commitment to natural fabrics, sustainable practices, and
              ethical production, we partner with designers, boutiques, and fashion
              entrepreneurs to build labels that stand for quality, craft, and purpose.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid gap-6 sm:grid-cols-3"
        >
          {valueCards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              className="rounded-sm border border-pink-light/60 bg-pearl/90 p-6 text-center backdrop-blur-sm transition-shadow hover:shadow-warm"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-light/80">
                <card.icon className="h-6 w-6 text-pink" />
              </div>
              <h3 className="font-subheading text-lg font-semibold text-brown">
                {card.title}
              </h3>
              <p className="mt-2 font-body text-sm text-brown-muted">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
