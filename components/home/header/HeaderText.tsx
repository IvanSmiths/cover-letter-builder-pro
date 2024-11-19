import { Button } from "@/components/ui/button";

type HeaderProps = {
  isHero?: boolean;
  title: string;
  paragraph: string;
};

const HeaderText = ({ title, paragraph, isHero }: HeaderProps) => {
  return (
    <div
      className={`${isHero ? "px-0 pt-large md:pt-xxlarge xl:px-xlarge" : "mt-large"} align-center relative z-10 flex flex-col items-center gap-regular`}
    >
      <h1
        className={`${isHero ? "3xl:text-9xl h-full bg-gradient-to-r from-dark via-dark to-gray-500 bg-clip-text text-5xl text-transparent dark:from-light dark:via-light dark:to-gray-400 md:text-7xl lg:text-8xl" : "3xl:text-8xl text-6xl"} text-center font-bold`}
      >
        {title}
      </h1>
      <p
        className={` ${isHero ? "font-semibold text-dark dark:text-light" : ""} 3xl:text-2xl text-center text-darkSecondary dark:text-lightSecondary md:text-lg 2xl:w-4/6`}
      >
        {paragraph}
      </p>
      {isHero ? (
        <Button size="lg" className="3xl:text-2xl w-fit font-bold">
          Create Cover Letter
        </Button>
      ) : null}
    </div>
  );
};

export default HeaderText;
