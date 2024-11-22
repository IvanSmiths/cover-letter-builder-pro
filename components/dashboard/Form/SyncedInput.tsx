import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import TooltipWrapper from "@/components/ui/TooltipWrapper";

interface SyncedInputProps {
  name: string;
  label: string;
  tooltipInfo?: string;
  placeholder?: string;
  autoComplete?: string;
  form: any;
  stateValue: string;
  setStateValue: (value: string) => void;
}

export function SyncedInput({
  name,
  label,
  tooltipInfo,
  autoComplete,
  placeholder,
  form,
  stateValue,
  setStateValue,
}: SyncedInputProps) {
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
              <Input
                type="text"
                {...field}
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
