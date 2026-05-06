import { HeroSection } from "@/components/sections/HeroSection";
import { SupportedDevicesSection } from "@/components/sections/SupportedDevicesSection";
import { MoviesPosterSection } from "@/components/sections/MoviesPosterSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ContentOverviewSection } from "@/components/sections/ContentOverviewSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { DeviceGuideSection } from "@/components/sections/DeviceGuideSection";
import { WhyIPTVSection } from "@/components/sections/WhyIPTVSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { SEOContentSection } from "@/components/sections/SEOContentSection";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/i18n.config";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  // Generate Schema.org for LocalBusiness / Product
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": siteConfig.currency,
      "lowPrice": "15",
      "highPrice": "85",
      "offerCount": "4"
    },
    "brand": {
      "@type": "Brand",
      "name": siteConfig.name
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="flex flex-col min-h-screen">
        <HeroSection dict={dict.hero} lang={locale} />
        <SupportedDevicesSection />
        <MoviesPosterSection />
        <FeaturesSection />
        <ContentOverviewSection />
        <HowItWorksSection />
        <DeviceGuideSection />
        <WhyIPTVSection />
        <PricingSection dict={dict.pricing} whatsappDict={dict.whatsapp} lang={locale} />
        <TestimonialsSection />
        <FAQSection />
        <SEOContentSection />
      </div>
    </>
  );
}
