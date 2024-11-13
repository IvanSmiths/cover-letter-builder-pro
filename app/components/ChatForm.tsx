"use client";

import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import { PromptInput } from "./PromptInput";
import { YearsInput } from "./YearsInput";

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
  const [years, setYears] = useState<number>(0);

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
      <YearsInput years={years} setYears={setYears} />
      <PromptInput
        input={input}
        isLoading={isLoading}
        handleInputChange={handleInputChange}
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
