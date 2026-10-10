import type { Metadata } from "next";
import { getFullAddress, siteConfig } from "./site";

export const faqItems = [
  {
    question: "What is the minimum order quantity at TailorMade Online?",
    answer:
      "Our minimum order quantity (MOQ) is 100 pieces per style, with up to 5 colourways per style. This low-MOQ model is designed for emerging designers, boutique owners, and fashion entrepreneurs who want to test collections without committing to large bulk runs.",
  },
  {
    question: "What types of ethnic wear do you manufacture?",
    answer:
      "We specialise in Indian ethnic garments including kurtis and tunics, co-ord sets, block print garments, dresses and anarkalis, kidswear, and menswear kurtas. We work with natural fabrics, handlooms, block prints, and screen prints to bring authentic Indian craft into every collection.",
  },
  {
    question: "Do I need to provide my own fabrics and materials?",
    answer:
      "Yes. Clients source their own fabrics, trims, labels, tags, and packaging. Once materials arrive at our Bengaluru unit, we confirm production timelines and begin manufacturing to your approved sample specifications.",
  },
  {
    question: "Where is TailorMade Online located?",
    answer:
      `TailorMade Online is operated by Ahaskara Endeavors LLP, based at ${getFullAddress()}. We have been manufacturing ethnic wear from Bengaluru since ${siteConfig.foundedYear}.`,
  },
  {
    question: "How does the sampling and production process work?",
    answer:
      "Share your design idea or tech pack, attend a design consultation, approve a developed sample, deliver your materials, and we handle cutting, stitching, finishing, quality inspection, and dispatch. A 50% production deposit is required before manufacturing begins, with the balance due before shipment.",
  },
  {
    question: "Who is TailorMade Online best suited for?",
    answer:
      "We partner with independent designers, D2C fashion brands, boutique owners, and first-time label founders who want ethical, women-led manufacturing for Indian ethnic wear — with transparent pricing, quality craftsmanship, and production volumes starting at just 100 pieces.",
  },
] as const;

export const wholesaleFaqItems = [
  {
    question: "What is the minimum order for wholesale?",
    answer:
      "25 pieces per order, with a minimum order value of ₹20,000. Existing customers can reorder from 10 pieces, subject to availability.",
  },
  {
    question: "Can I mix styles and colours in one wholesale order?",
    answer: "Yes. Mixed styles and colours can be selected within an order.",
  },
  {
    question: "Which brands can I buy wholesale?",
    answer:
      "Our home-grown labels Fabsay — hand block printed cotton kurtis, sets, co-ords and dresses — and Label Kosa — pure cotton kurtis with embroidery, hand block and screen print details.",
  },
  {
    question: "Is GST included in wholesale prices?",
    answer:
      "No. GST of 5% is charged extra, and shipping is at actuals, payable by the buyer.",
  },
  {
    question: "What are the payment terms for wholesale orders?",
    answer:
      "100% advance — we don't offer credit. Orders are confirmed only after full payment and dispatched as per the confirmed stock/production timeline.",
  },
  {
    question: "Can I return unsold wholesale stock?",
    answer:
      "No. Wholesale is not sale-or-return, so unsold stock cannot be returned. Genuine manufacturing defects can be reported within 48 hours and will be resolved after verification.",
  },
  {
    question: "Who is wholesale suited for?",
    answer:
      "Boutiques, Instagram sellers, small multi-brand stores and emerging retailers who want to start small, test the market and reorder what sells.",
  },
] as const;

export function buildMetadata(): Metadata {
  const { name, description, url, keywords, locale } = siteConfig;
  const title = `Low MOQ Ethnic Wear Manufacturer in Bengaluru | ${name}`;
  const ogTitle = `${name} — Low-MOQ Ethnic Wear Manufacturing in Bengaluru`;

  return {
    metadataBase: new URL(url),
    title: {
      default: title,
      template: `%s | ${name}`,
    },
    description,
    keywords: [...keywords],
    authors: [{ name: siteConfig.legalName, url }],
    creator: siteConfig.legalName,
    publisher: siteConfig.legalName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: locale.replace("_", "-"),
      url,
      siteName: name,
      title: ogTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: "fashion",
    other: {
      "geo.region": "IN-KA",
      "geo.placename": siteConfig.address.city,
      "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
      ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
    },
  };
}

export function buildJsonLd() {
  const {
    name,
    legalName,
    description,
    url,
    phone,
    email,
    whatsapp,
    address,
    geo,
    foundedYear,
    social,
  } = siteConfig;

  const sameAs = [social.instagram, social.facebook, social.linkedin].filter(
    Boolean
  ) as string[];

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${url}/#organization`,
    name,
    legalName,
    url,
    description,
    foundingDate: String(foundedYear),
    email,
    telephone: phone,
    logo: `${url}/images/logo.jpeg`,
    brand: [
      { "@type": "Brand", name: "Fabsay" },
      { "@type": "Brand", name: "Label Kosa" },
    ],
    sameAs,
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${url}/#localbusiness`,
    name,
    description,
    url,
    telephone: phone,
    email,
    image: `${url}/opengraph-image`,
    priceRange: "$$",
    foundingDate: String(foundedYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    knowsAbout: [
      "Ethnic wear manufacturing",
      "Block print garments",
      "Handloom clothing",
      "Low MOQ fashion production",
      "Kurti manufacturing",
    ],
    parentOrganization: {
      "@id": `${url}/#organization`,
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    name,
    url,
    description,
    publisher: {
      "@id": `${url}/#organization`,
    },
    inLanguage: "en-IN",
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}/#faq`,
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}/#service`,
    name: "Low-MOQ Ethnic Wear Manufacturing",
    description,
    provider: {
      "@id": `${url}/#localbusiness`,
    },
    areaServed: "IN",
    serviceType: "Garment manufacturing",
    offers: {
      "@type": "Offer",
      description: "Ethnic wear production from 100 pieces per style",
      eligibleRegion: {
        "@type": "Country",
        name: "India",
      },
    },
  };

  const contactPoint = {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    "@id": `${url}/#contact`,
    telephone: phone,
    email,
    contactType: "customer service",
    availableLanguage: ["English", "Hindi", "Kannada"],
    url: whatsapp,
  };

  return [organization, localBusiness, website, faqPage, service, contactPoint];
}

export function buildWholesaleJsonLd() {
  const { name, url } = siteConfig;
  const pageUrl = `${url}/wholesale`;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name, item: url },
      { "@type": "ListItem", position: 2, name: "Wholesale", item: pageUrl },
    ],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: "Wholesale ethnic wear for boutiques and resellers",
    description:
      "Wholesale cotton kurtis and co-ords from Fabsay and Label Kosa. MOQ 25 pieces, ₹20,000 minimum order value, reorders from 10 pieces.",
    provider: { "@id": `${url}/#localbusiness` },
    areaServed: "IN",
    serviceType: "Wholesale clothing supply",
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Boutiques, Instagram sellers, small multi-brand stores and emerging retailers",
    },
    brand: [
      { "@type": "Brand", name: "Fabsay" },
      { "@type": "Brand", name: "Label Kosa" },
    ],
    offers: {
      "@type": "Offer",
      description: "Wholesale orders from 25 pieces; mixed styles and colours allowed",
      eligibleQuantity: {
        "@type": "QuantitativeValue",
        minValue: 25,
        unitText: "pieces",
      },
      eligibleTransactionVolume: {
        "@type": "PriceSpecification",
        price: 20000,
        priceCurrency: "INR",
      },
      eligibleRegion: { "@type": "Country", name: "India" },
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: wholesaleFaqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return [breadcrumb, service, faqPage];
}
