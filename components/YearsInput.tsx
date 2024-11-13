import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";

interface YearsInputProps {
  years: number;
  setYears: (years: number) => void;
  form: UseFormReturn<
    { yearsOfExperience: number; prompt: string },
    any,
    undefined
  >;
}

export function YearsInput({ years, setYears, form }: YearsInputProps) {
  return (
    <FormField
      control={form.control}
      name="yearsOfExperience"
      render={() => (
        <FormItem>
          <FormLabel>YearsOfExperience</FormLabel>
          <FormControl>
            <Input
              type="number"
              value={years}
              onChange={(e) => setYears(parseInt(e.target.value))}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
