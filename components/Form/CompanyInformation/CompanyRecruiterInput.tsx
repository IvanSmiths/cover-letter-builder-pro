import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import TooltipWrapper from "@/components/ui/TooltipWrapper";

interface CompanyRecruiterInputProps {
  form: UseFormReturn<
    { yearsOfExperience: number; prompt: string; recruiter: string },
    any,
    undefined
  >;
}

export function CompanyRecruiterInput({ form }: CompanyRecruiterInputProps) {
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
