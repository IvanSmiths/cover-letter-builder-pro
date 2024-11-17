import { NextPage } from "next";
import Header from "@/components/home/header/Header";
import Main from "@/components/home/main/Main";

const Home: NextPage = () => {
  return (
    <div className="px-small md:px-xlarge lg:px-xxlarge xl:px-xxxlarge">
      <Header />
      <Main />
    </div>
  );
};

export default Home;
