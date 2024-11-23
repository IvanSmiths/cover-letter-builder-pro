import { User } from "lucide-react";
import FormHeader from "@/components/dashboard/Form/FormHeader";
import LocalInput from "@/components/dashboard/Form/LocalInput";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SyncedInput } from "@/components/dashboard/Form/SyncedInput";
import { useFormStore } from "@/lib/store";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "@/components/dashboard/Form/FormTypes";

interface PersonalSectionProps {
  form: UseFormReturn<FormValues>;
}

function PersonalSection({ form }: PersonalSectionProps) {
  const {
    personalFirstName,
    setPersonalFirstName,
    personalLastName,
    setPersonalLastName,
  } = useFormStore((state) => state);
  return (
    <AccordionItem value="item-1">
      <AccordionTrigger className="">
        <FormHeader icon={User} title="Personal Info" />
      </AccordionTrigger>
      <AccordionContent>
        <div className="flex flex-col gap-small">
          <div className="flex flex-col gap-small lg:flex-row">
            <SyncedInput
              name="personalFirstName"
              label="First Name"
              form={form}
              stateValue={personalFirstName}
              setStateValue={setPersonalFirstName}
              placeholder="John"
              autoComplete="given-name"
            />
            <SyncedInput
              name="personalLastName"
              label="Last Name"
              autoComplete="family-name"
              placeholder="Doe"
              stateValue={personalLastName}
              form={form}
              setStateValue={setPersonalLastName}
            />
          </div>
          <div className="flex flex-col gap-small lg:flex-row">
            <LocalInput
              field="personalCity"
              label="City"
              autoComplete="address-level2"
              placeholder="Berlin"
            />
            <LocalInput
              field="personalZip"
              label="Zip"
              autoComplete="postal-code"
              placeholder="10117"
            />
          </div>
          <div className="flex flex-col items-end gap-small lg:flex-row">
            <LocalInput
              field="personalNation"
              label="Nation"
              autoComplete="country-name"
              placeholder="Germany"
            />
            <LocalInput
              field="personalAddress"
              label="Address"
              autoComplete="address-line1"
              placeholder="Holiday st. 24"
            />
          </div>
          <div className="flex flex-col gap-small lg:flex-row">
            <LocalInput
              field="personalEmail"
              label="Email"
              autoComplete="email"
              placeholder="john.doe@example.com"
            />
            <LocalInput
              field="personalTelephone"
              label="Telephone"
              autoComplete="tel"
              placeholder="123456789"
            />
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

export default PersonalSection;
