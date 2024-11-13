import React from "react";
import { Document, Page, PDFViewer, Text, View } from "@react-pdf/renderer";
import { PdfProps } from "@/components/Pdf/PdfWrapper";

const Pdf = ({ messages }: PdfProps) => {
  return (
    <PDFViewer>
      <Document>
        <Page size="A4">
          <View>
            <Text x={10} y={10}>
              Cover letter
            </Text>
            <Text x={0} y={0}>
              {messages[messages.length - 1].content || "No content available."}
            </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default Pdf;
