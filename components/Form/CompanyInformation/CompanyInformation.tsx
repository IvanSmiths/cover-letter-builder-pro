import { UseFormReturn } from "react-hook-form";
import CompanyNameInput from "./CompanyNameInput";
import { CompanyRecruiterInput } from "./CompanyRecruiterInput";
import { FormValues } from "@/components/Form/FormTypes";
import FormHeader from "@/components/Form/FormHeader";
import { Building } from "lucide-react";
import CompanyFullAddressInput from "@/components/Form/CompanyInformation/CompanyFullAddressInput";

interface CompanyInformationProps {
  form: UseFormReturn<FormValues>;
}

function CompanyInformation({ form }: CompanyInformationProps) {
  return (
    <div className="flex flex-col gap-small">
      <FormHeader icon={Building} title="Company Information" />
      <CompanyNameInput form={form} />
      <CompanyFullAddressInput />
      <CompanyRecruiterInput form={form} />
    </div>
  );
}

export default CompanyInformation;
