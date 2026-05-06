import Link from "next/link";
import { Tv } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer({ dict, lang }: { dict?: Record<string, string>; lang?: string }) {
  const currentLang = lang || "nl";
  return (
    <footer className="bg-slate-950 py-16 border-t border-slate-900">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <Link href={`/${currentLang}`} title="Premium IPTV – Home" className="flex items-center gap-2 mb-6 group">
            <div className="bg-blue-600 p-1.5 rounded-lg group-hover:bg-blue-500 transition-colors">
              <Tv className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-white">
              Premium<span className="text-blue-500">IPTV</span>
            </span>
          </Link>
          <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
            {siteConfig.description}
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-6 text-white text-lg">Links</h4>
          <ul className="space-y-3 text-lg text-slate-400">
            <li><Link href={`/${currentLang}/#features`} title={dict?.features || "Functies"} className="hover:text-blue-400 transition-colors">{dict?.features || "Functies"}</Link></li>
            <li><Link href={`/${currentLang}/pricing`} title={dict?.pricing || "Abonnementen"} className="hover:text-blue-400 transition-colors">{dict?.pricing || "Abonnementen"}</Link></li>
            <li><Link href={`/${currentLang}/about`} title="Over Ons" className="hover:text-blue-400 transition-colors">Over Ons</Link></li>
            <li><Link href={`/${currentLang}/contact`} title="Contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            <li><Link href={`/${currentLang}/#faq`} title={dict?.faq || "FAQ"} className="hover:text-blue-400 transition-colors">{dict?.faq || "FAQ"}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-6 text-white text-lg">Legal</h4>
          <ul className="space-y-3 text-lg text-slate-400">
            <li><Link href={`/${currentLang}/terms`} title="Algemene Voorwaarden – Premium IPTV" className="hover:text-blue-400 transition-colors">Algemene Voorwaarden</Link></li>
            <li><Link href={`/${currentLang}/privacy`} title="Privacybeleid – Premium IPTV" className="hover:text-blue-400 transition-colors">Privacybeleid</Link></li>
            <li><Link href={`/${currentLang}/dmca`} title="DMCA & Copyright – Premium IPTV" className="hover:text-blue-400 transition-colors">DMCA / Copyright</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-6 text-white text-lg">Contact</h4>
          <ul className="space-y-3 text-lg text-slate-400">
            <li><a href={`mailto:${siteConfig.contact.email}`} className="hover:text-blue-400 transition-colors">Email: {siteConfig.contact.email}</a></li>
            <li><a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">WhatsApp Support (24/7)</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-slate-500">
        <p className="mb-4 text-sm max-w-4xl mx-auto leading-relaxed">
          <strong>Disclaimer:</strong> Premium Dutch IPTV biedt uitsluitend technologische netwerkinfrastructuur en routing diensten. Wij hosten, distribueren of verkopen geen auteursrechtelijk beschermde streams of media. Gebruikers zijn volledig verantwoordelijk voor de content die zij via onze servers benaderen.
        </p>
        &copy; {new Date().getFullYear()} {siteConfig.name}. Alle rechten voorbehouden.
      </div>
    </footer>
  );
}
