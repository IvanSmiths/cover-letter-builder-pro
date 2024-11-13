"use client";

import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

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
      <Input
        type="number"
        value={years}
        onChange={(e) => setYears(parseInt(e.target.value))}
      />
      <Input
        type="text"
        placeholder={
          isLoading
            ? "Generating . . ."
            : "Paste the job description here . . . "
        }
        value={input}
        disabled={isLoading}
        onChange={handleInputChange}
      />
      <Button type="submit">
        {isLoading ? (
          <>
            Loading
            <Loader2 onClick={stop} />
          </>
        ) : (
          <>
            Send
            <Send />
          </>
        )}
      </Button>
    </form>
  );
}
