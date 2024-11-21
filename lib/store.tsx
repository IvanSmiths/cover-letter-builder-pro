import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LANGUAGES } from "@/lib/languages";

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

export type Language = {
  code: string;
  name: string;
  locale: string;
};

type LanguageStore = {
  selectedLanguage: Language;
  setLanguage: (languageName: string) => void;
};

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      selectedLanguage: LANGUAGES[0],
      setLanguage: (languageName: string) => {
        const language =
          LANGUAGES.find((lang) => lang.name === languageName) || LANGUAGES[0];
        set({ selectedLanguage: language });
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
