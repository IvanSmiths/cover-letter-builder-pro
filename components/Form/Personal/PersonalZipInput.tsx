import { useUserFormStore } from "@/lib/store";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const PersonalZipInput = () => {
  const { zip, setField } = useUserFormStore();
  return (
    <div className="w-full">
      <Label htmlFor="zip">Zip Code</Label>
      <Input
        id="zip"
        type="text"
        className="mt-1"
        value={zip}
        placeholder="65195"
        autoComplete="postal-code"
        onChange={(e) => setField("zip", e.target.value)}
      />
    </div>
  );
};

export default PersonalZipInput;
