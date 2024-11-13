interface YearsInputProps {
  years: number;
  setYears: (years: number) => void;
}

export function YearsInput({ years, setYears }: YearsInputProps) {
  return (
    <input
      type="number"
      name="yearsOfExperience"
      value={years}
      onChange={(e) => setYears(parseInt(e.target.value))}
      placeholder="Years of experience..."
    />
  );
}
