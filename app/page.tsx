import { NextPage } from "next";
import Header from "@/components/home/header/Header";

const Home: NextPage = () => {
  return (
    <div className="xl:px-xxxlarge px-small md:px-xlarge lg:px-xxlarge">
      <Header />
    </div>
  );
};

export default Home;
