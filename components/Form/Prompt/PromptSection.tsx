import { Sparkles } from "lucide-react";
import { ChangeEvent } from "react";
import { UseFormReturn } from "react-hook-form";
import { PromptInput } from "./PromptInput";
import PromptButton from "./PromptButton";
import { FormValues } from "../FormTypes";
import FormHeader from "@/components/Form/FormHeader";
import { PromptLanguages } from "@/components/Form/Prompt/PromptLanguages";
import { PersonalYearsInput } from "@/components/Form/Personal/PersonalYearsInput";
import CompanySubject from "@/components/Form/Company/CompanySubject";

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
      <FormHeader icon={Sparkles} title="PromptSection" />
      <div className="flex gap-small">
        <PromptLanguages form={form} />
        <PersonalYearsInput form={form} />
      </div>
      <CompanySubject />
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
