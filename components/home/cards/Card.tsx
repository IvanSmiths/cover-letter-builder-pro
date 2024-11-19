import { ArrowRight } from "lucide-react";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  color: "brand" | "dark";
  size: "small" | "large";
  link?: string;
  iconAbsolute?: React.ReactNode;
}

function Card({
  title,
  description,
  icon,
  color,
  size,
  link,
  iconAbsolute,
}: CardProps) {
  const bgColor = color === "brand" ? "bg-brand" : "dark:bg-[#111316] bg-white";

  return (
    <div
      className={`${bgColor} ${size === "small" ? "min-w-[16rem] items-center justify-center gap-smallest border border-lightSecondary p-xlarge dark:border-darkSecondary md:min-w-[30rem]" : "relative overflow-hidden p-regular"} flex min-h-[15rem] flex-col rounded-3xl sm:min-h-[30rem]`}
    >
      {icon && icon}
      <h2
        className={`${size === "small" ? "text-6xl text-dark dark:text-light md:text-8xl" : "z-20 text-2xl text-light md:text-4xl"} font-bold`}
      >
        {title}
      </h2>
      <p
        className={`${size === "small" ? "text-center text-lg font-semibold text-darkSecondary dark:text-lightSecondary" : "text-xl"}`}
      >
        {description}
      </p>
      {iconAbsolute && iconAbsolute}
      {link && (
        <a
          href="#"
          className="mt-auto inline-flex w-fit items-center text-lg text-light"
        >
          {link} <ArrowRight className="ml-2 h-8 w-8" />
        </a>
      )}
    </div>
  );
}

export default Card;
