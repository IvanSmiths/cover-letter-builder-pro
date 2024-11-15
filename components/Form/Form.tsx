import { FormEvent, useEffect } from "react";
import { Form as FormComponent } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Separator } from "@/components/ui/separator";
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import CompanyInformation from "./CompanyInformation/CompanyInformation";
import Prompt from "./Prompt/Prompt";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChatFormProps, FormSchema, FormValues } from "./FormTypes";
import { useLanguageStore } from "@/lib/store";

export function Form({
  input,
  isLoading,
  handleInputChange,
  handleSubmit,
  stop,
}: ChatFormProps) {
  const { language, setLanguage } = useLanguageStore();
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      yearsOfExperience: 0,
      recruiter: "",
      prompt: "",
      language,
    },
    mode: "onSubmit",
  });
  useEffect(() => {
    form.setValue("language", language);
  }, [language, form]);
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
                language: validatedData.language,
              },
            });
          })(event);
        }}
      >
        <PersonalInformation form={form} />
        <Separator className="my-small" />
        <CompanyInformation form={form} />
        <Separator className="my-small" />
        <Prompt
          input={input}
          isLoading={isLoading}
          handleInputChange={handleInputChange}
          stop={stop}
          form={form}
        />
      </form>
    </FormComponent>
  );
}
