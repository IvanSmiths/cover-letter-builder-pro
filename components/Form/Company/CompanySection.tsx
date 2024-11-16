import { UseFormReturn } from "react-hook-form";
import CompanyNameInput from "./CompanyNameInput";
import { CompanyRecruiterInput } from "./CompanyRecruiterInput";
import { FormValues } from "@/components/Form/FormTypes";
import FormHeader from "@/components/Form/FormHeader";
import { Building } from "lucide-react";
import CompanyFullAddressInput from "@/components/Form/Company/CompanyFullAddressInput";
import CompanySubject from "@/components/Form/Company/CompanySubject";

interface CompanyInformationProps {
  form: UseFormReturn<FormValues>;
}

function CompanySection({ form }: CompanyInformationProps) {
  return (
    <div className="flex flex-col gap-small">
      <FormHeader icon={Building} title="Company Info" />
      <CompanyNameInput form={form} />
      <CompanyFullAddressInput />
      <CompanyRecruiterInput form={form} />
      <CompanySubject />
    </div>
  );
}

export default CompanySection;
