import HeaderText from "@/components/home/header/HeaderText";
import HeaderImage from "@/components/home/header/HeaderImage";

const Header = () => {
  const title = "Build Hundreds of Cover Letters for Free!";
  const paragraph =
    "Optimize your job search with our powerful cover letter generator. Craft personalized, " +
    "attention-grabbing cover letters that impress hiring managers and land you interviews.";

  return (
    <header>
      <HeaderText title={title} paragraph={paragraph} isHero={true} />
      <HeaderImage />
    </header>
  );
};

export default Header;
