import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import StructuredData from "@/components/seo/StructuredData";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { i18n, type Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const seo = dict.seo as { title?: string; description?: string; keywords?: string[] } | undefined;

  const title = seo?.title ?? siteConfig.name;
  const description = seo?.description ?? siteConfig.description;
  const keywords = seo?.keywords ?? ["IPTV Nederland", "Beste IPTV 2026", "IPTV Kopen", "Nederlandse zenders", "4K IPTV"];

  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    metadataBase: new URL(`https://${siteConfig.domain}`),
    alternates: {
      canonical: `https://${siteConfig.domain}/${locale}`,
      languages: {
        'nl': `https://${siteConfig.domain}/nl`,
        'en': `https://${siteConfig.domain}/en`,
        'fr': `https://${siteConfig.domain}/fr`,
        'de': `https://${siteConfig.domain}/de`,
        'x-default': `https://${siteConfig.domain}/nl`,
      },
    },
    openGraph: {
      type: "website",
      url: `${siteConfig.url}/${locale}`,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: `${siteConfig.url}/og-image.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.url}/og-image.png`],
    },
    verification: {
      google: "ADD_YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE_HERE",
    },
    icons: {
      icon: [
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/icon?id=medium', type: 'image/png', sizes: '32x32' },
      ],
      apple: [
        { url: '/apple-icon', sizes: '180x180', type: 'image/png' },
      ],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const seo = dict.seo as { title?: string; description?: string; keywords?: string[] } | undefined;

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-950 text-slate-200 antialiased selection:bg-blue-500/30`} suppressHydrationWarning>
        {/* TODO: Add Google Analytics Script here when you have the Measurement ID (G-XXXXXXXXXX) */}
        {/* <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" /> */}
        <StructuredData dict={seo} />
        <Header dict={dict.navigation as Record<string, string>} lang={locale} />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer dict={dict.navigation as Record<string, string>} lang={locale} />
        <WhatsAppCTA />
      </body>
    </html>
  );
}
