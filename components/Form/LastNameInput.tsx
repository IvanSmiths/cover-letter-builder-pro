import React from "react";
import { useUserFormStore } from "@/lib/store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const LastNameInput = () => {
  const { lastName, setField } = useUserFormStore();
  return (
    <div className="w-full">
      <Label htmlFor="lastName">Last Name</Label>
      <Input
        id="lastName"
        type="text"
        className="mt-1"
        value={lastName}
        autoComplete="family-name"
        onChange={(e) => setField("lastName", e.target.value)}
      />
    </div>
  );
};

export default LastNameInput;
