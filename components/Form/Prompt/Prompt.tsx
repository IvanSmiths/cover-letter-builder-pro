import { Sparkles } from "lucide-react";
import { ChangeEvent } from "react";
import { UseFormReturn } from "react-hook-form";
import { PromptInput } from "./PromptInput";
import PromptButton from "./PromptButton";
import { FormValues } from "../FormTypes";

interface PromptSectionProps {
  input: string;
  isLoading: boolean;
  handleInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  stop: () => void;
  form: UseFormReturn<FormValues>;
}

function Prompt({
  input,
  isLoading,
  handleInputChange,
  stop,
  form,
}: PromptSectionProps) {
  return (
    <div className="flex flex-col gap-small">
      <div className="flex items-center gap-small">
        <Sparkles className="h-fit w-regular" />
        <h2 className="text-2xl font-bold">Prompt</h2>
      </div>
      <PromptInput
        input={input}
        isLoading={isLoading}
        handleInputChange={handleInputChange}
        form={form}
      />
      <PromptButton stop={stop} isLoading={isLoading} />
    </div>
  );
}

export default Prompt;
