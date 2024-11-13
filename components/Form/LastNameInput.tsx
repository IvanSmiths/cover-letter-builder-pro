import React from "react";
import { useUserFormStore } from "@/lib/store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const LastNameInput = () => {
  const { lastName, setField } = useUserFormStore();
  return (
    <>
      <Label htmlFor="lastName">Last Name</Label>
      <Input
        id="lastName"
        type="text"
        value={lastName}
        onChange={(e) => setField("firstName", e.target.value)}
      />
    </>
  );
};

export default LastNameInput;
