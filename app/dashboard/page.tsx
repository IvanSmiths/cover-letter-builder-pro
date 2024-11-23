"use client";

import { useChat } from "ai/react";
import { Form } from "@/components/dashboard/Form/Form";
import dynamic from "next/dynamic";
import SelectCoverLetterStyle from "@/components/dashboard/SelectCoverLetterStyle";
import Header from "@/components/dashboard/Header";
import { dashboardSchema } from "@/lib/Schema/dashboardSchema";

const Pdf = dynamic(() => import("@/components/dashboard/Pdf/Pdf"), {
  ssr: false,
});

export default function Dashboard() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({
      api: "api/llm-response",
    });

  return (
    <div className="flex h-full w-full flex-col bg-backgroundPrimary md:flex-row">
      <section className="h-screen w-full overflow-y-scroll md:w-4/12">
        <Header />
        <Form
          input={input}
          isLoading={isLoading}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          stop={stop}
        />
      </section>
      <main className="w-full max-md:min-h-[calc(100vh-100px)] md:w-8/12">
        <Pdf isLoading={isLoading} messages={messages} />
      </main>
      <section className="h-full w-full p-small md:w-4/12">
        <SelectCoverLetterStyle />
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dashboardSchema) }}
      />
    </div>
  );
}
