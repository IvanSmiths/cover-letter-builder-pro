import React from "react";
import { usePersonalFormStore } from "@/lib/store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const PersonalEmailInput = () => {
  const { PersonalEmail, setField } = usePersonalFormStore();
  return (
    <div className="w-full">
      <Label htmlFor="PersonalEmail">Email</Label>
      <Input
        id="PersonalEmail"
        type="text"
        className="mt-1"
        value={PersonalEmail}
        placeholder="jogn.doe@gmail.com"
        autoComplete="email"
        onChange={(e) => setField("PersonalEmail", e.target.value)}
      />
    </div>
  );
};

export default PersonalEmailInput;
