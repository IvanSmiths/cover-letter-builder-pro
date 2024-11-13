import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";

interface PromptInputProps {
  input: string;
  isLoading: boolean;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function PromptInput({ input, isLoading, handleInputChange }: PromptInputProps) {
  return (
    <Input
      type="text"
      placeholder={
        isLoading
          ? "Generating . . ."
          : "Paste the job description here . . . "
      }
      value={input}
      disabled={isLoading}
      onChange={handleInputChange}
    />
  );
} 