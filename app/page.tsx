"use client";

import { useChat } from "ai/react";
import { ChatForm } from "../components/ChatForm";
import { ChatMessages } from "../components/ChatMessages";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({
      api: "api/llm-response",
    });

  return (
    <main className="flex min-h-screen flex-col items-center p-12 text-black">
      <ChatForm
        input={input}
        isLoading={isLoading}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        stop={stop}
      />
      <ChatMessages messages={messages} isLoading={isLoading} />
    </main>
  );
}
