export const getTodayDate = (format: string): string => {
  const today = new Date();
  switch (format) {
    case "US":
      return today.toLocaleDateString("en-US");
    case "European":
      return today.toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    default:
      return today.toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
  }
};
