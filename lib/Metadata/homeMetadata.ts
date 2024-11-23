import { Metadata } from "next";
import { Author } from "next/dist/lib/metadata/types/metadata-types";

export const title: string =
  "Cover Letter Builder Pro - Generate Professional Cover Letters in Minutes";
export const description: string =
  "Generate professional cover letters in minutes with Cover Letter Builder Pro. Create custom cover letters for job applications, tailor them to your company's branding, and send them to your clients. With Cover Letter Builder Pro, you can create cover letters that are optimized for ATS systems, ensuring that your letter aligns with industry standards and highlights your unique skills to match the job requirements.";
export const keywords: string[] = [
  "cover letter",
  "cover letter builder",
  "cover letter generator",
  "cover letter maker",
  "cover letter software",
];
const authors: Author[] = [
  { name: "Ivan Smiths", url: "https://ivansmiths.com" },
];
const generator: string = "Next.js";
const applicationName: string = "Cover Letter Builder Pro";
const creator: string = "Ivan Smiths";
const robots: string = "index, follow";
const category: string = "Technology & Computing";

export const homeMetadata: Metadata = {
  title,
  description,
  keywords,
  authors,
  generator,
  applicationName,
  creator,
  publisher: creator,
  robots,
  category,
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Cover Letter Builder Pro",
    url: `https://coverletterbuilderpro.com`,
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    creator: "@Ivansmiths",
    creatorId: "1303746727594405894",
  },
};
