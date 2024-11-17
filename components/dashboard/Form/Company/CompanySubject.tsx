import { useCompanyFormStore } from "@/lib/store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const CompanyAddressInput = () => {
  const { companySubject, setField } = useCompanyFormStore();
  return (
    <div className="w-full">
      <Label htmlFor="subject">Cover Letter Subject</Label>
      <Input
        id="subject"
        type="text"
        placeholder="Application as a Software Engineer"
        className="mt-1"
        value={companySubject}
        onChange={(e) => setField("companySubject", e.target.value)}
      />
    </div>
  );
};

export default CompanyAddressInput;
