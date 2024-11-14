import { ChangeEvent, FormEvent } from "react";
import { PromptInput } from "@/components/Form/PromptInput";
import PromptButton from "@/components/Form/PromptButton";
import { Form as FormComponent } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { YearsInput } from "@/components/Form/PersonalInformation/YearsInput";
import FirstNameInput from "@/components/Form/PersonalInformation/FirstNameInput";
import LastNameInput from "@/components/Form/PersonalInformation/LastNameInput";
import { Building, Sparkles, User } from "lucide-react";
import EmailInput from "@/components/Form/PersonalInformation/EmailInput";
import TelephoneInput from "@/components/Form/PersonalInformation/TelephoneInput";
import { Separator } from "@/components/ui/separator";
import PersonalCityInput from "@/components/Form/PersonalInformation/PersonalCityInput";
import PersonalZipInput from "@/components/Form/PersonalInformation/PersonalZipInput";
import PersonalNationInput from "@/components/Form/PersonalInformation/PersonalNationInput";
import CompanyNameInput from "@/components/Form/CompanyInformation/CompanyNameInput";
import CompanyFullAddressInput from "@/components/Form/CompanyInformation/CompanyFullAddressInput";
import { CompanyRecruiterInput } from "@/components/Form/CompanyInformation/CompanyRecruiterInput";

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
        <div className="flex items-center gap-small">
          <User className="h-fit w-regular" />
          <h2 className="text-2xl font-bold">Your Information</h2>
        </div>
        <div className="flex gap-small">
          <FirstNameInput />
          <LastNameInput />
        </div>
        <div className="flex gap-small">
          <PersonalCityInput />
          <PersonalZipInput />
        </div>
        <div className="flex items-end gap-small">
          <PersonalNationInput />
          <YearsInput form={form} />
        </div>
        <div className="flex gap-small">
          <EmailInput />
          <TelephoneInput />
        </div>
        <Separator className="my-small" />
        <div className="flex items-center gap-small">
          <Building className="h-fit w-regular" />
          <h2 className="text-2xl font-bold">Company Information</h2>
        </div>
        <CompanyNameInput />
        <CompanyFullAddressInput />
        <CompanyRecruiterInput form={form} />
        <Separator className="my-small" />
        <div className="flex items-center gap-small">
          <Sparkles className="h-fit w-regular" />
          <h2 className="text-2xl font-bold">Prompt</h2>
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
