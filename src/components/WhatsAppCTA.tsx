"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { MessageCircle, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function WhatsAppCTA() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Show the "Need help?" message after 3 seconds
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white text-slate-900 px-4 py-3 rounded-2xl shadow-xl shadow-black/20 flex items-center gap-3 mr-2 relative origin-bottom-right"
          >
            <div className="flex-1">
              <p className="font-bold text-sm">Heb je vragen?</p>
              <p className="text-xs text-slate-500">Chat met ons, wij helpen direct!</p>
            </div>
            <button 
              onClick={() => setShowMessage(false)}
              className="text-slate-400 hover:text-slate-600 transition-colors bg-slate-100 p-1 rounded-full"
              aria-label="Close message"
            >
              <X className="h-3 w-3" />
            </button>
            {/* Triangle pointer */}
            <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={siteConfig.links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/30 transition-transform hover:scale-110 focus:outline-none"
        aria-label="Contact us on WhatsApp"
        onClick={() => setShowMessage(false)}
      >
        <MessageCircle className="h-7 w-7" />
        
        {/* Notification Badge */}
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white border-2 border-slate-950 animate-pulse">
          1
        </span>
      </a>
    </div>
  );
}
