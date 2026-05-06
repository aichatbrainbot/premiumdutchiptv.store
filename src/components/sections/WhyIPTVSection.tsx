"use client";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/animations/MotionWrappers";
import { Check, X } from "lucide-react";

const comparisonRows = [
  { feature: "Live TV (35.000+ zenders)", us: true, cable: false, free: false },
  { feature: "4K/UHD beeldkwaliteit", us: true, cable: false, free: false },
  { feature: "Anti-buffer technologie", us: true, cable: false, free: false },
  { feature: "Films & series on-demand (179.000+)", us: true, cable: false, free: false },
  { feature: "TV Replay & EPG gids", us: true, cable: true, free: false },
  { feature: "Geen installatievergoeding", us: true, cable: false, free: true },
  { feature: "7-dagen geld-terug-garantie", us: true, cable: false, free: false },
  { feature: "Alle apparaten ondersteund", us: true, cable: false, free: false },
  { feature: "Vaste maandelijkse kosten", us: true, cable: true, free: false },
  { feature: "EU servers (stabiel)", us: true, cable: false, free: false },
];

export function WhyIPTVSection() {
  return (
    <section id="why-iptv" className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Intro copy */}
        <FadeInUp className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Waarom Premium Dutch IPTV?
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Gewone kabelabonnementen zijn duur, beperkt en bieden nauwelijks content op aanvraag.
            Gratis streams zijn onbetrouwbaar, vol reclame en van slechte kwaliteit.
            <span className="text-blue-400 font-semibold"> Premium Dutch IPTV</span> biedt u het beste van twee werelden:
            een enorm aanbod aan live zenders én on-demand content — stabiel, snel en betaalbaar.
          </p>
        </FadeInUp>

        {/* Comparison Table */}
        <FadeInUp delay={0.15} className="overflow-x-auto rounded-2xl border border-slate-800">
          <table className="w-full text-left text-base">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-700">
                <th className="px-6 py-5 text-slate-300 font-semibold text-lg w-1/2">Functie</th>
                <th className="px-6 py-5 text-blue-400 font-bold text-center text-lg">Premium IPTV</th>
                <th className="px-6 py-5 text-slate-400 font-semibold text-center text-lg">Kabel / Satelliet</th>
                <th className="px-6 py-5 text-slate-400 font-semibold text-center text-lg">Gratis Streams</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={i} className={`border-b border-slate-800 ${i % 2 === 0 ? "bg-slate-950" : "bg-slate-900/40"} hover:bg-slate-800/30 transition-colors`}>
                  <td className="px-6 py-4 text-slate-300">{row.feature}</td>
                  <td className="px-6 py-4 text-center">
                    {row.us ? <Check className="h-6 w-6 text-green-500 mx-auto" /> : <X className="h-6 w-6 text-red-400 mx-auto" />}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {row.cable ? <Check className="h-6 w-6 text-green-500 mx-auto" /> : <X className="h-6 w-6 text-red-400 mx-auto" />}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {row.free ? <Check className="h-6 w-6 text-green-500 mx-auto" /> : <X className="h-6 w-6 text-red-400 mx-auto" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeInUp>

        {/* Extra copy blocks */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <StaggerItem className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
            <h3 className="text-2xl font-bold text-white mb-4">Ultieme Vrijheid</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              Geen langetermijncontracten. Kies zelf uw abonnementsduur — van 3 maanden tot een volledig jaar.
              Schakel op elk gewenst moment over naar multi-screen als u met meerdere personen wilt kijken.
            </p>
          </StaggerItem>
          <StaggerItem className="p-8 rounded-2xl bg-blue-900/20 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Directe Activatie</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              Na betaling ontvangt u binnen enkele minuten uw inloggegevens via WhatsApp.
              Ons supportteam begeleidt u stap voor stap bij de installatie op elk apparaat —
              van Smart TV tot smartphone.
            </p>
          </StaggerItem>
          <StaggerItem className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
            <h3 className="text-2xl font-bold text-white mb-4">99,99% Uptime</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              Onze servers staan verspreid over heel Europa en zijn geconfigureerd voor minimale latency.
              Geniet van stressvrij kijken tijdens topwedstrijden, live evenementen en premiumprogramma&apos;s.
            </p>
          </StaggerItem>
        </StaggerContainer>

        {/* Closing trust paragraph */}
        <FadeInUp delay={0.3} className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-lg text-slate-400 leading-relaxed">
            Premium Dutch IPTV is de keuze van meer dan <span className="text-white font-semibold">10.000 tevreden klanten</span> in Nederland, België en heel Europa.
            Of u nu kijkt naar Nederlandse nieuws­zenders, internationale sport, Arabische kanalen of de nieuwste Hollywood-blockbusters —
            ons platform biedt het allemaal in één enkel abonnement, tegen een eerlijke prijs.
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
