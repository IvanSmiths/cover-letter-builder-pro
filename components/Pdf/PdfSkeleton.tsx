import React from "react";
import { Document, Page, PDFViewer, Text, View } from "@react-pdf/renderer";
import {
  useCompanyFormStore,
  useCompanyNameStore,
  usePdfStyleStore,
  useRecruiterStore,
  useUserFormStore,
} from "@/lib/store";
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
  const { companyFullAddress } = useCompanyFormStore();
  const { recruiterName } = useRecruiterStore();
  const { companyName } = useCompanyNameStore();
  return (
    <PDFViewer style={styles[selectedStyle].viewer} showToolbar={false}>
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
              {companyFullAddress}
            </Text>
            <Text style={styles[selectedStyle].text} x={0} y={20}>
              {companyName}
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
