import React, { useEffect, useState } from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
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
import { getTodayDate } from "@/lib/Pdf/getTodayDate";
import { parseAddress } from "@/lib/Pdf/parseAddress";
import PdfDocument from "./PdfDocument";
import { PdfProps } from "@/components/dashboard/Pdf/PdfWrapper";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pdf = ({ messages }: PdfProps) => {
  const styles = {
    germanDINNorm,
    style2,
    style3,
  };
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
  const { format } = useDateFormatStore();
  const { selectedStyle } = usePdfStyleStore();
  const { street, city } = parseAddress(companyFullAddress);
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    setCurrentDate(getTodayDate(format || defaultFormat));
  }, [format]);

  return (
    <>
      <PDFViewer style={styles[selectedStyle].viewer}>
        <PdfDocument
          styles={styles}
          selectedStyle={selectedStyle}
          personalFirstName={personalFirstName}
          personalLastName={personalLastName}
          personalAddress={personalAddress}
          personalZip={personalZip}
          personalCity={personalCity}
          personalTelephone={personalTelephone}
          personalEmail={personalEmail}
          recruiter={recruiter}
          companyName={companyName}
          street={street}
          city={city}
          currentDate={currentDate}
          letterSubject={letterSubject}
          messages={messages}
        />
      </PDFViewer>
      {messages && messages.length > 0 ? (
        <PDFDownloadLink
          className="absolute bottom-small left-1/2 -translate-x-1/2 transform"
          document={
            <PdfDocument
              styles={styles}
              selectedStyle={selectedStyle}
              personalFirstName={personalFirstName}
              personalLastName={personalLastName}
              personalAddress={personalAddress}
              personalZip={personalZip}
              personalCity={personalCity}
              personalTelephone={personalTelephone}
              personalEmail={personalEmail}
              recruiter={recruiter}
              companyName={companyName}
              street={street}
              city={city}
              currentDate={currentDate}
              letterSubject={letterSubject}
              messages={messages}
            />
          }
          fileName={`${personalFirstName} ${personalLastName} - ${companyName} Cover Letter.pdf`}
        >
          {({ loading }) =>
            loading ? (
              <span className="text-dark">
                Preparing document...
                <Loader2 className="ml-2 h-4 w-4 animate-spin text-dark" />
              </span>
            ) : (
              <Button
                variant="outline"
                size="sm"
                className="group bg-white text-dark"
              >
                Download PDF
                <Download className="ml-2 h-4 w-4 text-dark group-hover:text-white" />
              </Button>
            )
          }
        </PDFDownloadLink>
      ) : null}
    </>
  );
};

export default Pdf;
