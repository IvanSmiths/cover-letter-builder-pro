"use client";

import { useChat } from "ai/react";
import { Form } from "@/components/dashboard/Form/Form";
import dynamic from "next/dynamic";
import SelectCoverLetterStyle from "@/components/dashboard/SelectCoverLetterStyle";
import { ThemeToggle } from "@/components/ThemeToggle";
import PdfSkeleton from "@/components/dashboard/Pdf/PdfSkeleton";

const PdfWrapper = dynamic(
  () => import("@/components/dashboard/Pdf/PdfWrapper"),
  {
    ssr: false,
  },
);

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({
      api: "api/llm-response",
    });

  return (
    <main className="flex h-full w-full bg-light dark:bg-dark">
      <div className="h-screen w-4/12 overflow-y-scroll p-small">
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
      <div className="h-full w-4/12 p-small">
        <SelectCoverLetterStyle />
      </div>
    </main>
  );
}