import { usePersonalFormStore } from "@/lib/store";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PersonalAddressInput = () => {
  const { address, setField } = usePersonalFormStore();
  return (
    <div className="w-full">
      <Label htmlFor="address">Address</Label>
      <Input
        id="address"
        type="text"
        className="mt-1"
        value={address}
        placeholder="Holiday st. 24"
        autoComplete="address-line1"
        onChange={(e) => setField("address", e.target.value)}
      />
    </div>
  );
};

export default PersonalAddressInput;
