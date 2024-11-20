import { UseFormReturn } from "react-hook-form";
import { FormValues } from "@/components/dashboard/Form/FormTypes";
import FormHeader from "@/components/dashboard/Form/FormHeader";
import { Building } from "lucide-react";
import { SyncedInput } from "../SyncedInput";
import { useFormStore } from "@/lib/store";
import LocalInput from "../LocalInput";

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
      <LocalInput
        field="CompanyFullAddress"
        label="Full Address"
        placeholder="Friedrich-Ebert-Anlage 29, 60308, Frankfurt am Main"
      />
      <SyncedInput
        name="recruiter"
        label="Recruiter full name"
        placeholder="John Doe"
        form={form}
        stateValue={recruiter}
        setStateValue={setRecruiter}
      />
      <LocalInput
        field="LetterSubject"
        label="Cover Letter Subject"
        placeholder="Application as a Software Engineer"
      />
    </div>
  );
}

export default CompanySection;
