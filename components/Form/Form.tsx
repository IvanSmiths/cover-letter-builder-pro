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
import { User } from "lucide-react";

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
    defaultValues: {
      yearsOfExperience: 0,
    },
  });

  return (
    <FormComponent {...form}>
      <form
        className="gap-small flex flex-col"
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
        <div className="gap-small flex items-center">
          <User className="w-regular h-fit" />
          <h2 className="text-3xl font-bold">Your Information</h2>
        </div>
        <div className="gap-small flex">
          <FirstNameInput />
          <LastNameInput />
        </div>
        <YearsInput form={form} />
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
