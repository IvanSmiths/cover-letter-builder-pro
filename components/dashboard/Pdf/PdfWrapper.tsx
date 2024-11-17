import React from "react";
import { Message } from "ai";
import Pdf from "@/components/dashboard/Pdf/Pdf";
import PdfSkeleton from "@/components/dashboard/Pdf/PdfSkeleton";

export type PdfProps = {
  messages: Message[];
};

const PdfWrapper = ({ messages }: PdfProps) => {
  return messages && messages.length > 0 ? (
    <Pdf messages={messages} />
  ) : (
    <PdfSkeleton />
  );
};

export default PdfWrapper;