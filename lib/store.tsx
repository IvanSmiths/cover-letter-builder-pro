import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface PersonalFormState {
  PersonalFirstName: string;
  PersonalLastName: string;
  PersonalCity: string;
  PersonalNation: string;
  PersonalEmail: string;
  PersonalTelephone: string;
  PersonalZip: string;
  PersonalAddress: string;
  LetterSubject: string;
  CompanyFullAddress: string;
  setField: <K extends keyof PersonalFormState>(
    field: K,
    value: PersonalFormState[K],
  ) => void;
}

type PdfStyle = "germanDINNorm" | "style2" | "style3";

interface PdfStyleState {
  selectedStyle: PdfStyle;
  setSelectedStyle: (style: PdfStyle) => void;
}

interface DateFormatState {
  format: string | null;
  setFormat: (format: string) => void;
}

interface FormState {
  resume: string;
  recruiter: string;
  companyName: string;
  setResume: (value: string) => void;
  setRecruiter: (value: string) => void;
  setCompanyName: (value: string) => void;
}

export const DEFAULT_FORMAT = "yyyy-MM-dd";

const getInitialState = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("dateFormat") || DEFAULT_FORMAT;
  }
  return DEFAULT_FORMAT;
};

export const useDateFormatStore = create<DateFormatState>()(
  persist(
    (set) => ({
      format: getInitialState(),
      setFormat: (format: string) => {
        if (typeof window !== "undefined") {
          localStorage.setItem("dateFormat", format);
        }
        set({ format });
      },
    }),
    { name: "date-format" },
  ),
);

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
      CompanyFullAddress: "",
      LetterSubject: "",
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
