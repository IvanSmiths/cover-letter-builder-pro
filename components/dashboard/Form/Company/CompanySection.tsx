import { UseFormReturn } from "react-hook-form";
import { FormValues } from "@/components/dashboard/Form/FormTypes";
import FormHeader from "@/components/dashboard/Form/FormHeader";
import { Building } from "lucide-react";
import CompanyFullAddressInput from "@/components/dashboard/Form/Company/CompanyFullAddressInput";
import CompanySubject from "@/components/dashboard/Form/Company/CompanySubject";
import { SyncedInput } from "../SyncedInput";
import { useFormStore } from "@/lib/store";

interface CompanyInformationProps {
  form: UseFormReturn<FormValues>;
}

function CompanySection({ form }: CompanyInformationProps) {
  const { companyName, setCompanyName, recruiter, setRecruiter } = useFormStore(
    (state) => state,
  );

  return (
    <div className="flex flex-col gap-small">
      <FormHeader icon={Building} title="Company Info" />
      <SyncedInput
        name="companyName"
        label="Company Name"
        tooltipInfo="Enter the name of the company you are applying to."
        placeholder="e.g., Google, Meta, Statworx"
        form={form}
        stateValue={companyName}
        setStateValue={setCompanyName}
      />
      <CompanyFullAddressInput />
      <SyncedInput
        name="recruiter"
        label="Recruiter full name"
        placeholder="John Doe"
        form={form}
        stateValue={recruiter}
        setStateValue={setRecruiter}
      />
      <CompanySubject />
    </div>
  );
}

export default CompanySection;
