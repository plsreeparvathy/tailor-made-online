"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlockPrintPattern from "./BlockPrintPattern";
import BlockPrintDivider from "./BlockPrintDivider";
import { ENQUIRY_FORM_URL } from "@/lib/enquiryFormUrl";

export default function EnquiryForm() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative bg-pearl py-24 lg:py-32">
      <BlockPrintPattern />

      <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8">
        <BlockPrintDivider className="mb-12" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 id="contact-heading" className="font-heading text-4xl font-light text-brown md:text-5xl">
            Bring Your Collection to Life
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-brown-muted leading-relaxed">
            Ready to launch your ethnic wear label? Share your design idea, target
            styles, and estimated quantities — our Bengaluru team will respond with
            sampling timelines, production guidance, and a clear path from concept to
            finished garments.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-10"
          >
            <Button size="xl" className="font-heading text-xl tracking-wide" asChild>
              <a
                href={ENQUIRY_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Submit Enquiry
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <p className="mt-4 font-body text-sm text-brown-muted">
              Opens our enquiry form in a new tab
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
