import React from "react";
import { Document, Page, PDFViewer, Text, View } from "@react-pdf/renderer";
import { PdfProps } from "@/components/Pdf/PdfWrapper";
import {
  useCompanyNameStore,
  usePdfStyleStore,
  useRecruiterStore,
  useUserFormStore,
} from "@/lib/store";
import { germanDINNorm } from "@/components/Pdf/PdfStyles/germanDINNorm";
import { style2 } from "@/components/Pdf/PdfStyles/style2";
import { style3 } from "@/components/Pdf/PdfStyles/style3";

const Pdf = ({ messages }: PdfProps) => {
  const { firstName, lastName } = useUserFormStore();
  const { selectedStyle } = usePdfStyleStore();

  const styles = {
    germanDINNorm,
    style2,
    style3,
  };

  const { recruiterName } = useRecruiterStore();
  const { companyName } = useCompanyNameStore();
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
            <Text style={styles[selectedStyle].text} x={0} y={20}>
              {recruiterName}
            </Text>
            <Text style={styles[selectedStyle].text} x={0} y={20}>
              {companyName}
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
