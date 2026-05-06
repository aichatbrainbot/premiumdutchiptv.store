import type { Locale } from "@/i18n.config";

const dictionaries = {
  nl: () => import("@/dictionaries/nl.json").then((module) => module.default),
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  fr: () => import("@/dictionaries/fr.json").then((module) => module.default),
  de: () => import("@/dictionaries/de.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale): Promise<any> => {
  // Ensure we fallback to the default locale if an invalid one is requested
  if (!dictionaries[locale]) {
    return dictionaries["nl"]() as Promise<any>;
  }
  return dictionaries[locale]() as Promise<any>;
};
