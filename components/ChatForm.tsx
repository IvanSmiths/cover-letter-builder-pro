"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { YearsInput } from "@/components/YearsInput";
import { PromptInput } from "@/components/PromptInput";
import PromptButton from "@/components/PromptButton";

interface ChatFormProps {
  input: string;
  isLoading: boolean;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>, data?: any) => void;
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
      <PromptButton stop={stop} isLoading={isLoading} />
    </form>
  );
}
