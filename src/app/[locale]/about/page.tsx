import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Over Ons",
  description: "Ontdek wie wij zijn en waarom wij de meest betrouwbare premium IPTV streaming infrastructuur provider in de Benelux zijn.",
  alternates: {
    canonical: `https://${siteConfig.domain}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-32 max-w-4xl text-slate-300">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">Over Ons</h1>
      
      <div className="space-y-8 text-lg leading-relaxed bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-800">
        <p>
          Welkom bij <strong>{siteConfig.name}</strong>. Wij zijn een toegewijde technologieprovider die zich richt op het leveren van hoogwaardige, stabiele streaming-infrastructuur voor de moderne mediaconsument in de Benelux en de rest van Europa.
        </p>

        <div className="py-6 border-y border-slate-800 my-8">
          <h2 className="text-2xl font-bold text-white mb-4">Onze Missie</h2>
          <p>
            De overstap van traditionele kabeltelevisie naar internetgebaseerde streaming is in volle gang. Onze missie is om deze transitie naadloos te laten verlopen door een robuust, betrouwbaar en uiterst snel platform te bieden. Wij geloven dat toegang tot media-infrastructuur geen compromis mag vereisen op het gebied van kwaliteit of stabiliteit.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Technologie voorop</h2>
        <p>
          Wat ons onderscheidt is onze focus op technologie. Wij investeren continu in onze servercapaciteit, load-balancing en anti-buffer systemen. Door onze netwerken strategisch te verspreiden over meerdere Europese datacenters, kunnen we een uptime van 99,99% garanderen, zelfs tijdens piekuren met veel netwerkverkeer.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Klantgerichte Ondersteuning</h2>
        <p>
          Technologie kan soms complex zijn, daarom hebben wij ons ondersteuningsproces zo eenvoudig mogelijk gemaakt. Ons technische supportteam is 7 dagen per week beschikbaar via WhatsApp om te helpen met installaties, configuraties en algemene technische vragen. Wij streven naar de hoogste klanttevredenheid door snelle, persoonlijke en oplossingsgerichte communicatie.
        </p>
      </div>
    </div>
  );
}
