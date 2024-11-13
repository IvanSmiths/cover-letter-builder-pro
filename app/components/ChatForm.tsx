import { Loader2, Send } from "lucide-react";
import { useState } from "react";

interface ChatFormProps {
  input: string;
  isLoading: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, data?: any) => void;
  stop: () => void;
}

export function ChatForm({
  input,
  isLoading,
  handleInputChange,
  handleSubmit,
  stop,
}: ChatFormProps) {
  const [years, setYears] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(event, {
          data: {
            prompt: input,
            yearsOfExperience: years,
          },
        });
      }}
      className="flex h-full w-full flex-row items-center gap-2"
    >
      <input
        type="text"
        name="yearsOfExperience"
        value={years}
        onChange={(e) => setYears(e.target.value)}
        placeholder="Years of experience..."
      />
      <input
        type="text"
        placeholder={isLoading ? "Generating . . ." : "ask something . . . "}
        value={input}
        disabled={isLoading}
        onChange={handleInputChange}
        className="w-full border-b border-dashed px-4 py-2 text-right text-[#0842A0] outline-none placeholder:text-[#0842A099] focus:placeholder-transparent disabled:bg-transparent"
      />
      <button
        type="submit"
        className="flex flex-row rounded-full border shadow-md"
      >
        {isLoading ? (
          <Loader2
            onClick={stop}
            className="h-10 w-10 animate-spin stroke-stone-500 p-3"
          />
        ) : (
          <Send className="h-10 w-10 stroke-stone-500 p-3" />
        )}
      </button>
    </form>
  );
}
