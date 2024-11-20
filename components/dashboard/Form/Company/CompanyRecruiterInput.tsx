import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import TooltipWrapper from "@/components/ui/TooltipWrapper";
import { FormValues } from "../FormTypes";
import { useRecruiterStore } from "@/lib/store";
import { useEffect } from "react";

interface CompanyRecruiterInputProps {
  form: UseFormReturn<FormValues>;
}

export function CompanyRecruiterInput({ form }: CompanyRecruiterInputProps) {
  const { recruiter, setRecruiter } = useRecruiterStore();

  useEffect(() => {
    form.setValue("recruiter", recruiter); // Set default value for React Hook Form
  }, [recruiter, form]);
  return (
    <div className="w-full">
      <FormField
        control={form.control}
        name="recruiter"
        render={({ field }) => (
          <FormItem>
            <div className="flex items-center gap-smallest">
              <FormLabel>Recruiter Full Name</FormLabel>
              <TooltipWrapper info="Leave empty if you don`t know the name of the recruiter." />
            </div>
            <FormControl>
              <Input
                type="text"
                {...field}
                value={recruiter} // Use Zustand state
                onChange={(e) => {
                  const value = e.target.value;
                  setRecruiter(value); // Update Zustand and localStorage
                  field.onChange(value); // Sync with React Hook Form
                }}
                placeholder="John Doe"
              />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
}
