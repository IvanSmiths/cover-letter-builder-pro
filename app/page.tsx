import { NextPage } from "next";
import Header from "@/components/home/header/header";

const Home: NextPage = () => {
  const title = "Build Hundreds of Cover Letters in Minutes for Free!";
  const paragraph =
    "Leveraging AI, create Cover Letter tailored specifically for the job you are applying to. " +
    "Build cover letters that fits national standards (German DIN-Norm 5008) for free, blazingly fast, with an extreme cure in design details.";

  return (
    <div className="xl:px-xxxlarge px-small md:px-xlarge lg:px-xxlarge">
      <Header title={title} paragraph={paragraph} isHero={true} />
    </div>
  );
};

export default Home;
