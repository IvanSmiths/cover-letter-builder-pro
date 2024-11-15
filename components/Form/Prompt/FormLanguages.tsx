"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "@/components/Form/FormTypes";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const languages = ["English", "German", "French", "Italian", "Japanese"];

export function FormLanguages({ form }: { form: UseFormReturn<FormValues> }) {
  const [open, setOpen] = React.useState(false);

  return (
    <FormField
      control={form.control}
      name="languages"
      render={({ field }) => (
        <FormItem>
          <FormMessage />
          <FormLabel>Languages</FormLabel>
          <FormControl>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[200px] justify-between"
                >
                  {field.value && field.value.length > 0
                    ? languages.find((language) => language === field.value[0])
                    : "Select language..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search language..." />
                  <CommandList>
                    <CommandEmpty>No language found.</CommandEmpty>
                    <CommandGroup>
                      {languages.map((language) => (
                        <CommandItem
                          key={language}
                          onSelect={() => {
                            const newValue = field.value?.includes(language)
                              ? //@ts-ignore
                                field.value.filter((lang) => lang !== language)
                              : [...(field.value || []), language];
                            field.onChange(newValue);
                            setOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              field.value?.includes(language)
                                ? "opacity-100"
                                : "opacity-0",
                            )}
                          />
                          {language}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
