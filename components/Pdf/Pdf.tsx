import React from "react";
import { Document, Page, PDFViewer, Text, View } from "@react-pdf/renderer";
import { PdfProps } from "@/components/Pdf/PdfWrapper";
import { useUserFormStore } from "@/lib/store";
import { styles } from "@/components/Pdf/PdfStyle";

const Pdf = ({ messages }: PdfProps) => {
  const { firstName, lastName } = useUserFormStore();

  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size="A4">
          <View>
            <Text x={0} y={0}>
              {firstName}
            </Text>
            <Text x={0} y={0}>
              {lastName}
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
