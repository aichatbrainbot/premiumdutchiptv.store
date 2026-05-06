import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeInUp } from "@/components/animations/MotionWrappers";

export function FAQSection() {
  const faqs = [
    {
      question: "Wat is IPTV?",
      answer: "IPTV staat voor Internet Protocol Television. Het betekent dat u televisie kijkt via het internet in plaats van via de traditionele kabel of satelliet. Met IPTV heeft u toegang tot duizenden live zenders, films, series en sport-evenementen wereldwijd — op elk apparaat met een internetverbinding. Onze service biedt meer dan 35.000 live zenders en 179.000+ on-demand titels in SD, HD, FHD, 4K en UHD kwaliteit."
    },
    {
      question: "Op welke apparaten kan ik kijken?",
      answer: "Onze service werkt op vrijwel elk apparaat met een internetverbinding: Smart TV's (Samsung, LG, Android TV), smartphones en tablets (iOS & Android), Apple TV, Fire Stick, MAG-boxes, Enigma2-ontvangers en PC/Mac via een mediaspeler zoals VLC of IPTV Smarters Pro. Ons supportteam helpt u gratis bij de installatie op uw specifieke apparaat."
    },
    {
      question: "Hoe snel wordt mijn abonnement geactiveerd?",
      answer: "Nadat uw betaling is bevestigd, ontvangt u uw inloggegevens doorgaans binnen 5 tot 15 minuten via WhatsApp. Ons team is 7 dagen per week beschikbaar om u te helpen met de installatie en eventuele technische vragen. Er is geen wachttijd bij een bank of winkel — alles verloopt digitaal en direct."
    },
    {
      question: "Heb ik een VPN nodig?",
      answer: "Een VPN is niet verplicht om onze service te gebruiken. Wij zorgen voor een veilige en stabiele verbinding via onze EU-servers. Mocht uw internetprovider IPTV-verkeer beperken, dan kunt u optioneel een VPN gebruiken zonder dat dit de kwaliteit beïnvloedt."
    },
    {
      question: "Kan ik op meerdere apparaten tegelijk kijken?",
      answer: "Standaard abonnementen zijn geldig voor 1 apparaat tegelijk. Wilt u op 2 of 3 schermen tegelijk kijken — ideaal voor gezinnen — dan bieden we speciale multi-screen pakketten aan voor 6 of 12 maanden. Neem contact met ons op via WhatsApp voor de beschikbare opties en prijzen."
    },
    {
      question: "Welke betaalmethoden worden geaccepteerd?",
      answer: "U kunt veilig betalen via iDeal, Bancontact, PayPal, creditcard en diverse andere methoden. Na uw aanvraag via WhatsApp sturen wij u alle beschikbare betalingsopties en begeleiden we u stap voor stap. Er zijn geen verborgen kosten of abonnementsverrassingen — de prijs die u ziet is de prijs die u betaalt."
    },
    {
      question: "Is er een proefperiode of geld-terug-garantie?",
      answer: "Wij bieden een 7-dagen niet-goed-geld-terug-garantie op al onze abonnementen. Als u binnen 7 dagen na activatie niet tevreden bent met de service, kunt u een volledige terugbetaling aanvragen. Geen vragen, geen gedoe. Onze klanttevredenheid van 4,9/5 spreekt voor zich."
    },
    {
      question: "Welke zenders zijn beschikbaar?",
      answer: "Ons netwerk faciliteert toegang tot meer dan 35.000 streams, waaronder lokale landelijke netwerken uit Nederland en België, internationale nieuws- en entertainmentzenders uit de UK en USA, uitgebreide dekking van wereldwijde sportevenementen, en specifieke pakketten voor diverse internationale gemeenschappen (waaronder Turks, Marokkaans, Frans en Spaans)."
    },
    {
      question: "Is deze service legaal en veilig?",
      answer: "Ja, onze infrastructuur is 100% veilig en beschermd met end-to-end encryptie. Premium Dutch IPTV levert zelf geen auteursrechtelijk beschermd materiaal, maar biedt uitsluitend een hoogwaardige mediaspeler-infrastructuur en routing via onze servers. U bent zelf verantwoordelijk voor de content die u streamt. Wij respecteren de DMCA-richtlijnen en werken actief mee met rechtmatige verzoeken."
    },
  ];

  return (
    <section id="faq" className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 max-w-3xl">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Veelgestelde Vragen</h2>
          <p className="text-xl text-slate-400">
            Alles wat je moet weten over onze service.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <Accordion className="w-full bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-800 last:border-0 px-6">
                <AccordionTrigger className="text-left text-xl py-6 font-semibold hover:text-blue-500 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 text-lg pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeInUp>
      </div>
    </section>
  );
}
