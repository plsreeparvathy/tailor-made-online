"use client";

import { motion } from "framer-motion";
import { faqItems } from "@/lib/seo";

export default function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-peach-wash py-24 lg:py-32"
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2
            id="faq-heading"
            className="font-heading text-4xl font-light text-brown md:text-5xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-brown-muted">
            Everything you need to know about launching your ethnic wear label
            with TailorMade Online
          </p>
        </motion.div>

        <dl className="mt-12 space-y-6">
          {faqItems.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-sm border border-peach-light/70 bg-pearl/90 p-6"
            >
              <dt className="font-subheading text-lg font-semibold text-brown">
                {item.question}
              </dt>
              <dd className="mt-3 font-body text-sm leading-relaxed text-brown-muted">
                {item.answer}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
