import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface UserFormState {
  personalFirstName: string;
  personalLastName: string;
  personalCity: string;
  personalNation: string;
  personalEmail: string;
  personalTelephone: string;
  personalZip: string;
  personalAddress: string;
  letterSubject: string;
  companyFullAddress: string;
  setField: <K extends keyof UserFormState>(
    field: K,
    value: UserFormState[K],
  ) => void;
}

type PdfStyle = "germanDINNorm" | "style2" | "style3";

interface PdfStyleState {
  selectedStyle: PdfStyle;
  setSelectedStyle: (style: PdfStyle) => void;
}

export interface FormState {
  resume: string;
  recruiter: string;
  companyName: string;
  setResume: (value: string) => void;
  setRecruiter: (value: string) => void;
  setCompanyName: (value: string) => void;
}

type LanguageStore = {
  selectedLanguage: string;
  setLanguage: (language: string) => void;
  getLocaleFromLanguage: () => string;
};

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set, get) => ({
      selectedLanguage: "🇺🇸 US English",
      setLanguage: (language: string) => set({ selectedLanguage: language }),
      getLocaleFromLanguage: () => {
        const language = get().selectedLanguage;
        const localeMap: { [key: string]: string } = {
          "🇺🇸 US English": "en-US",
          "🇬🇧 British English": "en-GB",
          "🇩🇪 German": "de",
          "🇮🇹 Italian": "it",
          "🇫🇷 French": "fr",
          "🇪🇸 Spanish": "es",
          "🇵🇹 Portuguese": "pt",
          "🇳🇱 Dutch": "nl",
          "🇸🇪 Swedish": "sv",
          "🇵🇱 Polish": "pl",
          "🇭🇷 Croatian": "hr",
          "🇩🇰 Danish": "da",
          "🇳🇴 Norwegian": "no",
          "🇫🇮 Finnish": "fi",
          "🇧🇬 Bulgarian": "bg",
          "🇭🇺 Hungarian": "hu",
          "🇨🇿 Czech": "cs",
          "🇸🇮 Slovenian": "sl",
          "🇸🇰 Slovak": "sk",
          "🇱🇹 Lithuanian": "lt",
          "🇪🇪 Estonian": "et",
          "🇷🇴 Romanian": "ro",
          "🇦🇱 Albanian": "sq",
          "🇦🇩 Catalan": "ca",
          "🇧🇷 Brazilian Portuguese": "pt-BR",
          "🇨🇦 Canadian French": "fr-CA",
          "🇦🇷 Argentine Spanish": "es-AR",
          "🇲🇽 Mexican Spanish": "es-MX",
          "🇻🇪 Venezuelan Spanish": "es-VE",
          "🇨🇬 Colombian Spanish": "es-CO",
          "🇨🇺 Cuban Spanish": "es-CU",
          "🇨🇱 Chilean Spanish": "es-CL",
        };
        return localeMap[language] || "en-US";
      },
    }),
    {
      name: "language-storage",
    },
  ),
);

export const useUserFormState = create<UserFormState>()(
  persist(
    (set) => ({
      personalFirstName: "",
      personalLastName: "",
      personalCity: "",
      personalTelephone: "",
      personalZip: "",
      personalAddress: "",
      personalEmail: "",
      personalNation: "",
      companyFullAddress: "",
      letterSubject: "",
      setField: (field, value) => set({ [field]: value }),
    }),
    { name: "user-form" },
  ),
);

export const usePdfStyleStore = create<PdfStyleState>()(
  persist(
    (set) => ({
      selectedStyle: "germanDINNorm",
      setSelectedStyle: (style) => set({ selectedStyle: style }),
    }),
    { name: "pdf-style" },
  ),
);

export const useFormStore = create<FormState>()(
  persist(
    (set) => ({
      resume: "",
      recruiter: "",
      companyName: "",
      setResume: (value) => set({ resume: value }),
      setRecruiter: (value) => set({ recruiter: value }),
      setCompanyName: (value) => set({ companyName: value }),
    }),
    {
      name: "form-storage",
    },
  ),
);
