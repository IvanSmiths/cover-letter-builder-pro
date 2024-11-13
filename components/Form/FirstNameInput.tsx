import React from "react";
import { Input } from "@/components/ui/input";
import { useUserFormStore } from "@/lib/store";
import { Label } from "@/components/ui/label";

const FirstNameInput = () => {
  const { firstName, setField } = useUserFormStore();
  return (
    <>
      <Label htmlFor="firstName">First Name</Label>
      <Input
        id="firstName"
        type="text"
        value={firstName}
        onChange={(e) => setField("firstName", e.target.value)}
      />
    </>
  );
};

export default FirstNameInput;
