import { Metadata } from "next";
import { keywords } from "@/lib/Metadata/homeMetadata";

export const title: string = "Cover Letter Builder Pro - Dashboard";
export const description: string =
  "Dashboard for Cover Letter Builder Pro. Create custom cover letters for job applications, tailor them to your company's branding, and send them to your clients. With Cover Letter Builder Pro, you can create cover letters that are optimized for ATS systems, ensuring that your letter aligns with industry standards and highlights your unique skills to match the job requirements.";

export const dashboardMetadata: Metadata = {
  title,
  description,
  keywords,
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
