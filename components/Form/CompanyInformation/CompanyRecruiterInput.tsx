import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import TooltipWrapper from "@/components/ui/TooltipWrapper";
import { useRecruiterStore } from "@/lib/store";
import { FormValues } from "@/components/Form/FormTypes";

interface CompanyRecruiterInputProps {
  form: UseFormReturn<FormValues>;
}

export function CompanyRecruiterInput({ form }: CompanyRecruiterInputProps) {
  const setRecruiterName = useRecruiterStore((state) => state.setRecruiterName);

  useEffect(() => {
    const subscription = form.watch((value) => {
      if (value.recruiter !== undefined) {
        setRecruiterName(value.recruiter);
      }
    });
    return () => subscription.unsubscribe();
  }, [form, setRecruiterName]);

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
                value={field.value ?? ""}
                placeholder="John Doe"
              />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
}
