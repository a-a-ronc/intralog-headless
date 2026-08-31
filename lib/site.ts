// lib/site.ts
// Single source of truth for site identity used by metadata, sitemap,
// robots, and structured data. NAP details must stay in sync with the
// Google Business Profile listing.

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://intralog.io";

export const SITE_NAME = "Intralog";

export const SITE_DESCRIPTION =
  "Automated material handling, engineered for ROI. Intralog designs and integrates warehouse automation—pallet shuttles, VLMs, conveyor and sortation, AMRs, and robotics—for 3PLs and mid-market distribution centers.";

export const BUSINESS = {
  name: SITE_NAME,
  telephone: "+1-385-500-4667",
  email: "info@intralog.io",
  address: {
    streetAddress: "5215 Wiley Post Way Ste. 160",
    addressLocality: "Salt Lake City",
    addressRegion: "UT",
    postalCode: "84116",
    addressCountry: "US",
  },
};

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

// Site-wide LocalBusiness node. Feeds Google's knowledge panel / map pack
// and gives AI answer engines a machine-readable identity for the company.
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": ORGANIZATION_ID,
  name: BUSINESS.name,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/logo.png`,
  telephone: BUSINESS.telephone,
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    ...BUSINESS.address,
  },
  areaServed: "US",
};
