"use client";

import { usePathname, useRouter } from "next/navigation";
import { i18n } from "@/i18n.config";
import { Globe } from "lucide-react";

export function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const redirectedPathName = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const flags: Record<string, string> = {
    nl: "🇳🇱",
    en: "🇬🇧",
    fr: "🇫🇷",
    de: "🇩🇪",
  };

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors p-2 rounded-lg bg-slate-800/50 border border-slate-700">
        <Globe className="h-4 w-4" />
        <span className="text-sm font-medium uppercase">{currentLocale}</span>
        <span>{flags[currentLocale]}</span>
      </button>

      <div className="absolute right-0 top-full mt-2 w-32 bg-slate-900 border border-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
        <div className="py-2">
          {i18n.locales.map((locale) => (
            <button
              key={locale}
              onClick={() => router.push(redirectedPathName(locale))}
              className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-slate-800 transition-colors ${
                currentLocale === locale ? "text-blue-400 font-bold" : "text-slate-300"
              }`}
            >
              <span className="uppercase">{locale}</span>
              <span>{flags[locale]}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
