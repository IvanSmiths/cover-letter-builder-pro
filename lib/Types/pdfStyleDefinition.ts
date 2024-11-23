export type PdfStyleDefinition = {
  germanDINNorm: {
    viewer: { width: string; height: string };
    headerName: { fontWeight: number };
    personalHeader: any;
    headerText: { fontSize: number; paddingTop: number };
    companyHeader: any;
    placeholderSection: {
      border: string;
      backgroundColor: string;
      borderRadius: number;
      alignItems: string;
      display: string;
      width: string;
      marginTop: number;
      justifyContent: string;
      height: number;
    };
    page: { padding: number; backgroundColor: string; paddingLeft: number };
    subjectHeader: { marginTop: number };
    text: {
      fontFamily: string;
      color: string;
      fontSize: number;
      lineHeight: number;
    };
    dateHeader: any;
    promptSection: { marginTop: number };
  };
  elegant: {
    viewer: { width: string; height: string };
    headerName: {};
    personalHeader: {
      paddingBottom: number;
      textAlign: string;
      borderBottom: string;
    };
    headerText: { color: string };
    companyHeader: { textAlign: string; marginTop: number };
    placeholderSection: any;
    page: { padding: number; backgroundColor: string; paddingTop: number };
    subjectHeader: {
      fontSize: number;
      marginTop: number;
      fontWeight: number;
    };
    text: {
      fontFamily: string;
      color: string;
      fontSize: number;
      lineHeight: number;
    };
    dateHeader: {
      color: string;
      textAlign: string;
      fontStyle: string;
      marginTop: number;
    };
    promptSection: {
      backgroundColor: string;
      color: string;
      fontStyle: string;
      marginTop: number;
    };
  };
};
