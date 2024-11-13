"use client";

import { useChat } from "ai/react";
import { Form } from "@/components/Form/Form";
import dynamic from "next/dynamic";
import PdfSkeleton from "@/components/Pdf/PdfSkeleton";
import SelectCoverLetterStyle from "@/components/SelectCoverLetterStyle";
import { ThemeToggle } from "@/components/ThemeToggle";

const PdfWrapper = dynamic(() => import("@/components/Pdf/PdfWrapper"), {
  ssr: false,
});

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({
      api: "api/llm-response",
    });

  return (
    <main className="bg-light dark:bg-dark flex h-full w-full">
      <div className="p-small h-full w-4/12">
        <Form
          input={input}
          isLoading={isLoading}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          stop={stop}
        />
        <ThemeToggle />
      </div>
      <div className="h-screen w-8/12">
        {isLoading ? <PdfSkeleton /> : <PdfWrapper messages={messages} />}
      </div>
      <div className="p-small h-full w-4/12">
        <SelectCoverLetterStyle />
      </div>
    </main>
  );
}
