import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import About from "@/components/About";
import WhatWeMake from "@/components/WhatWeMake";
import HowItWorks from "@/components/HowItWorks";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <About />
      <WhatWeMake />
      <HowItWorks />
      <EnquiryForm />
      <Footer />
    </main>
  );
}
