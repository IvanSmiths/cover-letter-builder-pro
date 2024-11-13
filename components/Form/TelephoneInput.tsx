import React from "react";
import { useUserFormStore } from "@/lib/store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const TelephoneInput = () => {
  const { telephone, setField } = useUserFormStore();
  return (
    <div className="w-full">
      <Label htmlFor="telephone">Telephone</Label>
      <Input
        id="telephone"
        type="text"
        className="mt-1"
        value={telephone}
        placeholder="+45 255 555 555"
        autoComplete="tel"
        onChange={(e) => setField("telephone", e.target.value)}
      />
    </div>
  );
};

export default TelephoneInput;
