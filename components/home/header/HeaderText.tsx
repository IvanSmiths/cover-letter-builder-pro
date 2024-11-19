import { Button } from "@/components/ui/button";

type HeaderProps = {
  isHero?: boolean;
  title: string;
  paragraph: string;
};

const HeaderText = ({ title, paragraph, isHero }: HeaderProps) => {
  return (
    <div
      className={`${isHero ? "px-0 pt-large md:px-xlarge md:pt-xxlarge" : "mt-large"} align-center flex flex-col items-center gap-regular`}
    >
      <h1
        className={`${isHero ? "h-full bg-gradient-to-r from-dark to-gray-800 bg-clip-text text-4xl text-transparent dark:from-light dark:to-gray-300 md:text-7xl lg:text-8xl" : "text-6xl"} text-center font-bold`}
      >
        {title}
      </h1>
      <p className="text-center text-lg text-darkSecondary dark:text-lightSecondary md:w-4/6">
        {paragraph}
      </p>
      {isHero ? (
        <Button
          size="lg"
          className="w-fit bg-brand font-bold text-light hover:bg-brand/90"
        >
          Create Cover Letter
        </Button>
      ) : null}
    </div>
  );
};

export default HeaderText;
