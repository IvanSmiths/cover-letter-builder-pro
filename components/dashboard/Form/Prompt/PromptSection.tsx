import { Sparkles } from "lucide-react";
import { ChangeEvent } from "react";
import { UseFormReturn } from "react-hook-form";
import { PromptInput } from "./PromptInput";
import PromptButton from "./PromptButton";
import { FormValues } from "../FormTypes";
import FormHeader from "@/components/dashboard/Form/FormHeader";
import { PromptLanguages } from "@/components/dashboard/Form/Prompt/PromptLanguages";
import { PersonalYearsInput } from "@/components/dashboard/Form/Personal/PersonalYearsInput";
import { SyncedInput } from "@/components/dashboard/Form/SyncedInput";
import { useFormStore } from "@/lib/store";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  const { resume, setResume } = useFormStore((state) => state);
  return (
    <AccordionItem value="item-3">
      <AccordionTrigger>
        <FormHeader icon={Sparkles} title="Prompt Info" />
      </AccordionTrigger>
      <AccordionContent>
        <div className="flex flex-col gap-small">
          <div className="flex gap-small">
            <PromptLanguages form={form} />
            <PersonalYearsInput form={form} />
          </div>
          <SyncedInput
            name="resume"
            label="Things that you want to highlight"
            tooltipInfo="Leave empty if you want to get an absolute match based on the job posting required skills."
            placeholder="I have worked with TypeScript for 3 years. I have studied machine learning at..."
            form={form}
            stateValue={resume}
            setStateValue={setResume}
          />
          <PromptInput
            input={input}
            isLoading={isLoading}
            handleInputChange={handleInputChange}
            form={form}
          />
          <PromptButton stop={stop} isLoading={isLoading} />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

export default PromptSection;
