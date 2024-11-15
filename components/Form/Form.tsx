import { ChangeEvent, FormEvent } from "react";
import { Form as FormComponent } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Separator } from "@/components/ui/separator";
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import CompanyInformation from "./CompanyInformation/CompanyInformation";
import Prompt from "./Prompt/Prompt";

interface ChatFormProps {
  input: string;
  isLoading: boolean;
  handleInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>, data?: any) => void;
  stop: () => void;
}

export function Form({
  input,
  isLoading,
  handleInputChange,
  handleSubmit,
  stop,
}: ChatFormProps) {
  const FormSchema = z.object({
    yearsOfExperience: z.number().min(0).max(100),
    prompt: z.string().min(10),
    recruiter: z.string().min(2),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <FormComponent {...form}>
      <form
        className="flex flex-col gap-small"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(event, {
            data: {
              prompt: input,
              yearsOfExperience: form.getValues("yearsOfExperience"),
              recruiter: form.getValues("recruiter"),
            },
          });
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
