import { Metadata, NextPage } from "next";
import Header from "@/components/home/header/Header";
import Main from "@/components/home/main/Main";
import Navbar from "@/components/home/header/Navbar";
import Faq from "@/components/home/faq/Faq";
import { homeMetadata } from "@/lib/Metadata/homeMetadata";
import { homeSchema } from "@/lib/Schema/homeSchema";

export const metadata: Metadata = homeMetadata;

const Home: NextPage = () => {
  return (
    <div className="bg-backgroundPrimary px-small md:px-medium lg:px-xlarge xl:px-xxlarge">
      <Navbar />
      <Header />
      <Main />
      <Faq />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
    </div>
  );
};

export default Home;
