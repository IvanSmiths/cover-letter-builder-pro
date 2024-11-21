import { useLanguageStore } from "@/lib/store";

export const getTodayDate = (): string => {
  const getLocaleFromLanguage =
    useLanguageStore.getState().getLocaleFromLanguage;
  const locale = getLocaleFromLanguage();
  const today = new Date();

  if (locale === "en-US") {
    return today.toLocaleDateString(locale);
  }

  return today.toLocaleDateString(locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};
