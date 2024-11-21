import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";

const PdfDocument = ({
  styles,
  selectedStyle,
  personalFirstName,
  personalLastName,
  personalAddress,
  personalZip,
  personalCity,
  personalTelephone,
  personalEmail,
  recruiter,
  companyName,
  street,
  city,
  currentDate,
  letterSubject,
  messages,
}: any) => (
  <Document
    title={`${personalFirstName} ${personalLastName} - ${companyName} Cover Letter`}
    author={`{{${personalFirstName} ${personalLastName}}}`}
    subject={`${letterSubject}`}
    creator="Cover Letter Pro"
    producer="Cover Letter Pro"
  >
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
          style={[styles[selectedStyle].text, styles[selectedStyle].headerText]}
        >
          {personalAddress}
        </Text>
        <Text
          style={[styles[selectedStyle].text, styles[selectedStyle].headerText]}
        >
          {personalZip} {personalCity}
        </Text>
        <Text
          style={[styles[selectedStyle].text, styles[selectedStyle].headerText]}
        >
          {personalTelephone}
        </Text>
        <Text
          style={[styles[selectedStyle].text, styles[selectedStyle].headerText]}
        >
          {personalEmail}
        </Text>
      </View>
      <View style={styles[selectedStyle].companyHeader}>
        <Text
          style={[styles[selectedStyle].text, styles[selectedStyle].headerText]}
        >
          {recruiter}
        </Text>
        <Text
          style={[styles[selectedStyle].text, styles[selectedStyle].headerName]}
        >
          {companyName}
        </Text>
        <Text
          style={[styles[selectedStyle].text, styles[selectedStyle].headerText]}
        >
          {street}
        </Text>
        <Text
          style={[styles[selectedStyle].text, styles[selectedStyle].headerText]}
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
);

export default PdfDocument;