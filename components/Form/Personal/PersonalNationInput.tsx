import { usePersonalFormStore } from "@/lib/store";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const PersonalNationInput = () => {
  const { PersonalEmail, setField } = usePersonalFormStore();
  return (
    <div className="w-full">
      <Label htmlFor="PersonalEmail">Nation</Label>
      <Input
        id="PersonalEmail"
        type="text"
        className="mt-1"
        value={PersonalEmail}
        placeholder="Germany"
        autoComplete="country-name"
        onChange={(e) => setField("PersonalEmail", e.target.value)}
      />
    </div>
  );
};

export default PersonalNationInput;
