import { usePersonalFormStore } from "@/lib/store";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const PersonalCityInput = () => {
  const { PersonalCity, setField } = usePersonalFormStore();
  return (
    <div className="w-full">
      <Label htmlFor="PersonalCity">City</Label>
      <Input
        id="PersonalCity"
        type="text"
        className="mt-1"
        value={PersonalCity}
        placeholder="Berlin"
        autoComplete="address-level2"
        onChange={(e) => setField("PersonalCity", e.target.value)}
      />
    </div>
  );
};

export default PersonalCityInput;
