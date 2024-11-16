import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PersonalFormState {
  firstName: string;
  lastName: string;
  city: string;
  nation: string;
  email: string;
  telephone: string;
  zip: string;
  address: string;
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
      firstName: "",
      lastName: "",
      city: "",
      telephone: "",
      zip: "",
      address: "",
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
