"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ENQUIRY_FORM_URL } from "@/lib/enquiryFormUrl";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "What We Make", href: "#what-we-make" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] border-b border-peach-light bg-pearl/95 transition-shadow duration-300",
          scrolled && "shadow-warm"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8 sm:py-4">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="shrink-0"
          >
            <div className="font-heading text-xl font-semibold tracking-widest text-brown sm:text-2xl">
              TAILOR-MADE
            </div>
            <div className="font-heading text-xs italic tracking-wide text-brown-muted sm:text-sm">
              Online
            </div>
          </a>

          {/* Desktop nav — visible from sm breakpoint */}
          <div className="hidden items-center gap-6 sm:flex lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-body text-sm font-medium tracking-wide text-brown transition-colors hover:text-pink"
              >
                {link.label}
              </button>
            ))}
            <Button size="sm" className="font-body shrink-0" asChild>
              <a href={ENQUIRY_FORM_URL} target="_blank" rel="noopener noreferrer">
                Start Your Label
              </a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md text-brown transition-colors hover:bg-sand sm:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[90] bg-brown/30 sm:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-0 top-[65px] z-[95] border-b border-peach-light bg-pearl shadow-warm sm:hidden"
            >
              <div className="flex flex-col px-5 py-4">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="border-b border-peach-wash py-3.5 text-left font-body text-base font-medium text-brown transition-colors hover:text-pink"
                  >
                    {link.label}
                  </button>
                ))}
                <Button className="mt-4 w-full" asChild>
                  <a href={ENQUIRY_FORM_URL} target="_blank" rel="noopener noreferrer">
                    Start Your Label
                  </a>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
