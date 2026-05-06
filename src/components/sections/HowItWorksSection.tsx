import { ShoppingCart, CheckCircle, Play } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/animations/MotionWrappers";

export function HowItWorksSection() {
  const steps = [
    {
      title: "1. Kies een Abonnement",
      description: "Selecteer het pakket dat bij jou past. Hoe langer de periode, hoe meer korting je krijgt.",
      icon: <ShoppingCart className="h-10 w-10 text-blue-500" />,
    },
    {
      title: "2. Veilig Afrekenen",
      description: "Neem contact met ons op via WhatsApp voor een veilige en snelle betaling.",
      icon: <CheckCircle className="h-10 w-10 text-blue-500" />,
    },
    {
      title: "3. Direct Kijken",
      description: "Je ontvangt direct je inloggegevens en instructies om meteen te beginnen met kijken.",
      icon: <Play className="h-10 w-10 text-blue-500" />,
    },
  ];

  return (
    <section className="py-24 bg-slate-900 border-y border-slate-800">
      <div className="container mx-auto px-4">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Hoe Werkt Het?</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            In 3 simpele stappen ben je klaar om te genieten van de beste kwaliteit IPTV.
          </p>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <StaggerItem key={index} className="flex flex-col items-center text-center p-8 bg-slate-950 border border-slate-800 rounded-2xl">
              <div className="h-24 w-24 rounded-full bg-blue-900/20 border-4 border-slate-800 flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
              <p className="text-lg text-slate-400">{step.description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
