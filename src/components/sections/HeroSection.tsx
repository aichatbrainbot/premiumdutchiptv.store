"use client";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ArrowRight, CheckCircle2, PlayCircle, Star, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
import NextImage from "next/image";

export function HeroSection({ dict, lang }: { dict: Record<string, string>; lang: string }) {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 lg:pt-32 lg:pb-32 bg-slate-950">
      {/* Background Layer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 -z-10" 
      />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 mb-8"
            >
              <ShieldCheck className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-semibold text-blue-200 uppercase tracking-wider">{dict.badge}</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white leading-tight"
            >
              {dict.title1} <br />
              <span className="text-blue-500">{dict.title2}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-slate-300 mb-10 leading-relaxed max-w-lg"
            >
              {dict.subtitle}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-10"
            >
              <a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "trust", size: "lg", className: "w-full sm:w-auto text-xl font-bold h-16 px-10" })}>
                {dict.ctaPrimary} <ArrowRight className="ml-2 h-6 w-6" />
              </a>
              <a href={`/${lang}/pricing`} className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto text-xl font-bold h-16 px-10 bg-slate-800 border-slate-700 hover:bg-slate-700 text-white" })}>
                {dict.ctaSecondary} <PlayCircle className="ml-2 h-6 w-6" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex items-center gap-4 text-slate-400"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-500 fill-yellow-500 drop-shadow-md" />
                ))}
              </div>
              <span className="font-medium text-lg text-slate-300">{dict.rating}</span>
            </motion.div>
          </div>

          {/* Right Column: Visual Composition with Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Main Image Element */}
            <div className="relative aspect-auto rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 z-10 bg-slate-900 flex items-center justify-center">
              <NextImage 
                src="/hero.png" 
                alt="Premium IPTV op alle apparaten" 
                width={800} 
                height={600} 
                className="w-full h-auto object-cover object-center"
                priority
              />
            </div>

            {/* Floating Trust Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -left-8 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl z-20 flex items-center gap-3"
            >
              <div className="h-10 w-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <div className="text-white font-bold">15.000+</div>
                <div className="text-sm text-slate-400">TV Zenders</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -right-8 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl z-20 flex items-center gap-3"
            >
              <div className="h-10 w-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <div className="text-white font-bold">Anti-Buffer</div>
                <div className="text-sm text-slate-400">EU Servers</div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
