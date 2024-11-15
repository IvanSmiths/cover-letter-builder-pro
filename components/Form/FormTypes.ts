import { z } from "zod";
import { ChangeEvent, FormEvent } from "react";

export const personalInformationSchema = z.object({
  yearsOfExperience: z.number().min(0).max(100),
});

export const companyInformationSchema = z.object({
  recruiter: z.string().max(50),
});

export const promptSchema = z.object({
  prompt: z.string().min(10, "The prompt must be at least 10 characters!"),
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
