import { MonitorPlay, Smartphone, Tv, Zap } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/animations/MotionWrappers";

export function FeaturesSection() {
  const features = [
    {
      title: "Alle Apparaten",
      description: "Kijk op je Smart TV, Android Box, Smartphone, Tablet of PC.",
      icon: <Tv className="h-8 w-8" />,
    },
    {
      title: "Geen Buffering",
      description: "Onze premium servers garanderen een soepele kijkervaring.",
      icon: <Zap className="h-8 w-8" />,
    },
    {
      title: "Live Sport & PPV",
      description: "Mis nooit meer een belangrijke wedstrijd of PPV evenement.",
      icon: <MonitorPlay className="h-8 w-8" />,
    },
    {
      title: "Overal Beschikbaar",
      description: "Kijk thuis of onderweg, waar je ook bent ter wereld.",
      icon: <Smartphone className="h-8 w-8" />,
    },
  ];

  return (
    <section id="features" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Waarom Voor Ons Kiezen?</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Ontdek waarom duizenden klanten voor onze IPTV service kiezen.
          </p>
        </FadeInUp>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <StaggerItem key={index} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-colors">
              <div className="h-16 w-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-lg text-slate-400">{feature.description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
