import React from "react";
import { Message } from "ai";
import Pdf from "@/components/dashboard/Pdf/Pdf";

export type PdfProps = {
  messages: Message[];
};

const PdfWrapper = ({ messages }: PdfProps) => {
  return <Pdf messages={messages} />;
};

export default PdfWrapper;
