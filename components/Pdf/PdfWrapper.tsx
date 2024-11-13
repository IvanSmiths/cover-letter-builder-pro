import React from "react";
import { Message } from "ai";
import PdfSkeleton from "@/components/Pdf/PdfSkeleton";
import Pdf from "@/components/Pdf/Pdf";

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
