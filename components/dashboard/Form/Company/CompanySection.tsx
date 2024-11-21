import { UseFormReturn } from "react-hook-form";
import { FormValues } from "@/components/dashboard/Form/FormTypes";
import FormHeader from "@/components/dashboard/Form/FormHeader";
import { Building } from "lucide-react";
import { SyncedInput } from "../SyncedInput";
import { useFormStore } from "@/lib/store";
import LocalInput from "../LocalInput";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CompanyInformationProps {
  form: UseFormReturn<FormValues>;
}

function CompanySection({ form }: CompanyInformationProps) {
  const { companyName, setCompanyName, recruiter, setRecruiter } = useFormStore(
    (state) => state,
  );

  return (
    <AccordionItem value="item-2">
      <AccordionTrigger>
        <FormHeader icon={Building} title="Company Info" />
      </AccordionTrigger>
      <AccordionContent>
        <div className="flex flex-col gap-small">
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
            field="companyFullAddress"
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
            field="letterSubject"
            label="Cover Letter Subject"
            placeholder="Application as a Software Engineer"
          />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

export default CompanySection;
