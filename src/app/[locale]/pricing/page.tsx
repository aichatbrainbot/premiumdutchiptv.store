import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/i18n.config";

export const metadata: Metadata = {
  title: "Abonnementen & Prijzen",
  description: "Bekijk onze voordelige IPTV abonnementen. Kies uit 1 scherm of meerdere schermen. 100% stabiel, 4K kwaliteit en inclusief VODs.",
  alternates: {
    canonical: `https://${siteConfig.domain}/pricing`,
  },
  openGraph: {
    title: `Abonnementen & Prijzen | ${siteConfig.name}`,
    description: "Bekijk onze voordelige IPTV abonnementen. Kies uit 1 scherm of meerdere schermen.",
    url: `https://${siteConfig.domain}/pricing`,
    siteName: siteConfig.name,
    locale: siteConfig.language,
    type: "website",
  },
};

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `https://${siteConfig.domain}/${locale}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": dict.navigation.pricing,
        "item": `https://${siteConfig.domain}/${locale}/pricing`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="pt-20">
        <PricingSection dict={dict.pricing} whatsappDict={dict.whatsapp} lang={locale} />
        <FAQSection />
      </div>
    </>
  );
}
