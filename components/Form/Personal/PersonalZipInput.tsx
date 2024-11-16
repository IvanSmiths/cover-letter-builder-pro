import { usePersonalFormStore } from "@/lib/store";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const PersonalZipInput = () => {
  const { PersonalZip, setField } = usePersonalFormStore();
  return (
    <div className="w-full">
      <Label htmlFor="PersonalZip">Zip Code</Label>
      <Input
        id="PersonalZip"
        type="text"
        className="mt-1"
        value={PersonalZip}
        placeholder="65195"
        autoComplete="postal-code"
        onChange={(e) => setField("PersonalZip", e.target.value)}
      />
    </div>
  );
};

export default PersonalZipInput;
