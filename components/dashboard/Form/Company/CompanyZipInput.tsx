import { useCompanyFormStore } from "@/lib/store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const CompanyZipInput = () => {
  const { companyZip, setField } = useCompanyFormStore();
  return (
    <div className="w-full">
      <Label htmlFor="companyZip">Zip</Label>
      <Input
        id="companyZip"
        type="text"
        placeholder="94016"
        className="mt-1"
        value={companyZip}
        onChange={(e) => setField("companyZip", e.target.value)}
      />
    </div>
  );
};

export default CompanyZipInput;
