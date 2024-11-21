import { useLanguageStore } from "@/lib/store";

export const getTodayDate = (): string => {
  const { selectedLanguage } = useLanguageStore.getState();
  const today = new Date();

  if (selectedLanguage.locale === "en-US") {
    return today.toLocaleDateString(selectedLanguage.locale);
  }

  return today.toLocaleDateString(selectedLanguage.locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};
