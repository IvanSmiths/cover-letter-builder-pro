import { FormEvent } from "react";
import { Form as FormComponent } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import PersonalSection from "@/components/dashboard/Form/Personal/PersonalSection";
import CompanySection from "@/components/dashboard/Form/Company/CompanySection";
import PromptSection from "./Prompt/PromptSection";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChatFormProps, FormSchema, FormValues } from "./FormTypes";
import { useFormStore } from "@/lib/store";
import { Accordion } from "@/components/ui/accordion";

export function Form({
  input,
  isLoading,
  handleInputChange,
  handleSubmit,
  stop,
}: ChatFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      yearsOfExperience: 0,
      languages: "🇺🇸 US English",
      resume: useFormStore.getState().resume,
      recruiter: useFormStore.getState().recruiter,
    },
    mode: "onSubmit",
  });

  return (
    <FormComponent {...form}>
      <form
        className="flex flex-col gap-small"
        onSubmit={(event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          form.handleSubmit((validatedData) => {
            handleSubmit(event, {
              data: {
                prompt: input,
                yearsOfExperience: validatedData.yearsOfExperience,
                recruiter: validatedData.recruiter,
                companyName: validatedData.companyName,
                languages: validatedData.languages,
                resume: validatedData.resume,
              },
            });
          })(event);
        }}
      >
        <Accordion
          type="multiple"
          defaultValue={["item-1", "item-2", "item-3"]}
        >
          <PersonalSection />
          <CompanySection form={form} />
          <PromptSection
            input={input}
            isLoading={isLoading}
            handleInputChange={handleInputChange}
            stop={stop}
            form={form}
          />
        </Accordion>
      </form>
    </FormComponent>
  );
}
