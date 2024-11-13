"use client";

import { useChat } from "ai/react";
import { Form } from "@/components/Form/Form";
import dynamic from "next/dynamic";
import PdfSkeleton from "@/components/Pdf/PdfSkeleton";

const PdfWrapper = dynamic(() => import("@/components/Pdf/PdfWrapper"), {
  ssr: false,
});

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({
      api: "api/llm-response",
    });

  return (
    <main className="flex h-full w-full items-center">
      <Form
        input={input}
        isLoading={isLoading}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        stop={stop}
      />
      {isLoading ? <PdfSkeleton /> : <PdfWrapper messages={messages} />}
    </main>
  );
}
