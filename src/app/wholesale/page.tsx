import { Fragment } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { WHATSAPP_WHOLESALE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wholesale",
  description:
    "Wholesale ethnic wear from TailorMade Online, Bengaluru — Fabsay and Label Kosa kurtis and co-ords. 25-piece MOQ, ₹20,000 minimum order, reorders from 10 pieces.",
  alternates: { canonical: "/wholesale" },
};

// Page copy.
const content = {
  intro:
    "Alongside private-label manufacturing, we supply ethnic wear wholesale to boutiques, resellers and retailers.",
  heroImages: {
    main: {
      src: "/images/brands/fabsay-lehraa.jpg",
      alt: "Fabsay purple cotton kurti with woven butis",
    },
    inset: {
      src: "/images/brands/labelkosa-raag.jpg",
      alt: "Label Kosa checked cotton kurti with red embroidered neckline",
    },
  },
  brands: [
    {
      name: "Fabsay",
      logo: { src: "/images/brands/fabsay-logo.png", width: 500, height: 400 },
      image: {
        src: "/images/brands/fabsay-banner.jpg",
        alt: "Woman in a Fabsay indigo hand block printed kurti",
      },
      tagline: "Authentic hand block cotton — azo-free, skin-safe, artisan-made.",
      description:
        "Fabsay works with skilled artisans who keep traditional hand-printing techniques alive. Every piece is crafted in pure cotton with azo-free dyes.",
      details: [
        { label: "Prints & fabrics", value: "Sanganeri & Bagru hand block, handloom cotton, Kota Doriya, Jamdani" },
        { label: "Range", value: "Kurtis, kurti sets, co-ord sets, dresses, tops, pants & palazzos, skirts, dupattas" },
      ],
    },
    {
      name: "Label Kosa",
      logo: { src: "/images/brands/labelkosa-logo.png", width: 514, height: 200 },
      image: {
        src: "/images/brands/labelkosa-product.jpg",
        alt: "Woman in a Label Kosa pink checked cotton kurti with embroidery",
      },
      tagline: "Comfort. Breathability. Longevity.",
      description:
        "The Kosa promise: pure cotton, always — no polyester, zero compromise. Unblended kurtis carrying embroidery traditions from across India, designed with intention rather than trends.",
      details: [
        { label: "Fabrics", value: "Mangalgiri, cotton flex, self-check cotton" },
        { label: "Craft", value: "Embroidery, hand block, screen print, pintuck, patch work" },
      ],
    },
  ],
};

const proposition = [
  "Start small",
  "Test the market",
  "Reorder what sells",
  "No credit pressure",
  "Low inventory risk",
];

const terms = [
  {
    title: "Ordering",
    items: [
      { label: "MOQ", value: "25 pieces per order" },
      { label: "Minimum order value", value: "₹20,000" },
      { label: "Assortment", value: "Mixed styles/colours can be selected" },
      { label: "New customers", value: "25-piece MOQ" },
      { label: "Reorder", value: "Existing customers can reorder from 10 pieces, subject to availability" },
    ],
  },
  {
    title: "Pricing & payment",
    items: [
      { label: "GST", value: "5% extra" },
      { label: "Payment", value: "100% advance — no credit" },
      { label: "Order confirmation", value: "Only after full payment" },
      { label: "Shipping", value: "At actuals, payable by buyer" },
    ],
  },
  {
    title: "Dispatch & returns",
    items: [
      { label: "Dispatch", value: "As per confirmed stock/production timeline" },
      { label: "No sale-or-return", value: "Unsold stock cannot be returned" },
      {
        label: "Quality issues",
        value:
          "Genuine manufacturing defects can be reported within 48 hours and will be resolved after verification",
      },
    ],
  },
];

export default function WholesalePage() {
  return (
    <main id="main-content">
      <Navbar />

      <section
        aria-labelledby="wholesale-heading"
        className="bg-peach-wash pt-[65px] sm:pt-[81px]"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          <div className="text-center lg:text-left">
            <p className="font-body text-sm uppercase tracking-[0.25em] text-brown/70">
              TailorMade Online
            </p>
            <h1
              id="wholesale-heading"
              className="mt-4 font-heading text-5xl font-semibold text-brown sm:text-6xl"
            >
              Wholesale
            </h1>
            <p className="mx-auto mt-6 max-w-md font-body text-lg leading-relaxed text-brown lg:mx-0">
              {content.intro}
            </p>
            <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8 lg:justify-start">
              <Button size="lg" className="h-auto px-8 py-4 text-base [&_svg]:size-5" asChild>
                <a href={WHATSAPP_WHOLESALE_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon />
                  Enquire on WhatsApp
                </a>
              </Button>
              <a
                href="#terms"
                className="group font-body text-base text-brown transition-colors hover:text-pink-deep"
              >
                Terms &amp; conditions
                <span className="ml-1.5 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md pb-[6%] lg:max-w-none">
            <div className="relative ml-auto aspect-[4/5] w-[82%] overflow-hidden rounded-[2rem] shadow-2xl ring-8 ring-white/70">
              <Image
                src={content.heroImages.main.src}
                alt={content.heroImages.main.alt}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 80vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -left-2 bottom-0 aspect-square w-[46%] overflow-hidden rounded-[1.5rem] shadow-xl ring-8 ring-white sm:left-0">
              <Image
                src={content.heroImages.inset.src}
                alt={content.heroImages.inset.alt}
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute left-[4%] top-[8%] rounded-2xl bg-white/95 px-5 py-3 shadow-warm backdrop-blur">
              <p className="font-heading text-2xl font-semibold italic leading-none text-pink-deep">
                Home-grown
              </p>
              <p className="mt-1 font-body text-xs font-medium uppercase tracking-wider text-brown">
                Fabsay · Label Kosa
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="brands-heading" className="bg-pearl py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="max-w-2xl">
            <p className="font-body text-sm uppercase tracking-[0.25em] text-brown/70">
              Wholesale
            </p>
            <h2
              id="brands-heading"
              className="mt-4 font-heading text-4xl font-semibold text-brown sm:text-5xl"
            >
              Our home-grown brands
            </h2>
          </div>

          <div className="mt-14 grid gap-16 md:grid-cols-2 md:gap-10 lg:gap-16">
            {content.brands.map((brand) => (
              <article key={brand.name} className="flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-peach-wash">
                  <Image
                    src={brand.image.src}
                    alt={brand.image.alt}
                    fill
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>

                <Image
                  src={brand.logo.src}
                  alt={brand.name}
                  width={brand.logo.width}
                  height={brand.logo.height}
                  className="mt-8 h-14 w-auto self-start"
                />
                <p className="mt-5 font-heading text-2xl italic text-pink-deep">
                  {brand.tagline}
                </p>
                <p className="mt-3 font-body text-base leading-relaxed text-brown">
                  {brand.description}
                </p>

                <dl className="mt-6 space-y-3 border-t border-pink/30 pt-5">
                  {brand.details.map((detail) => (
                    <div key={detail.label}>
                      <dt className="font-body text-xs uppercase tracking-wider text-brown/60">
                        {detail.label}
                      </dt>
                      <dd className="mt-1 font-body text-sm text-brown">{detail.value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="terms"
        aria-labelledby="terms-heading"
        className="scroll-mt-20 bg-peach-wash py-20 sm:scroll-mt-24 lg:py-28"
      >
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <p className="font-body text-sm uppercase tracking-[0.25em] text-brown/70">
            Wholesale
          </p>
          <h2
            id="terms-heading"
            className="mt-4 font-heading text-4xl font-semibold text-brown sm:text-5xl"
          >
            Terms &amp; conditions
          </h2>
          <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-brown">
            Made for boutiques, Instagram sellers, small multi-brand stores and
            emerging retailers.
          </p>
          <p className="mt-6 font-heading text-2xl italic leading-snug text-pink-deep sm:text-3xl">
            {proposition.map((phrase, i) => (
              <Fragment key={phrase}>
                {i > 0 && " · "}
                <span className="whitespace-nowrap">{phrase}</span>
              </Fragment>
            ))}
          </p>

          <div className="mt-14 space-y-14">
            {terms.map((group) => (
              <div key={group.title}>
                <h3 className="font-heading text-3xl font-semibold text-brown">{group.title}</h3>
                <dl className="mt-6 divide-y divide-pink/20 border-y border-pink/20">
                  {group.items.map((item) => (
                    <div key={item.label} className="grid gap-1 py-4 sm:grid-cols-[14rem_1fr] sm:gap-6">
                      <dt className="font-body text-sm font-semibold uppercase tracking-wider text-brown/70">
                        {item.label}
                      </dt>
                      <dd className="font-body text-base leading-relaxed text-brown">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-heading text-2xl text-brown">Ready to place an order?</p>
            <Button size="lg" className="h-auto px-8 py-4 text-base [&_svg]:size-5" asChild>
              <a href={WHATSAPP_WHOLESALE_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                Enquire on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
