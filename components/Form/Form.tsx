import { ChangeEvent, FormEvent } from "react";
import { PromptInput } from "@/components/Form/PromptInput";
import PromptButton from "@/components/Form/PromptButton";
import { Form as FormComponent } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { YearsInput } from "@/components/Form/YearsInput";
import FirstNameInput from "@/components/Form/FirstNameInput";
import LastNameInput from "@/components/Form/LastNameInput";
import { Building, User } from "lucide-react";
import EmailInput from "@/components/Form/EmailInput";
import TelephoneInput from "@/components/Form/TelephoneInput";
import { Separator } from "@/components/ui/separator";

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
            },
          });
        }}
      >
        <div className="flex items-center gap-small">
          <User className="h-fit w-regular" />
          <h2 className="text-2xl font-bold">Your Information</h2>
        </div>
        <div className="flex gap-small">
          <FirstNameInput />
          <LastNameInput />
        </div>
        <YearsInput form={form} />
        <div className="flex gap-small">
          <EmailInput />
          <TelephoneInput />
        </div>
        <Separator className="my-small" />
        <div className="flex items-center gap-small">
          <Building className="h-fit w-regular" />
          <h2 className="text-2xl font-bold">Company Information</h2>
        </div>
        <PromptInput
          input={input}
          isLoading={isLoading}
          handleInputChange={handleInputChange}
          form={form}
        />
        <PromptButton stop={stop} isLoading={isLoading} />
      </form>
    </FormComponent>
  );
}
