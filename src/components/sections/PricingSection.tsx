// Updated PricingSection with relaxed any types to resolve TypeScript errors
"use client";

import { useState } from "react";
import { Check, CreditCard } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/animations/MotionWrappers";
import NextImage from "next/image";

type Plan = {
  name: string;
  badge?: string;
  bonus?: string;
  price: string;
  oldPrice?: string;
  monthlyPrice: string;
  durationText: string;
  popular: boolean;
  screens?: string;
};

const singlePlans: Plan[] = [
  { name: "3 Maanden", badge: "Meest flexibel", price: "24.99", oldPrice: "34.95", monthlyPrice: "8.32/mnd", durationText: "3 maanden", popular: false },
  { name: "6 Maanden", badge: "Beste waarde", bonus: "+1 maand gratis", price: "34.99", oldPrice: "59.95", monthlyPrice: "5.00/mnd", durationText: "7 maanden totaal", popular: false },
  { name: "12 Maanden", badge: "Meest gekozen", bonus: "+3 maanden gratis", price: "59.99", oldPrice: "69.95", monthlyPrice: "4.00/mnd", durationText: "15 maanden totaal", popular: true },
];

const multiPlans: Plan[] = [
  { name: "6 Maanden", badge: "Multi-screen", screens: "2 apparaten", price: "64.99", monthlyPrice: "10.83/mnd", durationText: "6 maanden", popular: false },
  { name: "6 Maanden", badge: "Multi-screen", screens: "3 apparaten", price: "99.99", monthlyPrice: "16.67/mnd", durationText: "6 maanden", popular: false },
  { name: "12 Maanden", badge: "Multi-screen", screens: "2 apparaten", price: "99.99", monthlyPrice: "8.33/mnd", durationText: "12 maanden", popular: false },
  { name: "12 Maanden", badge: "Meest gekozen", screens: "3 apparaten", price: "149.99", monthlyPrice: "12.50/mnd", durationText: "12 maanden", popular: true },
];

const features = [
  "35.000+ Internationale TV-zenders",
  "179.000+ films & series on-demand",
  "SD/HD/FHD/4K/UHD Beeldkwaliteit",
  "Anti-buffer EU servers (stabiel)",
  "99,99% Stabiliteit",
  "TV Replay & EPG gids",
  "7-dagen niet-goed-geld-terug",
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function PricingSection({ dict, whatsappDict, lang }: { dict?: any; whatsappDict?: any; lang?: string }) {
  const [isMulti, setIsMulti] = useState(false);

  const getWhatsAppLink = (plan: Plan) => {
    if (!whatsappDict) return siteConfig.links.whatsapp;
    const message = `${whatsappDict.hello} ${siteConfig.name},\n\n${whatsappDict.newOrder}\n${whatsappDict.subscription} ${plan.name}\n${plan.screens ? `${whatsappDict.screens} ${plan.screens}` : ""}\n${whatsappDict.price} ${siteConfig.currencySymbol}${plan.price}\n\n${whatsappDict.instructions}`;
    const waNumber = siteConfig.contact.whatsapp.replace(/[^0-9]/g, "");
    return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
  };

  const activePlans = isMulti ? multiPlans : singlePlans;
  const planFeatures: string[] = dict?.features || features;

  return (
    <section id="pricing" className="py-24 relative bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950 -z-10" />
      <div className="container mx-auto px-4">
        <FadeInUp className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{dict?.title || "Kies Jouw Abonnement"}</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">{dict?.subtitle || "Geen verborgen kosten, betaal veilig en geniet direct."}</p>
        </FadeInUp>
        {/* Toggle Switch */}
        <FadeInUp delay={0.1} className="flex justify-center mb-16">
          <div className="bg-slate-900 p-2 rounded-2xl border border-slate-800 flex items-center gap-2 max-w-md w-full shadow-lg">
            <button onClick={() => setIsMulti(false)} className={`flex-1 py-3 px-4 rounded-xl text-lg font-bold transition-all ${!isMulti ? "bg-blue-600 text-white shadow-md" : "bg-transparent text-slate-400 hover:text-white"}`}>
              {dict?.singleScreen || "1 Scherm"}
            </button>
            <button onClick={() => setIsMulti(true)} className={`flex-1 py-3 px-4 rounded-xl text-lg font-bold transition-all ${isMulti ? "bg-blue-600 text-white shadow-md" : "bg-transparent text-slate-400 hover:text-white"}`}>
              {dict?.multiScreen || "Meerdere Schermen"}
            </button>
          </div>
        </FadeInUp>
        <StaggerContainer key={isMulti ? "multi" : "single"} className={`grid grid-cols-1 md:grid-cols-2 ${isMulti ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-8 max-w-7xl mx-auto`}>
          {activePlans.map((plan, index) => (
            <StaggerItem key={index} className={`relative p-8 rounded-2xl border-2 ${plan.popular ? "border-blue-500 bg-blue-900/10 shadow-xl shadow-blue-900/20 z-10" : "border-slate-800 bg-slate-900"} flex flex-col`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-blue-600 text-white text-sm font-bold rounded-full uppercase tracking-wider flex items-center gap-1 shadow-lg shadow-blue-600/30 whitespace-nowrap">
                  🔥 {plan.badge || dict?.mostChosen || "MEEST GEKOZEN"}
                </div>
              )}
              {!plan.popular && plan.badge && (
                <div className="inline-block px-3 py-1 bg-slate-800 text-slate-300 text-xs font-semibold rounded-lg mb-4 w-fit">
                  {plan.badge === "Meest flexibel" ? dict?.mostFlexible : plan.badge === "Beste waarde" ? dict?.bestValue : plan.badge === "Multi-screen" ? dict?.multiScreenBadge : plan.badge}
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2 text-white">{plan.name.replace("Maanden", (dict?.months as string) || "Maanden")}</h3>
              {plan.screens && (
                <div className="text-blue-400 font-medium mb-2">{plan.screens.replace("apparaten", (dict?.devices as string) || "apparaten")}</div>
              )}
              {plan.bonus && (
                <div className="text-green-500 font-bold mb-2 bg-green-500/10 w-fit px-3 py-1 rounded-lg">
                  {plan.bonus === "+1 maand gratis" ? dict?.bonus1 : plan.bonus === "+3 maanden gratis" ? dict?.bonus3 : plan.bonus}
                </div>
              )}
              <div className="flex items-end gap-2 mb-2 mt-4">
                <span className="text-3xl font-semibold text-slate-400">{siteConfig.currencySymbol}</span>
                <span className="text-6xl font-extrabold text-white">{plan.price}</span>
              </div>
              <div className="flex flex-col gap-1 mb-8">
                {plan.oldPrice && (
                  <span className="text-slate-500 line-through text-lg">{dict?.normalPrice || "Normaal"} {siteConfig.currencySymbol}{plan.oldPrice}</span>
                )}
                <span className="text-blue-400 font-medium">{dict?.only || "Slechts"} {siteConfig.currencySymbol}{plan.monthlyPrice.replace("/mnd", (dict?.monthly as string) || "/mnd")}</span>
                <span className="text-slate-400 text-sm">{dict?.for || "Voor"} {plan.durationText.replace("maanden totaal", (dict?.totalMonths as string) || "maanden totaal").replace("maanden", (dict?.months as string) || "maanden").toLowerCase()}</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {planFeatures.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-base lg:text-lg text-slate-300">
                    <Check className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto space-y-4">
                <a href={getWhatsAppLink(plan)} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: plan.popular ? "trust" : "default", className: `w-full h-14 rounded-xl text-xl font-bold ${plan.popular ? "" : "bg-slate-800 hover:bg-slate-700 text-white border-0 shadow-md"}` })}>
                  {dict?.buyNow || "Bestel Nu"}
                </a>
                <p className="text-center text-sm text-slate-400">{plan.bonus ? (dict?.subtextBonus || "Beste maandprijs + gratis extra maanden") : (dict?.subtextDirect || "Direct actief na betaling")}</p>
                <div className="flex flex-col items-center justify-center gap-2 pt-4 border-t border-slate-800">
                  <span className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-2">{dict?.securePayment || "100% Veilig Betalen"}</span>
                  <div className="bg-white/90 hover:bg-white transition-colors py-1.5 px-3 rounded-lg w-full max-w-[240px] shadow-sm">
                    <div className="relative w-full h-7">
                      <NextImage src="/payment-methods.png" alt="Veilig Betalen" fill className="object-contain" sizes="(max-width: 768px) 100vw, 300px" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-slate-400">{dict?.urgency || "Veel bestellingen vandaag · voorkom prijsverhoging"}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
