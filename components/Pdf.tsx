import React from "react";
import { Message } from "ai";
import { Document, Page, PDFViewer, Text, View } from "@react-pdf/renderer";

interface PdfProps {
  messages: Message[];
}

const Pdf = ({ messages }: PdfProps) => {
  return messages && messages.length > 0 ? (
    <PDFViewer>
      <Document>
        <Page size="A4">
          <View>
            <Text x={10} y={10}>
              Cover letter
            </Text>
            <Text x={0} y={0}>
              {messages[1]?.content || "No content available"}
            </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  ) : (
    <PDFViewer>
      <Document>
        <Page size="A4">
          <View>
            <Text x={10} y={10}>
              Cover letter
            </Text>
            <Text x={0} y={0}>
              Fill the form on the left side
            </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default Pdf;
