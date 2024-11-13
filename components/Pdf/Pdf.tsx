import React from "react";
import { Document, Page, PDFViewer, Text, View } from "@react-pdf/renderer";
import { PdfProps } from "@/components/Pdf/PdfWrapper";
import { usePdfStyleStore, useUserFormStore } from "@/lib/store";
import { style1, style2, style3 } from "@/components/Pdf/PdfStyles/PdfStyles";

const Pdf = ({ messages }: PdfProps) => {
  const { firstName, lastName } = useUserFormStore();
  const { selectedStyle } = usePdfStyleStore();

  const styles = {
    style1,
    style2,
    style3,
  };

  return (
    <PDFViewer style={styles[selectedStyle].viewer}>
      <Document>
        <Page size="A4" style={styles[selectedStyle].page}>
          <View>
            <Text style={styles[selectedStyle].text} x={0} y={0}>
              {firstName}
            </Text>
            <Text style={styles[selectedStyle].text} x={0} y={20}>
              {lastName}
            </Text>
            <Text style={styles[selectedStyle].text} x={0} y={40}>
              {messages[messages.length - 1].content || "No content available."}
            </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default Pdf;
