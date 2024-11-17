import { Button } from "@/components/ui/button";

type HeaderProps = {
  isHero?: boolean;
  title: string;
  paragraph: string;
};

const Header = ({ title, paragraph, isHero }: HeaderProps) => {
  return (
    <header className="align-center flex flex-col items-center gap-regular pt-xlarge">
      <h1
        className={` ${isHero ? "h-full bg-gradient-to-r from-dark to-gray-800 bg-clip-text text-4xl text-transparent dark:from-light dark:to-gray-400 md:text-6xl" : "text-3xl"} text-center font-bold`}
      >
        {title}
      </h1>
      <p className="text-center text-darkSecondary dark:text-lightSecondary">
        {paragraph}
      </p>
      {isHero ? (
        <Button className="bg-brand hover:bg-brand/90 w-fit font-bold text-light">
          Create Cover Letter
        </Button>
      ) : null}
    </header>
  );
};

export default Header;
