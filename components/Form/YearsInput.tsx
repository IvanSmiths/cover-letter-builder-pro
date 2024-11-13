import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";

interface YearsInputProps {
  form: UseFormReturn<
    { yearsOfExperience: number; prompt: string },
    any,
    undefined
  >;
}

export function YearsInput({ form }: YearsInputProps) {
  return (
    <FormField
      control={form.control}
      name="yearsOfExperience"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Years of Experience</FormLabel>
          <FormControl>
            <Input
              min={0}
              max={100}
              autoComplete="years-of-experience"
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
  );
}
