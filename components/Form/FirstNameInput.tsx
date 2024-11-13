import React from "react";
import { Input } from "@/components/ui/input";
import { useUserFormStore } from "@/lib/store";
import { Label } from "@/components/ui/label";

const FirstNameInput = () => {
  const { firstName, setField } = useUserFormStore();
  return (
    <div className="w-full">
      <Label htmlFor="firstName">First Name</Label>
      <Input
        id="firstName"
        type="text"
        className="mt-1"
        value={firstName}
        autoComplete="given-name"
        onChange={(e) => setField("firstName", e.target.value)}
      />
    </div>
  );
};

export default FirstNameInput;
