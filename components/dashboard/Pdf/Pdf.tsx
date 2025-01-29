import React, { useEffect, useState } from "react";
import { BlobProvider, PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import {
  useFormStore,
  useLanguageStore,
  usePdfStyleStore,
  useUserFormState,
} from "@/lib/store";
import { germanDINNorm } from "@/components/dashboard/Pdf/PdfStyles/germanDINNorm";
import { elegant } from "@/components/dashboard/Pdf/PdfStyles/elegant";
import { getTodayDate } from "@/lib/Pdf/getTodayDate";
import { parseAddress } from "@/lib/Pdf/parseAddress";
import PdfDocument from "./PdfDocument";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Message } from "ai";
import { PdfStyleDefinition } from "@/lib/Types/pdfStyleDefinition";

type PdfProps = {
  messages: Message[];
  isLoading: boolean;
};

const Pdf = ({ messages, isLoading }: PdfProps) => {
  const styles: PdfStyleDefinition = {
    germanDINNorm,
    elegant,
  };
  const {
    personalAddress,
    personalZip,
    personalCity,
    personalTelephone,
    personalEmail,
    letterSubject,
    companyFullAddress,
  } = useUserFormState();
  const { companyName, recruiter, personalFirstName, personalLastName } =
    useFormStore((state) => state);
  const { selectedStyle } = usePdfStyleStore();
  const { street, city } = parseAddress(companyFullAddress);
  const { selectedLanguage } = useLanguageStore();
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    setCurrentDate(getTodayDate());
  }, [selectedLanguage]);

  const pdfDocument = (
    <PdfDocument
      isLoading={isLoading}
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
    <main className="w-full max-md:min-h-[calc(100vh-100px)] lg:w-6/12">
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
                  size="default"
                  className="group absolute bottom-small left-1/2 -translate-x-1/2 transform border-0 bg-brand font-bold text-white"
                >
                  Download PDF
                  <Download
                    strokeWidth={3}
                    className="ml-1 h-6 w-6 text-white group-hover:text-white"
                  />
                </Button>
              </PDFDownloadLink>
            )
          }
        </BlobProvider>
      ) : null}
    </main>
  );
};

export default Pdf;
