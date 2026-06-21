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

export function buildMetadata(): Metadata {
  const { name, tagline, description, url, keywords, locale } = siteConfig;
  const title = `${name} | ${tagline}`;
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
    logo: `${url}/icon.svg`,
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
