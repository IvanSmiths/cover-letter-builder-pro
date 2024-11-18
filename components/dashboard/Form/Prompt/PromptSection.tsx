import { Sparkles } from "lucide-react";
import { ChangeEvent } from "react";
import { UseFormReturn } from "react-hook-form";
import { PromptInput } from "./PromptInput";
import PromptButton from "./PromptButton";
import { FormValues } from "../FormTypes";
import FormHeader from "@/components/dashboard/Form/FormHeader";
import { PromptLanguages } from "@/components/dashboard/Form/Prompt/PromptLanguages";
import { PersonalYearsInput } from "@/components/dashboard/Form/Personal/PersonalYearsInput";
import { PromptResumeInput } from "@/components/dashboard/Form/Prompt/PromptResumeInput";

interface PromptSectionProps {
  input: string;
  isLoading: boolean;
  handleInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  stop: () => void;
  form: UseFormReturn<FormValues>;
}

function PromptSection({
  input,
  isLoading,
  handleInputChange,
  stop,
  form,
}: PromptSectionProps) {
  return (
    <div className="flex flex-col gap-small">
      <FormHeader icon={Sparkles} title="Prompt Info" />
      <div className="flex gap-small">
        <PromptLanguages form={form} />
        <PersonalYearsInput form={form} />
      </div>
      <PromptResumeInput form={form} />
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

export default PromptSection;
