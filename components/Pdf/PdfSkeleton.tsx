import React from "react";
import { Document, Page, PDFViewer, Text, View } from "@react-pdf/renderer";

const PdfSkeleton = () => {
  return (
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

export default PdfSkeleton;
