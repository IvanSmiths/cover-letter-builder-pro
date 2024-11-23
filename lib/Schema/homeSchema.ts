import { description, keywords, title } from "@/lib/Metadata/homeMetadata";

export const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Cover Letter Builder Pro",
    applicationSubCategory: "Reference Application",
    applicationCategory: "ReferenceApplication",
    offers: {
      "@type": "Offer",
      price: 0,
    },
  },
  {
    "@context": "http://schema.org",
    "@type": "WebSite",
    name: "IvanSmiths",
    url: "https://www.coverletterbuilderpro.com",
    image: "https://www.coverletterbuilderpro.com/home.png",
    description,
    sameAs: "https://www.coverletterbuilderpro.com",
    author: {
      "@type": "Person",
      name: "Ivan",
      familyName: "Smiths",
      url: "https://www.coverletterbuilderpro.com",
    },
    inLanguage: "en",
    copyrightYear: 2020,
    genre: "http://vocab.getty.edu/aat/300179434",
    headline: { title },
    keywords,
    locationCreated: "Wiesbaden",
  },
];
