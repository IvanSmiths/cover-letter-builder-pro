import React from "react";
import { Document, Page, PDFViewer, Text, View } from "@react-pdf/renderer";
import { usePdfStyleStore, useUserFormStore } from "@/lib/store";
import { style1 } from "@/components/Pdf/PdfStyles/style1";
import { style2 } from "@/components/Pdf/PdfStyles/style2";
import { style3 } from "@/components/Pdf/PdfStyles/style3";

const PdfSkeleton = () => {
  const styles = {
    style1,
    style2,
    style3,
  };

  const { selectedStyle } = usePdfStyleStore();
  const { firstName, lastName } = useUserFormStore();

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
              iazbc sun sinci nancnsac isanic
            </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PdfSkeleton;
