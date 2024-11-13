interface PromptInputProps {
  input: string;
  isLoading: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function PromptInput({ input, isLoading, handleInputChange }: PromptInputProps) {
  return (
    
    <input
      type="text"
      placeholder={isLoading ? "Generating . . ." : "ask something . . . "}
      value={input}
      disabled={isLoading}
      onChange={handleInputChange}
      className="w-full border-b border-dashed px-4 py-2 text-right text-[#0842A0] outline-none placeholder:text-[#0842A099] focus:placeholder-transparent disabled:bg-transparent"
    />
  );
} 