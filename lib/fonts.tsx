import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Red_Hat_Display } from "next/font/google";

export const red_hat_display: NextFontWithVariable = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-red_hat_display",
  display: "swap",
});
