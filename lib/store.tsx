import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserFormState {
  firstName: string;
  lastName: string;
  city: string;
  nation: string;
  email: string;
  telephone: string;
  zip: string;
  setField: <K extends keyof UserFormState>(
    field: K,
    value: UserFormState[K],
  ) => void;
}

interface CompanyFormState {
  companyCity: string;
  companyZip: string;
  companyAddress: string;
  companyNation: string;
  companyFullAddress: string;
  companyRecruiter: any;
  setField: <K extends keyof CompanyFormState>(
    field: K,
    value: CompanyFormState[K],
  ) => void;
}

type PdfStyle = "style1" | "style2" | "style3";

interface PdfStyleState {
  selectedStyle: PdfStyle;
  setSelectedStyle: (style: PdfStyle) => void;
}

interface RecruiterStore {
  recruiterName: string;
  setRecruiterName: (name: string) => void;
}

interface CompanyNameStore {
  companyName: string;
  setCompanyName: (name: string) => void;
}

export const useUserFormStore = create<UserFormState>()(
  persist(
    (set) => ({
      firstName: "",
      lastName: "",
      city: "",
      telephone: "",
      zip: "",
      email: "",
      nation: "",
      setField: (field, value) => set({ [field]: value }),
    }),
    { name: "user-form" },
  ),
);

export const useCompanyFormStore = create<CompanyFormState>()(
  persist(
    (set) => ({
      companyCity: "",
      companyZip: "",
      companyAddress: "",
      companyNation: "",
      companyFullAddress: "",
      companyRecruiter: "",
      setField: (field, value) => set({ [field]: value }),
    }),
    { name: "company-form" },
  ),
);

export const usePdfStyleStore = create<PdfStyleState>()(
  persist(
    (set) => ({
      selectedStyle: "style1",
      setSelectedStyle: (style) => set({ selectedStyle: style }),
    }),
    { name: "pdf-style" },
  ),
);

export const useRecruiterStore = create<RecruiterStore>((set) => ({
  recruiterName: "",
  setRecruiterName: (name) => set({ recruiterName: name }),
}));

export const useCompanyNameStore = create<CompanyNameStore>((set) => ({
  companyName: "",
  setCompanyName: (name) => set({ companyName: name }),
}));

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      languages: [
        { value: "English", label: "English" },
        { value: "German", label: "German" },
        { value: "French", label: "French" },
        { value: "Italian", label: "Italian" },
        { value: "Japanese", label: "Japanese" },
      ],
      languageDef: "",
      setLanguage: (languageDef) => set({ languageDef }), // Set the language
      resetLanguage: () => set({ languageDef: "" }), // Reset the language to default
    }),
    {
      name: "language-storage",
    },
  ),
);

interface LanguageStore {
  languages: { value: string; label: string }[]; // Array of available languages
  languageDef: string; // Current selected language
  setLanguage: (name: string) => void; // Method to set the language
  resetLanguage: () => void; // Method to reset the language to default
}
