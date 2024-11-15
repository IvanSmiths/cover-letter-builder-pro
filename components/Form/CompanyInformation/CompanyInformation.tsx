import { Building } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import CompanyNameInput from "./CompanyNameInput";
import CompanyFullAddressInput from "./CompanyFullAddressInput";
import { CompanyRecruiterInput } from "./CompanyRecruiterInput";
import { FormValues } from "@/components/Form/FormTypes";

interface CompanyInformationProps {
  form: UseFormReturn<FormValues>;
}

function CompanyInformation({ form }: CompanyInformationProps) {
  return (
    <div className="flex flex-col gap-small">
      <div className="flex items-center gap-small">
        <Building className="h-fit w-regular" />
        <h2 className="text-2xl font-bold">Company Information</h2>
      </div>
      <CompanyNameInput form={form} />
      <CompanyFullAddressInput />
      <CompanyRecruiterInput form={form} />
    </div>
  );
}

export default CompanyInformation;
