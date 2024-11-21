"use client";

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
import { FormValues } from "@/components/dashboard/Form/FormTypes";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useEffect, useState } from "react";
import { useLanguageStore } from "@/lib/store";
import { LANGUAGES } from "@/lib/languages";
import Flag from "react-flagkit";

export function PromptLanguages({ form }: { form: UseFormReturn<FormValues> }) {
  const [open, setOpen] = useState(false);
  const { selectedLanguage, setLanguage } = useLanguageStore();

  useEffect(() => {
    form.setValue("languages", selectedLanguage.name);
  }, [form, selectedLanguage.name]);

  return (
    <FormField
      control={form.control}
      name="languages"
      render={({ field }) => (
        <FormItem className="flex flex-col justify-end gap-2">
          <FormMessage />
          <FormLabel>Language</FormLabel>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger
              className="border border-lightSecondary py-5 dark:border-darkSecondary"
              asChild
            >
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className={cn(
                    "w-[200px] justify-between",
                    !field.value && "text-muted-foreground",
                  )}
                >
                  {field.value ? (
                    <div className="flex items-center">
                      <Flag
                        country={
                          LANGUAGES.find(
                            (language) => language.name === field.value,
                          )?.code || ""
                        }
                      />
                      <span className="ml-2">{field.value}</span>
                    </div>
                  ) : (
                    "Select language"
                  )}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search language..." />
                <CommandList>
                  <CommandEmpty>No language found.</CommandEmpty>
                  <CommandGroup>
                    {LANGUAGES.map((language) => (
                      <CommandItem
                        value={language.name}
                        key={language.name}
                        onSelect={() => {
                          form.setValue("languages", language.name);
                          setLanguage(language.name);
                          setOpen(false);
                        }}
                      >
                        <Flag country={language.code} /> {language.name}
                        <Check
                          className={cn(
                            "ml-auto",
                            language.name === field.value
                              ? "opacity-100"
                              : "opacity-0",
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </FormItem>
      )}
    />
  );
}
