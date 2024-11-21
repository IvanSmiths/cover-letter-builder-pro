export const getTodayDate = (locale: string): string => {
  const today = new Date();
  switch (locale) {
    case "US":
      return today.toLocaleDateString(locale);
    case "European":
      return today.toLocaleDateString(locale, {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    default:
      return today.toLocaleDateString(locale, {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
  }
};
