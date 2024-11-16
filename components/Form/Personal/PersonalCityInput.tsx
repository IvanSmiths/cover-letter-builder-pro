import { usePersonalFormStore } from "@/lib/store";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const PersonalCityInput = () => {
  const { city, setField } = usePersonalFormStore();
  return (
    <div className="w-full">
      <Label htmlFor="city">City</Label>
      <Input
        id="city"
        type="text"
        className="mt-1"
        value={city}
        placeholder="Berlin"
        autoComplete="address-level2"
        onChange={(e) => setField("city", e.target.value)}
      />
    </div>
  );
};

export default PersonalCityInput;
