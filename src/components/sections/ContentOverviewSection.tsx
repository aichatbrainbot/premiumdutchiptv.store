"use client";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/animations/MotionWrappers";
import { Tv, Film, Trophy, Globe } from "lucide-react";

export function ContentOverviewSection() {
  const contentCategories = [
    {
      title: "Live Sport uit de Hele Wereld",
      icon: <Trophy className="h-8 w-8 text-blue-500" />,
      description: "Mis nooit meer een seconde van uw favoriete sport. Met onze geavanceerde streaming infrastructuur heeft u toegang tot alle grote internationale sportnetwerken. Bekijk elke belangrijke voetbalwedstrijd uit de topcompetities van Europa, of volg de grote autosporttoernooien in verbluffende 4K-kwaliteit zonder enige hapering. Daarnaast bieden we uitgebreide dekking van vechtsporten, tennis, darten en Amerikaanse sporten. Alles wordt live en met de hoogste stabiliteit uitgezonden, aangedreven door onze anti-buffer technologie."
    },
    {
      title: "Eindeloos Films & Series (VOD)",
      icon: <Film className="h-8 w-8 text-blue-500" />,
      description: "Ons robuuste Video On Demand (VOD) platform transformeert uw kijkervaring. Met een gigantische bibliotheek van meer dan 179.000 premium titels hoeft u zich nooit meer te vervelen. We updaten onze servers wekelijks met de nieuwste releases, bekroonde series en tijdloze klassiekers. U vindt bij ons een ongeëvenaard aanbod, handig samengevoegd in één razendsnel, overzichtelijk platform. Of u nu houdt van actie, romantiek, thrillers, comedy of documentaires, ons uitgebreide archief biedt de hoogste kwaliteit. Alle VOD-content is geoptimaliseerd voor soepel afspelen en beschikbaar in de hoogst mogelijke resolutie."
    },
    {
      title: "Alle Nederlandse & Belgische Zenders",
      icon: <Tv className="h-8 w-8 text-blue-500" />,
      description: "Blijf verbonden, waar ter wereld u ook bent. Ons uitgebreide netwerk biedt naadloze toegang tot alle belangrijke landelijke, regionale en commerciële zenders uit de Benelux. Van actuele nieuwsuitzendingen en diepgaande talkshows tot het beste lokale entertainment. Dankzij onze premium servers ervaart u geen buffering tijdens populaire live-uitzendingen of piekmomenten. Bovendien is onze infrastructuur volledig compatibel met geavanceerde EPG-systemen en Catch-up (Replay) functionaliteit, waarmee u programma's tot 7 dagen kunt terugkijken vanaf onze cloud."
    },
    {
      title: "Groot Internationaal Aanbod",
      icon: <Globe className="h-8 w-8 text-blue-500" />,
      description: "Naast ons lokale aanbod faciliteren wij een gigantisch scala aan internationale verbindingen. Bent u op zoek naar Britse of Amerikaanse nieuwsnetwerken, wereldwijd entertainment en premium sportkanalen? Ons platform ondersteunt het allemaal met minimale latentie. Daarnaast hebben we zeer uitgebreide verbindingen voor de Turkse, Marokkaanse, Franse, Duitse en Spaanse demografie. Ons servernetwerk is ingedeeld in overzichtelijke categorieën, waardoor uw mediaspeler eenvoudig en snel kan navigeren. Ideaal voor expats of kijkers die de hoogste eisen stellen aan internationale stabiliteit."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Wat Kunt U Verwachten van Ons Aanbod?
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Wij bieden niet zomaar een zenderlijst, maar een compleet entertainmentplatform. Ontdek de ongekende mogelijkheden van ons premium zender- en VOD-aanbod, zorgvuldig samengesteld voor de veeleisende kijker.
          </p>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contentCategories.map((category, index) => (
            <StaggerItem key={index} className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/30 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-900/20 rounded-xl border border-blue-500/20">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed">
                {category.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
