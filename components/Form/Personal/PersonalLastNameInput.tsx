import React from "react";
import { usePersonalFormStore } from "@/lib/store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const PersonalLastNameInput = () => {
  const { PersonalLastName, setField } = usePersonalFormStore();
  return (
    <div className="w-full">
      <Label htmlFor="PersonalLastName">Last Name</Label>
      <Input
        id="PersonalLastName"
        type="text"
        className="mt-1"
        value={PersonalLastName}
        autoComplete="family-name"
        onChange={(e) => setField("PersonalLastName", e.target.value)}
      />
    </div>
  );
};

export default PersonalLastNameInput;
