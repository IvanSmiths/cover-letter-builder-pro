import { useCompanyFormStore } from "@/lib/store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const CompanyCityInput = () => {
  const { companyCity, setField } = useCompanyFormStore();
  return (
    <div className="w-full">
      <Label htmlFor="companyCity">City & Zip</Label>
      <Input
        id="companyCity"
        type="text"
        placeholder="60308, Frankfurt am Main"
        className="mt-1"
        value={companyCity}
        onChange={(e) => setField("companyCity", e.target.value)}
      />
    </div>
  );
};

export default CompanyCityInput;
