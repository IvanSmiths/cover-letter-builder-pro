import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "../FormTypes";

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
            <FormLabel>Years of Experience</FormLabel>
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
