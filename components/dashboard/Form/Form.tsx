import { Accordion } from "@/components/ui/accordion";
import { Form as FormComponent } from "@/components/ui/form";
import PersonalSection from "@/components/dashboard/Form/Personal/PersonalSection";
import CompanySection from "@/components/dashboard/Form/Company/CompanySection";
import PromptSection from "@/components/dashboard/Form/Prompt/PromptSection";
import { UseFormReturn } from "react-hook-form";
import { ChatRequestOptions } from "ai";

interface FormData {
  yearsOfExperience: number;
  recruiter: string;
  companyName: string;
  languages: string;
  resume: string;
  personalFirstName: string;
  personalLastName: string;
}

interface FormProps {
  form: UseFormReturn<FormData>;
  input: string;
  handleSubmit: (
    event?: string,
    chatRequestOptions?: ChatRequestOptions | FormData,
  ) => void;
  handleInputChange: (e: any) => void;
  isLoading: boolean;
  stop: () => void;
}

export const Form = ({
  form,
  input,
  handleSubmit,
  handleInputChange,
  isLoading,
  stop,
}: FormProps) => {
  const onSubmit = async (validatedData: FormData) => {
    try {
      handleSubmit(input, {
        yearsOfExperience: validatedData.yearsOfExperience,
        recruiter: validatedData.recruiter,
        companyName: validatedData.companyName,
        languages: validatedData.languages,
        resume: validatedData.resume,
        personalFirstName: validatedData.personalFirstName,
        personalLastName: validatedData.personalLastName,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <FormComponent {...form}>
      <form
        className="flex flex-col gap-small"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Accordion
          type="multiple"
          defaultValue={["item-1", "item-2", "item-3"]}
        >
          <PersonalSection form={form} />
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
};
