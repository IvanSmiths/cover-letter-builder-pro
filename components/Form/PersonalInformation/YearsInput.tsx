import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "../FormTypes";
import TooltipWrapper from "@/components/ui/TooltipWrapper";

interface YearsInputProps {
  form: UseFormReturn<FormValues>;
}

export function YearsInput({ form }: YearsInputProps) {
  return (
    <div className="w-full">
      <FormField
        control={form.control}
        name="yearsOfExperience"
        render={({ field }) => (
          <FormItem>
            <div className="flex items-center gap-smallest">
              <FormLabel>Years of Experience</FormLabel>
              <TooltipWrapper info="Leave at 0 if you don`t have any professional experience." />
            </div>
            <FormControl>
              <Input
                placeholder="2"
                max={100}
                type="number"
                {...field}
                onChange={(e) => {
                  const value =
                    e.target.value === "" ? "" : parseInt(e.target.value);

                  if (value === "" || (value >= 0 && value <= 100)) {
                    field.onChange(value);
                  } else if (value > 100) {
                    field.onChange(100);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "e" || e.key === "-" || e.key === "+") {
                    e.preventDefault();
                  }
                }}
                value={
                  field.value !== undefined && !isNaN(field.value)
                    ? field.value
                    : ""
                }
              />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
}
