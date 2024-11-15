import { useCompanyNameStore } from "@/lib/store";
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

interface CompanyNameInputProps {
  form: UseFormReturn<FormValues>;
}

const CompanyNameInput = ({ form }: CompanyNameInputProps) => {
  const setCompanyName = useCompanyNameStore((state) => state.setCompanyName);

  useEffect(() => {
    const subscription = form.watch((value) => {
      if (value.companyName !== undefined) {
        setCompanyName(value.companyName);
      }
    });
    return () => subscription.unsubscribe();
  }, [form, setCompanyName]);

  return (
    <div className="w-full">
      <FormField
        control={form.control}
        name="companyName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input
                type="text"
                {...field}
                value={field.value ?? ""}
                placeholder="Apple Inc."
              />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export default CompanyNameInput;
