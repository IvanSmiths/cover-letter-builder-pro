"use client";

import { useChat } from "ai/react";
import { Form } from "@/components/dashboard/Form/Form";
import dynamic from "next/dynamic";
import SelectCoverLetterStyle from "@/components/dashboard/SelectCoverLetterStyle";
import Header from "@/components/dashboard/Header";
import { dashboardSchema } from "@/lib/Schema/dashboardSchema";
import { pdfjs } from "react-pdf";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const Pdf = dynamic(() => import("@/components/dashboard/Pdf/Pdf"), {
  ssr: false,
});

export interface FormData {
  yearsOfExperience: number;
  recruiter: string;
  companyName: string;
  languages: string;
  resume: string;
  personalFirstName: string;
  personalLastName: string;
}

export default function Dashboard() {
  const form = useForm<FormData>({
    defaultValues: {
      yearsOfExperience: 0,
      recruiter: "",
      companyName: "",
      languages: "",
      resume: "",
      personalFirstName: "",
      personalLastName: "",
    },
  });

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
  }, []);

  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({
      api: "api/llm-response",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        data: form.getValues(),
      },
    });

  return (
    <div className="flex h-full w-full flex-col bg-backgroundPrimary md:flex-row">
      <section className="h-screen w-full overflow-y-scroll lg:w-3/12">
        <Header />
        <Form
          form={form}
          input={input}
          isLoading={isLoading}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          stop={stop}
        />
      </section>
      <main className="w-full max-md:min-h-[calc(100vh-100px)] lg:w-6/12">
        <Pdf isLoading={isLoading} messages={messages} />
      </main>
      <section className="h-full w-full p-small lg:w-3/12">
        <SelectCoverLetterStyle />
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dashboardSchema) }}
      />
    </div>
  );
}
