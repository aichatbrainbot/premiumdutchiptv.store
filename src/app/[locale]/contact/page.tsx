import { siteConfig } from "@/config/site";
import { Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Neem contact op met onze 7 dagen per week beschikbare technische ondersteuning via WhatsApp of Email.",
  alternates: {
    canonical: `https://${siteConfig.domain}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-32 max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Neem Contact Op</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Heeft u vragen over onze diensten of heeft u technische ondersteuning nodig? Ons team staat klaar om u te helpen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* WhatsApp Card */}
        <Link 
          href={siteConfig.links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="group block p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-green-500/50 hover:bg-slate-900/80 transition-all text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-500/10 text-green-500 mb-6 group-hover:scale-110 transition-transform">
            <MessageCircle className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">WhatsApp Support</h2>
          <p className="text-slate-400 mb-6">
            Voor de snelste reactie, neem direct contact met ons op via WhatsApp. Wij reageren meestal binnen 5-15 minuten.
          </p>
          <span className="inline-block text-green-400 font-semibold group-hover:underline">
            Start een chat &rarr;
          </span>
        </Link>

        {/* Email Card */}
        <a 
          href={`mailto:${siteConfig.contact.email}`}
          className="group block p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900/80 transition-all text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-500 mb-6 group-hover:scale-110 transition-transform">
            <Mail className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Email Ons</h2>
          <p className="text-slate-400 mb-6">
            Heeft u een uitgebreide of administratieve vraag? Stuur ons een e-mail en we beantwoorden deze binnen 24 uur.
          </p>
          <span className="inline-block text-blue-400 font-semibold group-hover:underline">
            {siteConfig.contact.email}
          </span>
        </a>
      </div>
      
      <div className="mt-16 text-center text-slate-500">
        <p>Support openingstijden: 7 dagen per week, 09:00 - 23:00 (CET)</p>
      </div>
    </div>
  );
}
