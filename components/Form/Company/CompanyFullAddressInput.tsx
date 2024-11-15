import { useCompanyFormStore } from "@/lib/store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const CompanyFullAddressInput = () => {
  const { companyFullAddress, setField } = useCompanyFormStore();
  return (
    <div className="w-full">
      <Label htmlFor="companyFullAddress">Full Address</Label>
      <Input
        id="companyFullAddress"
        type="text"
        placeholder="Friedrich-Ebert-Anlage 29, 60308, Frankfurt am Main
"
        className="mt-1"
        value={companyFullAddress}
        onChange={(e) => setField("companyFullAddress", e.target.value)}
      />
    </div>
  );
};

export default CompanyFullAddressInput;
