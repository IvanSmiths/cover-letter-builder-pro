import React from "react";
import { Document, Page, PDFViewer, Text, View } from "@react-pdf/renderer";
import { styles } from "@/components/Pdf/PdfStyle";

const PdfSkeleton = () => {
  return (
    <PDFViewer style={styles.viewer}>
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
