import { NextPage } from "next";
import Header from "@/components/home/header/Header";
import Main from "@/components/home/main/Main";

const Home: NextPage = () => {
  return (
    <div className="relative">
      <img
        className="absolute left-0 top-0 z-0 w-full"
        src="/background.svg"
        alt="background"
      />
      <div className="bg-light px-small dark:bg-dark md:px-large lg:px-xlarge xl:px-xxlarge">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default Home;
