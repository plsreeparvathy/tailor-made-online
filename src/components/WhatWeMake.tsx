"use client";

import { motion } from "framer-motion";
import {
  Shirt,
  Layers,
  Stamp,
  Sparkles,
  Baby,
  UserRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ProductCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const products: ProductCard[] = [
  {
    icon: Shirt,
    title: "Kurtis & Tunics",
    description: "Classic silhouettes in natural and printed fabrics",
  },
  {
    icon: Layers,
    title: "Co-ord Sets",
    description: "Matching sets in block prints, solids, and handlooms",
  },
  {
    icon: Stamp,
    title: "Block Print Garments",
    description: "Authentic hand block and screen print designs",
  },
  {
    icon: Sparkles,
    title: "Dresses & Anarkalis",
    description: "Flowing ethnic silhouettes for every occasion",
  },
  {
    icon: Baby,
    title: "Kidswear",
    description: "Gentle fabrics, playful Indian designs for little ones",
  },
  {
    icon: UserRound,
    title: "Menswear",
    description: "Kurtas and ethnic separates crafted with precision",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export default function WhatWeMake() {
  return (
    <section id="what-we-make" className="bg-pearl py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-4xl font-light text-brown md:text-5xl">
            What We Make
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-brown-muted">
            Specialising in Indian ethnic garments crafted with care and intention
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((product) => (
            <motion.div
              key={product.title}
              variants={cardVariants}
              className="group rounded-sm border border-peach-light/70 bg-pearl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-gold"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-peach-light/80 transition-colors group-hover:bg-peach/30">
                <product.icon className="h-7 w-7 text-peach-deep" />
              </div>
              <h3 className="font-subheading text-xl font-semibold text-brown">
                {product.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-brown-muted">
                {product.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
