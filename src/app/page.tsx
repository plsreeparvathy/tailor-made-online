import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import About from "@/components/About";
import WhatWeMake from "@/components/WhatWeMake";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <main id="main-content">
        <Navbar />
        <Hero />
        <MarqueeBanner />
        <About />
        <WhatWeMake />
        <HowItWorks />
        <FAQ />
        <EnquiryForm />
        <Footer />
      </main>
    </>
  );
}
