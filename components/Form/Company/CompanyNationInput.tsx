import { useCompanyFormStore } from "@/lib/store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const CompanyNationInput = () => {
  const { companyNation, setField } = useCompanyFormStore();
  return (
    <div className="w-full">
      <Label htmlFor="companyNation">Nation</Label>
      <Input
        id="companyNation"
        type="text"
        placeholder="United States of America"
        className="mt-1"
        value={companyNation}
        onChange={(e) => setField("companyNation", e.target.value)}
      />
    </div>
  );
};

export default CompanyNationInput;
