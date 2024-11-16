import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PersonalFormState {
  PersonalFirstName: string;
  PersonalLastName: string;
  PersonalCity: string;
  PersonalNation: string;
  PersonalEmail: string;
  PersonalTelephone: string;
  PersonalZip: string;
  PersonalAddress: string;
  setField: <K extends keyof PersonalFormState>(
    field: K,
    value: PersonalFormState[K],
  ) => void;
}

interface CompanyFormState {
  companyCity: string;
  companyZip: string;
  companyAddress: string;
  companyNation: string;
  companyFullAddress: string;
  companyRecruiter: any;
  companySubject: string;
  setField: <K extends keyof CompanyFormState>(
    field: K,
    value: CompanyFormState[K],
  ) => void;
}

type PdfStyle = "germanDINNorm" | "style2" | "style3";

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

export const usePersonalFormStore = create<PersonalFormState>()(
  persist(
    (set) => ({
      PersonalFirstName: "",
      PersonalLastName: "",
      PersonalCity: "",
      PersonalTelephone: "",
      PersonalZip: "",
      PersonalAddress: "",
      PersonalEmail: "",
      PersonalNation: "",
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
      companySubject: "",
      setField: (field, value) => set({ [field]: value }),
    }),
    { name: "company-form" },
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

export const useRecruiterStore = create<RecruiterStore>((set) => ({
  recruiterName: "",
  setRecruiterName: (name) => set({ recruiterName: name }),
}));

export const useCompanyNameStore = create<CompanyNameStore>((set) => ({
  companyName: "",
  setCompanyName: (name) => set({ companyName: name }),
}));
