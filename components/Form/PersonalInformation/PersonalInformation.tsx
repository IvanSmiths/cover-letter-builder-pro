import { User } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import FirstNameInput from "./FirstNameInput";
import LastNameInput from "./LastNameInput";
import PersonalCityInput from "./PersonalCityInput";
import PersonalZipInput from "./PersonalZipInput";
import PersonalNationInput from "./PersonalNationInput";
import { YearsInput } from "./YearsInput";
import EmailInput from "./EmailInput";
import TelephoneInput from "./TelephoneInput";
import { FormValues } from "../FormTypes";
import FormHeader from "@/components/Form/FormHeader";

interface PersonalInformationProps {
  form: UseFormReturn<FormValues>;
}

function PersonalInformation({ form }: PersonalInformationProps) {
  return (
    <div className="flex flex-col gap-small">
      <FormHeader icon={User} title="Personal Information" />
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
    </div>
  );
}

export default PersonalInformation;
