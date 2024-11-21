import { Sparkles } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { PromptInput } from "./PromptInput";
import PromptButton from "./PromptButton";
import { FormValues } from "../FormTypes";
import FormHeader from "@/components/dashboard/Form/FormHeader";
import { PromptLanguages } from "@/components/dashboard/Form/Prompt/PromptLanguages";
import { PersonalYearsInput } from "@/components/dashboard/Form/Personal/PersonalYearsInput";
import { SyncedInput } from "@/components/dashboard/Form/SyncedInput";
import { useDatePreferencesStore, useFormStore } from "@/lib/store";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getTodayDate } from "@/lib/Pdf/getTodayDate";

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
  const { locale, setLocale } = useDatePreferencesStore();
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    setCurrentDate(getTodayDate(locale));
  }, [locale]);

  const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(e.target.value);
  };

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
          Select Locale:
          <select value={locale} onChange={handleLocaleChange}>
            <option value="en-US">English (US)</option>
            <option value="en-GB">English (UK)</option>
            <option value="de-DE">German</option>
            <option value="fr-FR">French</option>
            <option value="it-IT">Italian</option>
            <option value="es-ES">Spanish</option>
            <option value="pt-PT">Portuguese</option>
          </select>
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
