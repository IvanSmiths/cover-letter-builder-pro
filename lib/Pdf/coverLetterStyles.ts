import { PdfStyle } from "@/lib/store";

type StyleOption = {
  id: PdfStyle;
  imgSrc: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
  label: string;
};

export const coverLetterStyles: StyleOption[] = [
  {
    id: "germanDINNorm",
    imgSrc:
      "https://ik.imagekit.io/ivansmiths/cover%20letter%20builder/german-din-norm.png?updatedAt=1732383542392",
    imgAlt: "german-din-norm",
    imgWidth: 665,
    imgHeight: 945,
    label: "German DIN-Norm 5008",
  },
  {
    id: "elegant",
    imgSrc:
      "https://ik.imagekit.io/ivansmiths/cover%20letter%20builder/elegant.png?updatedAt=1732383542426",
    imgAlt: "elegant",
    imgWidth: 665,
    imgHeight: 945,
    label: "Elegant",
  },
];
