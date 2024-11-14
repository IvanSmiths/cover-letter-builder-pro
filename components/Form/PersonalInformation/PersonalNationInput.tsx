import { useUserFormStore } from "@/lib/store";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const PersonalNationInput = () => {
  const { nation, setField } = useUserFormStore();
  return (
    <div className="w-full">
      <Label htmlFor="nation">Nation</Label>
      <Input
        id="nation"
        type="text"
        className="mt-1"
        value={nation}
        placeholder="Germany"
        autoComplete="country-name"
        onChange={(e) => setField("nation", e.target.value)}
      />
    </div>
  );
};

export default PersonalNationInput;
