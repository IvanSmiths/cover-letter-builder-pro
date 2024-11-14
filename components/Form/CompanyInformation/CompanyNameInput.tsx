import { useCompanyFormStore } from "@/lib/store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const CompanyNameInput = () => {
  const { companyName, setField } = useCompanyFormStore();
  return (
    <div className="w-full">
      <Label htmlFor="companyName">Name</Label>
      <Input
        id="companyName"
        type="text"
        className="mt-1"
        placeholder="Apple Inc"
        value={companyName}
        onChange={(e) => setField("companyName", e.target.value)}
      />
    </div>
  );
};

export default CompanyNameInput;
