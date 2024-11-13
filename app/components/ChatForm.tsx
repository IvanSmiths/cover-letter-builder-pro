import { Loader2, Send } from "lucide-react";
import { useState } from "react";

interface ChatFormProps {
  input: string;
  isLoading: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, data?: any) => void;
  stop: () => void;
}

export function ChatForm({ input, isLoading, handleInputChange, handleSubmit, stop }: ChatFormProps) {
  const [years, setYears] = useState("");
  
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(event, {
          data: {
            prompt: input,
            yearsOfExperience: years
          },
        });
      }}
      className="w-full flex flex-row gap-2 items-center h-full"
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
        className="border-b border-dashed outline-none w-full px-4 py-2 text-[#0842A0] placeholder:text-[#0842A099] text-right focus:placeholder-transparent disabled:bg-transparent"
      />
      <button
        type="submit"
        className="rounded-full shadow-md border flex flex-row"
      >
        {isLoading ? (
          <Loader2
            onClick={stop}
            className="p-3 h-10 w-10 stroke-stone-500 animate-spin"
          />
        ) : (
          <Send className="p-3 h-10 w-10 stroke-stone-500" />
        )}
      </button>
    </form>
  );
} 