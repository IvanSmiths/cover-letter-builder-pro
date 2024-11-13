"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { PromptInput } from "@/components/PromptInput";
import PromptButton from "@/components/PromptButton";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { YearsInput } from "@/components/YearsInput";

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

  const FormSchema = z.object({
    yearsOfExperience: z.number().min(0).max(100),
    prompt: z.string(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      yearsOfExperience: years,
    },
  });

  return (
    <>
      <Form {...form}>
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
        >
          <YearsInput setYears={setYears} years={years} form={form} />
          <PromptInput
            input={input}
            isLoading={isLoading}
            handleInputChange={handleInputChange}
            form={form}
          />
          <PromptButton stop={stop} isLoading={isLoading} />
        </form>
      </Form>
    </>
  );
}
