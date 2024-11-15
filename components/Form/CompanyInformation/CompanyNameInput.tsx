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
import TooltipWrapper from "@/components/ui/TooltipWrapper";

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
            <div className="flex items-center gap-smallest">
              <FormLabel>Name</FormLabel>
              <TooltipWrapper
                info="The company structure (LLC, SARL, GmbH, Srl and more) will be added just to the header
               of the cover letter. It will be removed from the cover letter`s body to give a more genuine feel."
              />
            </div>
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
