import React from "react";
import { siteConfig } from "@/config/site";

type StructuredDataProps = {
  dict?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
};

const StructuredData: React.FC<StructuredDataProps> = ({ dict }) => {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: siteConfig.url,
    name: dict?.title ?? siteConfig.name,
    description: dict?.description ?? siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/search?query={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: siteConfig.url,
    logo: `${siteConfig.url}/favicon.svg`,
    name: siteConfig.name,
    description: "Premium IPTV Infrastructure Provider in Europe.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.whatsapp,
      contactType: "customer service",
      email: siteConfig.contact.email,
      availableLanguage: ["English", "Dutch", "German", "French"]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify([websiteData, organizationData]) }}
    />
  );
};

export default StructuredData;
