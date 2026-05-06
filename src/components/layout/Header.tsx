import Link from "next/link";
import { Tv } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Header({ dict, lang }: { dict?: Record<string, string>; lang?: string }) {
  const currentLang = lang || "nl";
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href={`/${currentLang}`} title="Premium IPTV – Home" className="flex items-center gap-2 group">
          <div className="bg-blue-600 p-2 rounded-xl group-hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20">
            <Tv className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-white">
            Premium<span className="text-blue-500">IPTV</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-lg font-medium text-slate-300">
          <Link href={`/${currentLang}/#features`} title={dict?.features || "Functies"} className="hover:text-blue-400 transition-colors">{dict?.features || "Functies"}</Link>
          <Link href={`/${currentLang}/pricing`} title={dict?.pricing || "Abonnementen"} className="hover:text-blue-400 transition-colors">{dict?.pricing || "Abonnementen"}</Link>
          <Link href={`/${currentLang}/about`} title="Over Ons" className="hover:text-blue-400 transition-colors">Over Ons</Link>
          <Link href={`/${currentLang}/contact`} title="Contact" className="hover:text-blue-400 transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <LanguageSwitcher currentLocale={currentLang} />
          </div>
          <a
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            title={dict?.buyNow || "Bestel Nu via WhatsApp"}
            className={buttonVariants({ variant: "trust", size: "lg", className: "font-bold h-12 px-8" })}
          >
            {dict?.buyNow || "Bestel Nu"}
          </a>
        </div>
      </div>
    </header>
  );
}
