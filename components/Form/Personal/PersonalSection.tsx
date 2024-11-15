import { User } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import PersonalFirstNameInput from "./PersonalFirstNameInput";
import PersonalLastNameInput from "./PersonalLastNameInput";
import PersonalCityInput from "./PersonalCityInput";
import PersonalZipInput from "./PersonalZipInput";
import PersonalNationInput from "./PersonalNationInput";
import { PersonalYearsInput } from "./PersonalYearsInput";
import PersonalEmailInput from "./PersonalEmailInput";
import PersonalTelephoneInput from "./PersonalTelephoneInput";
import { FormValues } from "../FormTypes";
import FormHeader from "@/components/Form/FormHeader";

interface PersonalInformationProps {
  form: UseFormReturn<FormValues>;
}

function PersonalSection({ form }: PersonalInformationProps) {
  return (
    <div className="flex flex-col gap-small">
      <FormHeader icon={User} title="Personal Information" />
      <div className="flex gap-small">
        <PersonalFirstNameInput />
        <PersonalLastNameInput />
      </div>
      <div className="flex gap-small">
        <PersonalCityInput />
        <PersonalZipInput />
      </div>
      <div className="flex items-end gap-small">
        <PersonalNationInput />
        <PersonalYearsInput form={form} />
      </div>
      <div className="flex gap-small">
        <PersonalEmailInput />
        <PersonalTelephoneInput />
      </div>
    </div>
  );
}

export default PersonalSection;
