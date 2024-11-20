import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PersonalFormState, usePersonalFormStore } from "@/lib/store";

interface PersonalInputProps {
  field: keyof PersonalFormState;
  label: string;
  placeholder?: string;
  autoComplete?: string;
}

const LocalInput = ({
  field,
  label,
  placeholder,
  autoComplete,
}: PersonalInputProps) => {
  const value = usePersonalFormStore((state) => state[field]);
  const setField = usePersonalFormStore((state) => state.setField);

  return (
    <div className="w-full">
      <Label htmlFor={field}>{label}</Label>
      <Input
        id={field}
        type="text"
        className="mt-1"
        value={value as string}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={(e) => setField(field, e.target.value)}
      />
    </div>
  );
};

export default LocalInput;
