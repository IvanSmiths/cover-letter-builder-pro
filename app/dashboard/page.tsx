"use client";

import { useChat } from "ai/react";
import { FormBody } from "@/components/dashboard/Form/FormBody";
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
    <div className="flex h-full w-full flex-col justify-between bg-backgroundPrimary md:flex-row">
      <section className="h-screen w-full overflow-y-scroll lg:w-3/12">
        <Header />
        <FormBody
          input={input}
          isLoading={isLoading}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          stop={stop}
        />
      </section>
      <Pdf isLoading={isLoading} messages={messages} />
      <SelectCoverLetterStyle />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dashboardSchema) }}
      />
    </div>
  );
}
