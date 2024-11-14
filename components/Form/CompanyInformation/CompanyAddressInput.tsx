import { useCompanyFormStore } from "@/lib/store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const CompanyAddressInput = () => {
  const { companyAddress, setField } = useCompanyFormStore();
  return (
    <div className="w-full">
      <Label htmlFor="companyAddress">Full Address</Label>
      <Input
        id="companyAddress"
        type="text"
        placeholder="1 Apple Park Way"
        className="mt-1"
        value={companyAddress}
        onChange={(e) => setField("companyAddress", e.target.value)}
      />
    </div>
  );
};

export default CompanyAddressInput;
