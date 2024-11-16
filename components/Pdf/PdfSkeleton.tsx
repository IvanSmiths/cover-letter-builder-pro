import React from "react";
import { Document, Page, PDFViewer, Text, View } from "@react-pdf/renderer";
import {
  useCompanyFormStore,
  useCompanyNameStore,
  usePdfStyleStore,
  usePersonalFormStore,
  useRecruiterStore,
} from "@/lib/store";
import { germanDINNorm } from "@/components/Pdf/PdfStyles/germanDINNorm";
import { style2 } from "@/components/Pdf/PdfStyles/style2";
import { style3 } from "@/components/Pdf/PdfStyles/style3";

const PdfSkeleton = () => {
  const styles = {
    germanDINNorm,
    style2,
    style3,
  };

  const { selectedStyle } = usePdfStyleStore();
  const { firstName, lastName, address, zip } = usePersonalFormStore();
  const { companyFullAddress } = useCompanyFormStore();
  const { recruiterName } = useRecruiterStore();
  const { companyName } = useCompanyNameStore();

  const parseAddress = (address: string): { street: string; city: string } => {
    const zipCodeRegex = /\d{4,}[^,\s]*/;
    const zipCodeIndex = address.search(zipCodeRegex);

    if (zipCodeIndex === -1) {
      return { street: address, city: "" };
    }

    const street = address.slice(0, zipCodeIndex).trim();
    const city = address.slice(zipCodeIndex).trim();

    return { street, city };
  };

  const { street, city } = parseAddress(companyFullAddress);

  return (
    <PDFViewer style={styles[selectedStyle].viewer} showToolbar={false}>
      <Document>
        <Page size="A4" style={styles[selectedStyle].page}>
          <View>
            <View style={styles[selectedStyle].personalHeader}>
              <Text style={styles[selectedStyle].text}>
                {firstName} {lastName}
              </Text>
              <Text style={styles[selectedStyle].text}>{address}</Text>
              <Text style={styles[selectedStyle].text}>{zip}</Text>
            </View>
            <Text style={styles[selectedStyle].text} x={0} y={20}>
              {recruiterName}
            </Text>
            <Text style={styles[selectedStyle].text} x={0} y={20}>
              {street}
            </Text>
            <Text style={styles[selectedStyle].text} x={0} y={20}>
              {city}
            </Text>
            <Text style={styles[selectedStyle].text} x={0} y={20}>
              {companyName}
            </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PdfSkeleton;
