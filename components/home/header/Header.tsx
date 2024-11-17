import HeaderText from "@/components/home/header/HeaderText";
import HeaderImage from "@/components/home/header/HeaderImage";

const Header = () => {
  const title = "Build Hundreds of Cover Letters in Minutes for Free!";
  const paragraph =
    "Leveraging AI, create Cover Letter tailored specifically for the job you are applying to. " +
    "Build cover letters that fits national standards (German DIN-Norm 5008) for free, blazingly fast, with an extreme cure in design details.";

  return (
    <header>
      <HeaderText title={title} paragraph={paragraph} isHero={true} />
      <HeaderImage />
    </header>
  );
};

export default Header;