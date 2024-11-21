import React, { useEffect, useState } from "react";
import { BlobProvider, PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
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
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Message } from "ai";

type PdfProps = {
  messages: Message[];
};

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

  const pdfDocument = (
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
  );

  return (
    <>
      <PDFViewer showToolbar={false} style={styles[selectedStyle].viewer}>
        {pdfDocument}
      </PDFViewer>
      {messages && messages.length > 0 ? (
        <BlobProvider document={pdfDocument}>
          {({ loading }) =>
            loading ? (
              <span className="text-dark">
                Preparing document...
                <Loader2 className="ml-2 h-4 w-4 animate-spin text-dark" />
              </span>
            ) : (
              <PDFDownloadLink
                document={pdfDocument}
                fileName={`${personalFirstName} ${personalLastName} - ${companyName} Cover Letter.pdf`}
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="group absolute bottom-small left-1/2 -translate-x-1/2 transform bg-white text-dark"
                >
                  Download PDF
                  <Download className="ml-2 h-4 w-4 text-dark group-hover:text-white" />
                </Button>
              </PDFDownloadLink>
            )
          }
        </BlobProvider>
      ) : null}
    </>
  );
};

export default Pdf;
