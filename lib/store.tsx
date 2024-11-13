import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserFormState {
  firstName: string;
  lastName: string;
  city: string;
  nation: string;
  email: string;
  telephone: string;
  cap: string;
  setField: (field: keyof UserFormState, value: string) => void;
}

type PdfStyle = "style1" | "style2" | "style3";

interface PdfStyleState {
  selectedStyle: PdfStyle;
  setSelectedStyle: (style: PdfStyle) => void;
}

export const useUserFormStore = create<UserFormState>()(
  persist(
    (set) => ({
      firstName: "",
      lastName: "",
      city: "",
      telephone: "",
      email: "",
      nation: "",
      cap: "",
      setField: (field, value) => set({ [field]: value }),
    }),
    { name: "user-form" },
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
