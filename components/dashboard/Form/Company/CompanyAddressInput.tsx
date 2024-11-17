import { useCompanyFormStore } from "@/lib/store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const CompanyAddressInput = () => {
  const { companyAddress, setField } = useCompanyFormStore();
  return (
    <div className="w-full">
      <Label htmlFor="companyAddress">Street & Number</Label>
      <Input
        id="companyAddress"
        type="text"
        placeholder="Friedrich-Ebert-Anlage 29"
        className="mt-1"
        value={companyAddress}
        onChange={(e) => setField("companyAddress", e.target.value)}
      />
    </div>
  );
};

export default CompanyAddressInput;
