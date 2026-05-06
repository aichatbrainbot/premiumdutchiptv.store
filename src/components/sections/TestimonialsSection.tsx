import { Star } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/animations/MotionWrappers";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Mark V.",
      role: "Systeembeheerder, Amsterdam",
      content: "Als techneut ben ik erg kritisch op latency en server uptime. Premium Dutch IPTV levert uitzonderlijk werk. Hun netwerk routing zorgt ervoor dat live sport streams zonder enige hapering of buffer-cirkels draaien.",
      rating: 5,
    },
    {
      name: "Sarah D.",
      role: "Rotterdam",
      content: "Wat me vooral opvalt is de fantastische integratie met TiviMate. De EPG (tv-gids) laadt bliksemsnel in en is altijd up-to-date. Bovendien reageert hun supportteam via WhatsApp razendsnel als je hulp nodig hebt met configureren.",
      rating: 5,
    },
    {
      name: "Thomas B.",
      role: "Expat, Berlijn",
      content: "Ik heb veel providers geprobeerd om Nederlandse zenders in het buitenland te kijken, maar de meeste waren instabiel in de avonduren. Deze infrastructuur is 100% stabiel, zelfs tijdens grote live evenementen. Absoluut de beste keuze.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <FadeInUp className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-bold text-yellow-500 uppercase tracking-wider">4.9/5 Klanttevredenheid</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Wat Onze Klanten Zeggen</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Sluit je aan bij duizenden tevreden klanten die al genieten van onze premium service.
          </p>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index} className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-lg text-slate-300 italic mb-8 leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
              <div>
                <div className="font-bold text-xl text-white">{testimonial.name}</div>
                <div className="text-base text-slate-500">{testimonial.role}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
