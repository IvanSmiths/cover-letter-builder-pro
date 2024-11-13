import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserFormState {
  firstName: string;
  lastName: string;
  city: string;
  nation: string;
  cap: string;
  setField: (field: keyof UserFormState, value: string) => void;
}

type PdfStyle = "style1" | "style2" | "style3"; // Define three possible styles

interface PdfStyleState {
  selectedStyle: PdfStyle; // Track the selected style
  setSelectedStyle: (style: PdfStyle) => void; // Action to set the selected style
}

export const useUserFormStore = create<UserFormState>()(
  persist(
    (set) => ({
      firstName: "",
      lastName: "",
      city: "",
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
      selectedStyle: "style1", // Default style
      setSelectedStyle: (style) => set({ selectedStyle: style }),
    }),
    { name: "pdf-style" }, // Persist the style choice in local storage
  ),
);
