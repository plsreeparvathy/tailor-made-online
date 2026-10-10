"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ENQUIRY_FORM_URL } from "@/lib/enquiryFormUrl";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Wholesale", href: "/wholesale" },
  { label: "What We Make", href: "#what-we-make" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

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
    if (!href.startsWith("#")) {
      router.push(href);
    } else if (isHome) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/${href}`);
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] border-b border-peach-light bg-pearl/95 transition-shadow duration-300",
          scrolled && "shadow-warm"
        )}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8 sm:py-4"
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              if (!isHome) return;
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex shrink-0 items-center gap-3"
          >
            <Image
              src="/images/logo.jpeg"
              alt="TailorMade Online logo"
              width={976}
              height={1076}
              priority
              sizes="48px"
              className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
            />
            <div>
              <div className="font-heading text-xl font-semibold tracking-widest text-brown sm:text-2xl">
                TAILOR-MADE
              </div>
              <div className="font-heading text-xs italic tracking-wide text-brown-muted sm:text-sm">
                Online
              </div>
            </div>
          </Link>

          {/* Desktop nav — visible from lg breakpoint */}
          <div className="hidden items-center gap-5 lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "whitespace-nowrap font-body text-sm font-medium tracking-wide text-brown transition-colors hover:text-pink",
                  (pathname === link.href || pathname.startsWith(`${link.href}/`)) && "text-pink"
                )}
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
            className="flex h-10 w-10 items-center justify-center rounded-md text-brown transition-colors hover:bg-sand lg:hidden"
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
              className="fixed inset-0 z-[90] bg-brown/30 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-0 top-[65px] z-[95] sm:top-[81px] border-b border-peach-light bg-pearl shadow-warm lg:hidden"
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
