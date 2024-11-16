import { usePersonalFormStore } from "@/lib/store";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const PersonalNationInput = () => {
  const { PersonalNation, setField } = usePersonalFormStore();
  return (
    <div className="w-full">
      <Label htmlFor="PersonalNation">Nation</Label>
      <Input
        id="PersonalNation"
        type="text"
        className="mt-1"
        value={PersonalNation}
        placeholder="Germany"
        autoComplete="country-name"
        onChange={(e) => setField("PersonalNation", e.target.value)}
      />
    </div>
  );
};

export default PersonalNationInput;
