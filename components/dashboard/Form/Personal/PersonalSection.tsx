import { User } from "lucide-react";
import FormHeader from "@/components/dashboard/Form/FormHeader";
import LocalInput from "@/components/dashboard/Form/LocalInput";

function PersonalSection() {
  return (
    <div className="flex flex-col gap-small">
      <FormHeader icon={User} title="Personal Info" />
      <div className="flex gap-small">
        <LocalInput
          field="PersonalFirstName"
          label="First Name"
          autoComplete="given-name"
          placeholder="John"
        />
        <LocalInput
          field="PersonalLastName"
          label="Last Name"
          autoComplete="family-name"
          placeholder="Doe"
        />
      </div>
      <div className="flex gap-small">
        <LocalInput
          field="PersonalCity"
          label="City"
          autoComplete="address-level2"
          placeholder="Berlin"
        />
        <LocalInput
          field="PersonalZip"
          label="Zip"
          autoComplete="postal-code"
          placeholder="10117"
        />
      </div>
      <div className="flex items-end gap-small">
        <LocalInput
          field="PersonalNation"
          label="Nation"
          autoComplete="country-name"
          placeholder="Germany"
        />
        <LocalInput
          field="PersonalAddress"
          label="Address"
          autoComplete="address-line1"
          placeholder="Holiday st. 24"
        />
      </div>
      <div className="flex gap-small">
        <LocalInput
          field="PersonalEmail"
          label="Email"
          autoComplete="email"
          placeholder="john.doe@example.com"
        />
        <LocalInput
          field="PersonalTelephone"
          label="Telephone"
          autoComplete="tel"
          placeholder="123456789"
        />
      </div>
    </div>
  );
}

export default PersonalSection;
