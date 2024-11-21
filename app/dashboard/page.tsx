"use client";

import { useChat } from "ai/react";
import { Form } from "@/components/dashboard/Form/Form";
import dynamic from "next/dynamic";
import SelectCoverLetterStyle from "@/components/dashboard/SelectCoverLetterStyle";
import Header from "@/components/dashboard/Header";

const PdfWrapper = dynamic(
  () => import("@/components/dashboard/Pdf/PdfWrapper"),
  {
    ssr: false,
  },
);

export default function Dashboard() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({
      api: "api/llm-response",
    });

  return (
    <main className="bg-backgroundPrimary flex h-full w-full">
      <div className="h-screen w-4/12 overflow-y-scroll">
        <Header />
        <Form
          input={input}
          isLoading={isLoading}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          stop={stop}
        />
      </div>
      <div className="h-screen w-8/12">
        <PdfWrapper messages={messages} />
      </div>
      <div className="h-full w-4/12 p-small">
        <SelectCoverLetterStyle />
      </div>
    </main>
  );
}
