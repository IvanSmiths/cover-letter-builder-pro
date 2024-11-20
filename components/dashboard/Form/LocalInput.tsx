import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserFormState, useUserFormState } from "@/lib/store";

interface PersonalInputProps {
  field: keyof UserFormState;
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
  const value = useUserFormState((state) => state[field]);
  const setField = useUserFormState((state) => state.setField);

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
