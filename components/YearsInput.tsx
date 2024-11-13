import { Input } from "@/components/ui/input";

interface YearsInputProps {
  years: number;
  setYears: (years: number) => void;
}

export function YearsInput({ years, setYears }: YearsInputProps) {
  return (
    <Input
      type="number"
      value={years}
      onChange={(e) => setYears(parseInt(e.target.value))}
    />
  );
}
