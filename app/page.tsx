import { NextPage } from "next";
import Header from "@/components/home/header/Header";
import Main from "@/components/home/main/Main";

const Home: NextPage = () => {
  return (
    <div className="bg-light px-small dark:bg-dark md:px-large lg:px-xlarge xl:px-xxlarge">
      <Header />
      <Main />
    </div>
  );
};

export default Home;
