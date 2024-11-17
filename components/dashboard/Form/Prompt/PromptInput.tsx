import { ChangeEvent } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { FormValues } from "../FormTypes";

interface PromptInputProps {
  input: string;
  isLoading: boolean;
  handleInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  form: UseFormReturn<FormValues>;
}

export function PromptInput({
  input,
  isLoading,
  handleInputChange,
  form,
}: PromptInputProps) {
  return (
    <FormField
      control={form.control}
      name="prompt"
      render={({ field }) => (
        <FormItem>
          <FormMessage />
          <FormLabel>Job Description</FormLabel>
          <FormControl>
            <Textarea
              minLength={10}
              {...field}
              placeholder={
                isLoading
                  ? "Generating . . ."
                  : "Paste the job description here . . . "
              }
              value={input}
              disabled={isLoading}
              onChange={(e) => {
                field.onChange(e); // Inform React Hook Form of the change
                handleInputChange(e); // Call your custom handler
              }}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
