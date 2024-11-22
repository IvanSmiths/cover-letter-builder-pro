import React from "react";
import SimpleInternalButton from "@/components/home/header/SimpleInternalButton";

type HeaderProps = {
  isHero?: boolean;
  title: string;
  paragraph: string;
};

const HeaderText = ({ title, paragraph, isHero }: HeaderProps) => {
  return (
    <div
      className={`${isHero ? "px-0 pt-large md:pt-xxlarge xl:px-xlarge 2xl:px-xxxlarge" : "mt-large"} align-center relative z-10 flex flex-col items-center gap-medium`}
    >
      <h1
        className={`${isHero ? "h-full bg-gradient-to-r from-dark via-dark to-gray-500 bg-clip-text text-5xl text-transparent dark:from-light dark:via-light dark:to-gray-400 md:text-7xl 3xl:text-9xl" : "text-6xl 3xl:text-8xl"} text-center font-bold`}
      >
        {title}
      </h1>
      <p
        className={` ${isHero ? "text-dark dark:text-light" : "2xl:px-xxlarge"} text-center text-darkSecondary dark:text-lightSecondary md:text-base 2xl:px-large 3xl:text-2xl`}
      >
        {paragraph}
      </p>
      {isHero ? <SimpleInternalButton /> : null}
    </div>
  );
};

export default HeaderText;
