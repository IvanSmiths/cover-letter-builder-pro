import React from "react";
import { usePersonalFormStore } from "@/lib/store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const PersonalEmailInput = () => {
  const { email, setField } = usePersonalFormStore();
  return (
    <div className="w-full">
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        type="text"
        className="mt-1"
        value={email}
        placeholder="jogn.doe@gmail.com"
        autoComplete="email"
        onChange={(e) => setField("email", e.target.value)}
      />
    </div>
  );
};

export default PersonalEmailInput;
