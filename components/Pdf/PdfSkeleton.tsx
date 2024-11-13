import React from "react";
import { Document, Page, PDFViewer, Text, View } from "@react-pdf/renderer";
import { style1, style2, style3 } from "@/components/Pdf/PdfStyles/PdfStyles";
import { usePdfStyleStore } from "@/lib/store";

const PdfSkeleton = () => {
  const styles = {
    style1,
    style2,
    style3,
  };

  const { selectedStyle } = usePdfStyleStore();

  return (
    <PDFViewer style={styles[selectedStyle].viewer}>
      <Document>
        <Page size="A4">
          <View>
            <Text x={0} y={0}>
              Fill the form on the left side
            </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PdfSkeleton;
