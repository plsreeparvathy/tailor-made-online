/** Central site configuration — used for metadata, JSON-LD, and sitemap. */
export const siteConfig = {
  name: "TailorMade Online",
  legalName: "Ahaskara Endeavors LLP",
  tagline: "Curate & Create Your Own Label",
  description:
    "Low-MOQ ethnic wear manufacturing in Bengaluru — block prints, handlooms, kurtis, co-ord sets, and artisanal Indian fashion. Launch your label from just 100 pieces.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://tailormadeonline.in",
  locale: "en_IN",
  foundedYear: 2017,
  phone: "+918550807555",
  email: "ahaskaraendeavors@gmail.com",
  whatsapp: "https://wa.me/918550807555",
  address: {
    street: "C303, DSR Green Fields, Whitefield",
    city: "Bengaluru",
    region: "Karnataka",
    postalCode: "560066",
    country: "IN",
  },
  geo: {
    latitude: 12.9698,
    longitude: 77.7499,
  },
  social: {
    // Add profiles when available — used in Organization schema
    instagram: null as string | null,
    facebook: null as string | null,
    linkedin: null as string | null,
  },
  keywords: [
    "ethnic wear manufacturer India",
    "low MOQ clothing manufacturing",
    "block print garments Bengaluru",
    "kurti manufacturer",
    "handloom co-ord sets",
    "Indian fashion label manufacturing",
    "custom ethnic wear production",
    "small batch clothing manufacturer",
    "anarkali dress manufacturer",
    "women-led garment factory Bengaluru",
    "sustainable ethnic wear manufacturing",
    "100 piece minimum order clothing",
    "boutique label manufacturing India",
    "Ahaskara Endeavors",
    "TailorMade Online",
  ],
} as const;

export function getFullAddress(): string {
  const { street, city, region, postalCode } = siteConfig.address;
  return `${street}, ${city} – ${postalCode}, ${region}, India`;
}
