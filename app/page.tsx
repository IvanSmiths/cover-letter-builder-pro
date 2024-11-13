"use client";

import { useChat } from "ai/react";
import { ChatForm } from "@/components/ChatForm";
import dynamic from "next/dynamic";

const Pdf = dynamic(() => import("@/components/Pdf/PdfWrapper"), {
  ssr: false,
});

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({
      api: "api/llm-response",
    });

  return (
    <main className="flex items-center">
      <ChatForm
        input={input}
        isLoading={isLoading}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        stop={stop}
      />
      {isLoading ? null : <Pdf messages={messages} />}
    </main>
  );
}
