"use client";

import { useChat } from "ai/react";
import dynamic from "next/dynamic";
import SelectCoverLetterStyle from "@/components/dashboard/SelectCoverLetterStyle";
import { dashboardSchema } from "@/lib/Schema/dashboardSchema";
import Form from "@/components/dashboard/Form/Form";

const Pdf = dynamic(() => import("@/components/dashboard/Pdf/Pdf"), {
  ssr: false,
});

export default function Dashboard() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({
      api: "api/llm-response",
    });

  return (
    <div className="flex h-full w-full flex-col justify-between bg-backgroundPrimary md:flex-row">
      <Form
        input={input}
        isLoading={isLoading}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        stop={stop}
      />
      <Pdf isLoading={isLoading} messages={messages} />
      <SelectCoverLetterStyle />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dashboardSchema) }}
      />
    </div>
  );
}
