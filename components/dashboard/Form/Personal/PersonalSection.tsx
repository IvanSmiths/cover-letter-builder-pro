import { User } from "lucide-react";
import FormHeader from "@/components/dashboard/Form/FormHeader";
import LocalInput from "@/components/dashboard/Form/LocalInput";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function PersonalSection() {
  return (
    <AccordionItem value="item-1">
      <AccordionTrigger className="">
        <FormHeader icon={User} title="Personal Info" />
      </AccordionTrigger>
      <AccordionContent>
        <div className="flex flex-col gap-small">
          <div className="flex gap-small">
            <LocalInput
              field="personalFirstName"
              label="First Name"
              autoComplete="given-name"
              placeholder="John"
            />
            <LocalInput
              field="personalLastName"
              label="Last Name"
              autoComplete="family-name"
              placeholder="Doe"
            />
          </div>
          <div className="flex gap-small">
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
          <div className="flex items-end gap-small">
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
          <div className="flex gap-small">
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
