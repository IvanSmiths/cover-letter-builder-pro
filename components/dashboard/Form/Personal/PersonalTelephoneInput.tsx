import React from "react";
import { usePersonalFormStore } from "@/lib/store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const PersonalTelephoneInput = () => {
  const { PersonalTelephone, setField } = usePersonalFormStore();
  return (
    <div className="w-full">
      <Label htmlFor="PersonalTelephone">Telephone</Label>
      <Input
        id="PersonalTelephone"
        type="text"
        className="mt-1"
        value={PersonalTelephone}
        placeholder="+45 255 555 555"
        autoComplete="tel"
        onChange={(e) => setField("PersonalTelephone", e.target.value)}
      />
    </div>
  );
};

export default PersonalTelephoneInput;
