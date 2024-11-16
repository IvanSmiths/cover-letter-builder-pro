import { usePersonalFormStore } from "@/lib/store";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PersonalAddressInput = () => {
  const { PersonalAddress, setField } = usePersonalFormStore();
  return (
    <div className="w-full">
      <Label htmlFor="PersonalAddress">Address</Label>
      <Input
        id="PersonalAddress"
        type="text"
        className="mt-1"
        value={PersonalAddress}
        placeholder="Holiday st. 24"
        autoComplete="address-line1"
        onChange={(e) => setField("PersonalAddress", e.target.value)}
      />
    </div>
  );
};

export default PersonalAddressInput;
