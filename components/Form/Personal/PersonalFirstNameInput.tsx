import React from "react";
import { Input } from "@/components/ui/input";
import { usePersonalFormStore } from "@/lib/store";
import { Label } from "@/components/ui/label";

const PersonalFirstNameInput = () => {
  const { PersonalFirstName, setField } = usePersonalFormStore();
  return (
    <div className="w-full">
      <Label htmlFor="PersonalFirstName">First Name</Label>
      <Input
        id="PersonalFirstName"
        type="text"
        className="mt-1"
        value={PersonalFirstName}
        autoComplete="given-name"
        onChange={(e) => setField("PersonalFirstName", e.target.value)}
      />
    </div>
  );
};

export default PersonalFirstNameInput;
