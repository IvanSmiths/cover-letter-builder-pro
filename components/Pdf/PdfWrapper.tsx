import React from "react";
import { Message } from "ai";
import Pdf from "@/components/Pdf/Pdf";

export type PdfProps = {
  messages: Message[];
};

const PdfWrapper = ({ messages }: PdfProps) => {
  return messages && messages.length > 0 ? (
    <Pdf messages={messages} />
  ) : (
    <div className="flex h-screen w-full items-center justify-center bg-gray-200">
      <span>Fill the form to see the downloadable Pdf</span>
    </div>
  );
};

export default PdfWrapper;
