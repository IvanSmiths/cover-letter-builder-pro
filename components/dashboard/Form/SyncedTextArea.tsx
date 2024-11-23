import { useEffect } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import TooltipWrapper from "@/components/ui/TooltipWrapper";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "@/components/dashboard/Form/FormTypes";

interface SyncedTextAreaProps {
  name: keyof FormValues;
  label: string;
  tooltipInfo?: string;
  placeholder?: string;
  autoComplete?: string;
  form: UseFormReturn<FormValues>;
  stateValue: string;
  setStateValue: (value: string) => void;
}

export function SyncedTextArea({
  name,
  label,
  tooltipInfo,
  autoComplete,
  placeholder,
  form,
  stateValue,
  setStateValue,
}: SyncedTextAreaProps) {
  useEffect(() => {
    form.setValue(name, stateValue);
  }, [stateValue, name, form]);

  return (
    <div className="w-full">
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <div className="flex items-center gap-smallest">
              <FormLabel>{label}</FormLabel>
              {tooltipInfo && <TooltipWrapper info={tooltipInfo} />}
            </div>
            <FormControl>
              <Textarea
                {...field}
                minLength={10}
                value={stateValue}
                autoComplete={autoComplete}
                onChange={(e) => {
                  const value = e.target.value;
                  setStateValue(value);
                  field.onChange(value);
                }}
                onBlur={() => {
                  if (!form.getValues(name)) {
                    setStateValue("");
                  }
                }}
                placeholder={placeholder}
              />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
}
