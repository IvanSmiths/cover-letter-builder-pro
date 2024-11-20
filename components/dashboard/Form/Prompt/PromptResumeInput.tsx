import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import TooltipWrapper from "@/components/ui/TooltipWrapper";
import { FormValues } from "../FormTypes";
import { Input } from "@/components/ui/input";
import useLocalStorage from "@/lib/hooks/useLocalStorage";

interface PromptResumeInputProps {
  form: UseFormReturn<FormValues>;
}

export function PromptResumeInput({ form }: PromptResumeInputProps) {
  const [storedResume, setStoredResume] = useLocalStorage<string>("resume", "");
  return (
    <div className="w-full">
      <FormField
        control={form.control}
        name="resume"
        render={({ field }) => (
          <FormItem>
            <div className="flex items-center gap-smallest">
              <FormLabel>Things that you want to highlight</FormLabel>
              <TooltipWrapper info="Leave empty if you want to get an absolute match based on the job posting required skills." />
            </div>
            <FormControl>
              <Input
                type="text"
                {...field}
                value={field.value ?? storedResume}
                onChange={(e) => {
                  const value = e.target.value;
                  setStoredResume(value);
                  field.onChange(value);
                }}
                placeholder="I have worked with TypeScript for 3 years. I have studied machine learning at..."
              />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
}
