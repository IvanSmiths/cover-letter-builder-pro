import { z } from "zod";
import { ChangeEvent, FormEvent } from "react";

export const personalInformationSchema = z.object({
  yearsOfExperience: z.number().min(0).max(100),
  personalFirstName: z.string().min(1, "Enter your first name").max(100),
  personalLastName: z.string().min(1, "Enter your last name").max(100),
  personalCity: z.string().nullable(),
  personalZip: z.string().nullable(),
  personalEmail: z.string().nullable(),
  personalTelephone: z.string().nullable(),
});

export const companyInformationSchema = z.object({
  recruiter: z.string().nullable(),
  companyName: z.string().min(1, "Enter a company name").max(100),
  companyFullAddress: z.string().nullable(),
  letterSubject: z.string().min(1, "Enter the letter subject").max(100),
});

export const promptSchema = z.object({
  prompt: z.string().min(10, "The prompt must be at least 10 characters."),
  languages: z.string({
    required_error: "Please select a language.",
  }),
  resume: z.string().nullable(),
});

export const FormSchema = z.object({
  ...personalInformationSchema.shape,
  ...companyInformationSchema.shape,
  ...promptSchema.shape,
});

export type FormValues = z.infer<typeof FormSchema>;

export interface ChatFormProps {
  input: string;
  isLoading: boolean;
  handleInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (
    e: FormEvent<HTMLFormElement>,
    data?: { data: Partial<FormValues> },
  ) => void;
  stop: () => void;
}
