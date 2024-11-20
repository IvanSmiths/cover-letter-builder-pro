import React, { useEffect, useState } from "react";
import { Document, Page, PDFViewer, Text, View } from "@react-pdf/renderer";
import { PdfProps } from "@/components/dashboard/Pdf/PdfWrapper";
import {
  defaultFormat,
  useDateFormatStore,
  useFormStore,
  usePdfStyleStore,
  useUserFormState,
} from "@/lib/store";
import { germanDINNorm } from "@/components/dashboard/Pdf/PdfStyles/germanDINNorm";
import { style2 } from "@/components/dashboard/Pdf/PdfStyles/style2";
import { style3 } from "@/components/dashboard/Pdf/PdfStyles/style3";
import { getTodayDate } from "@/components/dashboard/Pdf/getTodayDate";

const Pdf = ({ messages }: PdfProps) => {
  const styles = {
    germanDINNorm,
    style2,
    style3,
  };

  const { selectedStyle } = usePdfStyleStore();
  const {
    personalFirstName,
    personalLastName,
    personalAddress,
    personalZip,
    personalCity,
    personalTelephone,
    personalEmail,
    letterSubject,
    companyFullAddress,
  } = useUserFormState();
  const { companyName, recruiter } = useFormStore((state) => state);

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

  const { format } = useDateFormatStore();
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    setCurrentDate(getTodayDate(format || defaultFormat));
  }, [format]);

  return (
    <PDFViewer style={styles[selectedStyle].viewer}>
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
              {personalFirstName} {personalLastName}
            </Text>
            <Text
              style={[
                styles[selectedStyle].text,
                styles[selectedStyle].headerText,
              ]}
            >
              {personalAddress}
            </Text>
            <Text
              style={[
                styles[selectedStyle].text,
                styles[selectedStyle].headerText,
              ]}
            >
              {personalZip} {personalCity}
            </Text>
            <Text
              style={[
                styles[selectedStyle].text,
                styles[selectedStyle].headerText,
              ]}
            >
              {personalTelephone}
            </Text>
            <Text
              style={[
                styles[selectedStyle].text,
                styles[selectedStyle].headerText,
              ]}
            >
              {personalEmail}
            </Text>
          </View>
          <View style={styles[selectedStyle].companyHeader}>
            <Text
              style={[
                styles[selectedStyle].text,
                styles[selectedStyle].headerText,
              ]}
            >
              {recruiter}
            </Text>
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
            <Text style={styles[selectedStyle].text}>
              {personalCity}, {currentDate}
            </Text>
          </View>
          <View style={styles[selectedStyle].subjectHeader}>
            <Text style={styles[selectedStyle].text}>{letterSubject}</Text>
          </View>
          {messages && messages.length > 0 ? (
            <Text
              style={[
                styles[selectedStyle].text,
                styles[selectedStyle].promptSection,
              ]}
            >
              {messages[messages.length - 1].content || "No content available."}
            </Text>
          ) : null}
          <View style={styles[selectedStyle].subjectHeader}>
            <Text style={styles[selectedStyle].text}>
              Sincerely, {personalFirstName} {personalLastName}
            </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default Pdf;
