"use client";
import { FadeInUp } from "@/components/animations/MotionWrappers";

export function DeviceGuideSection() {
  return (
    <section className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 max-w-5xl">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Hoe Installeer Je IPTV Op Jouw Apparaten?
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Een van de grootste voordelen van Premium Dutch IPTV is de enorme flexibiliteit. Je bent niet langer gebonden aan een dure decoder of een specifiek kastje van je provider. Onze service is compatibel met vrijwel elk modern apparaat dat verbonden is met het internet. Hieronder leggen we uitgebreid uit hoe eenvoudig het is om te beginnen met kijken op de meest populaire platforms.
          </p>
        </FadeInUp>

        <div className="space-y-12">
          <FadeInUp className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-2xl font-bold text-white mb-4">1. Smart TV&apos;s (Samsung, LG, Philips, Sony)</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-4">
              Het bekijken van IPTV via een Smart TV is de meest populaire keuze onder onze klanten. Voor tv&apos;s met Android TV (zoals Sony en Philips) raden we de app <strong>TiviMate</strong> of <strong>IPTV Smarters Pro</strong> aan. Deze apps bieden een prachtige interface en een uitstekende EPG (tv-gids).
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Heb je een Samsung of LG televisie met respectievelijk Tizen of WebOS? Dan kun je gebruikmaken van uitstekende applicaties zoals <strong>IBO Player</strong>, <strong>Flix IPTV</strong>, of <strong>SET IPTV</strong>. Je downloadt simpelweg de app uit de app store van je tv, stuurt ons het MAC-adres (of apparaat-ID) via WhatsApp, en wij activeren je abonnement direct op afstand. Je hebt geen technische kennis nodig!
            </p>
          </FadeInUp>

          <FadeInUp delay={0.1} className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-2xl font-bold text-white mb-4">2. Amazon Fire TV Stick & Android TV Boxes</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-4">
              Als je tv geen ingebouwde smart-mogelijkheden heeft, of als de apps traag zijn, is een Amazon Fire TV Stick of een Android TV Box (zoals de Nvidia Shield of Xiaomi Mi Box) de perfecte en voordelige oplossing. Deze apparaten zijn razendsnel en speciaal gemaakt voor streaming.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              De installatie is enorm eenvoudig. Op de Firestick kun je de app <strong>Downloader</strong> gebruiken om direct de beste IPTV-applicaties zoals TiviMate of XCIPTV te installeren. Voer na installatie de door ons verstrekte M3U-link of Xtream Codes (gebruikersnaam, wachtwoord en portaal-URL) in, en je hebt binnen enkele minuten toegang tot meer dan 35.000 zenders in 4K-kwaliteit.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.2} className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-2xl font-bold text-white mb-4">3. Apple Apparaten (Apple TV, iPhone, iPad)</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-4">
              Apple-gebruikers kunnen rekenen op een vlekkeloze streamingervaring. Zowel op iOS als tvOS (Apple TV) zijn er fantastische apps beschikbaar in de App Store. Onze absolute aanraders zijn <strong>Smarters Player Lite</strong>, <strong>GSE Smart IPTV</strong>, en <strong>LillyPlayer</strong>.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Deze applicaties zijn geoptimaliseerd voor het Apple-ecosysteem en bieden een naadloze kijkervaring met ondersteuning voor AirPlay. Zo begin je een film op je iPad en stream je deze met één druk op de knop in 4K naar je Apple TV. Net als bij andere apparaten log je in met de inloggegevens die je van ons ontvangt direct na je bestelling.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3} className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-2xl font-bold text-white mb-4">4. PC, Laptop (Windows & Mac) en MAG Boxes</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-4">
              Werk je vaak op je computer of laptop? Geen probleem. Je kunt direct kijken via je webbrowser door gebruik te maken van onze Web Player, of je kunt robuuste software downloaden zoals <strong>VLC Media Player</strong>, waar je simpelweg je persoonlijke M3U-link in laadt.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Voor de klassieke IPTV-kijkers die de voorkeur geven aan een dedicated set-top box zoals een MAG-apparaat (bijv. MAG 322, 520, of 524), bieden wij volledige portal-ondersteuning. Geef ons tijdens je bestelling je MAC-adres door (beginnend met 00:1A:79), en wij koppelen je apparaat aan onze premium server. Je geniet dan van de traditionele en supersnelle Stalker-interface.
            </p>
          </FadeInUp>
        </div>
        
        <FadeInUp delay={0.4} className="mt-12 text-center p-6 bg-blue-900/20 border border-blue-500/30 rounded-2xl">
          <p className="text-lg text-blue-200 font-medium">
            Kom je er niet uit? Geen zorgen! Ons Nederlandstalige supportteam via WhatsApp staat altijd klaar om je persoonlijk en stap-voor-stap te begeleiden bij de installatie, ongeacht welk apparaat je gebruikt.
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
