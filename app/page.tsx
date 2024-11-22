import { NextPage } from "next";
import Header from "@/components/home/header/Header";
import Main from "@/components/home/main/Main";
import Navbar from "@/components/home/header/Navbar";
import Faq from "@/components/home/faq/Faq";

const Home: NextPage = () => {
  return (
    <div className="bg-backgroundPrimary px-small md:px-medium lg:px-xlarge xl:px-xxlarge">
      <Navbar />
      <Header />
      <Main />
      <Faq />
    </div>
  );
};

export default Home;
