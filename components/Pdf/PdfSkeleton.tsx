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
  const {
    PersonalFirstName,
    PersonalLastName,
    PersonalAddress,
    PersonalZip,
    PersonalCity,
    PersonalTelephone,
    PersonalEmail,
  } = usePersonalFormStore();
  const { companyFullAddress, companySubject } = useCompanyFormStore();
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
          <View style={styles[selectedStyle].personalHeader}>
            <Text
              style={[
                styles[selectedStyle].text,
                styles[selectedStyle].headerText,
                styles[selectedStyle].headerName,
              ]}
            >
              {PersonalFirstName} {PersonalLastName}
            </Text>
            <Text
              style={[
                styles[selectedStyle].text,
                styles[selectedStyle].headerText,
              ]}
            >
              {PersonalAddress}
            </Text>
            <Text
              style={[
                styles[selectedStyle].text,
                styles[selectedStyle].headerText,
              ]}
            >
              {PersonalZip} {PersonalCity}
            </Text>
            <Text
              style={[
                styles[selectedStyle].text,
                styles[selectedStyle].headerText,
              ]}
            >
              {PersonalTelephone}
            </Text>
            <Text
              style={[
                styles[selectedStyle].text,
                styles[selectedStyle].headerText,
              ]}
            >
              {PersonalEmail}
            </Text>
          </View>
          <View style={styles[selectedStyle].companyHeader}>
            <Text
              style={[
                styles[selectedStyle].text,
                styles[selectedStyle].headerName,
              ]}
            >
              {companyName}
            </Text>
            <Text
              style={[
                styles[selectedStyle].text,
                styles[selectedStyle].headerText,
              ]}
            >
              {recruiterName}
            </Text>
            <Text
              style={[
                styles[selectedStyle].text,
                styles[selectedStyle].headerText,
              ]}
            >
              {street}
            </Text>
            <Text
              style={[
                styles[selectedStyle].text,
                styles[selectedStyle].headerText,
              ]}
            >
              {city}
            </Text>
          </View>
          <View style={styles[selectedStyle].dateHeader}>
            <Text style={styles[selectedStyle].text}>{PersonalCity}, </Text>
          </View>
          <View style={styles[selectedStyle].subjectHeader}>
            <Text style={styles[selectedStyle].text}>{companySubject}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PdfSkeleton;
