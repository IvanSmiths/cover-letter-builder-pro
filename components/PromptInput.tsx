import { ChangeEvent } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

interface PromptInputProps {
  input: string;
  isLoading: boolean;
  handleInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  form: UseFormReturn<
    { yearsOfExperience: number; prompt: string },
    any,
    undefined
  >;
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
      render={() => (
        <FormItem>
          <FormLabel>JobDescription</FormLabel>
          <FormControl>
            <Textarea
              minLength={10}
              placeholder={
                isLoading
                  ? "Generating . . ."
                  : "Paste the job description here . . . "
              }
              value={input}
              disabled={isLoading}
              onChange={handleInputChange}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
