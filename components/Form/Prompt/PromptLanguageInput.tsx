import { useLanguageStore } from "@/lib/store";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "@/components/Form/FormTypes";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import TooltipWrapper from "@/components/ui/TooltipWrapper";

interface PromptLanguageInputProps {
  form: UseFormReturn<FormValues>;
}

const PromptLanguageInput = ({ form }: PromptLanguageInputProps) => {
  const setLanguage = useLanguageStore((state) => state.setLanguage);

  useEffect(() => {
    const subscription = form.watch((value) => {
      if (value.language !== undefined) {
        setLanguage(value.language);
      }
    });
    return () => subscription.unsubscribe();
  }, [form, setLanguage]);

  return (
    <div className="w-full">
      <FormField
        control={form.control}
        name="language"
        render={({ field }) => (
          <FormItem>
            <div className="flex items-center gap-smallest">
              <FormLabel>Preferred Language</FormLabel>
              <TooltipWrapper
                info="Leave empty to use the cover letter`s language.
              Only add a language if you want the cover letter to be different than the job posting language."
              />
            </div>
            <FormControl>
              <Input
                type="text"
                {...field}
                value={field.value ?? ""}
                placeholder="English, Spanish, German, etc."
              />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export default PromptLanguageInput;
