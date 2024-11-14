import { useCompanyFormStore } from "@/lib/store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import TooltipWrapper from "@/components/ui/TooltipWrapper";

const CompanyNameInput = () => {
  const { companyName, setField } = useCompanyFormStore();
  return (
    <div className="w-full">
      <div className="flex items-center gap-smallest">
        <Label htmlFor="companyName">Name</Label>
        <TooltipWrapper
          info="The company name will be mentioned in the cover letter body without
            its company type (LLC, Inc, GmbH, S.r.l, to name a few) to give a more authentic feeling."
        />
      </div>
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
