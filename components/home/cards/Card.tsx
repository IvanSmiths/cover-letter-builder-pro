import { ArrowRight, LucideIcon } from "lucide-react";
import React from "react";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  color: "brand" | "dark";
  size: "small" | "large";
  link?: string;
  iconAbsolute?: LucideIcon;
}

function Card({
  title,
  description,
  icon: Icon,
  color,
  size,
  link,
  iconAbsolute: IconAbsolute,
}: CardProps) {
  const bgColor = color === "brand" ? "bg-brand" : "dark:bg-[#111316] bg-white";

  return (
    <div
      className={`${bgColor} ${size === "small" ? "min-w-[16rem] items-center justify-center gap-smallest border border-lightSecondary p-small dark:border-darkSecondary md:min-w-[30rem] md:p-xlarge" : "relative overflow-hidden p-regular"} flex min-h-[15rem] flex-col rounded-3xl sm:min-h-[30rem]`}
    >
      {Icon && <Icon className="h-14 w-14 text-brand" />}
      <h2
        className={`${size === "small" ? "3xl:text-9xl text-6xl text-dark dark:text-light md:text-8xl" : "3xl:text-5xl z-20 text-2xl text-light md:text-4xl"} font-bold`}
      >
        {title}
      </h2>
      {description && (
        <p className="3xl:text-2xl text-center text-lg font-semibold text-darkSecondary dark:text-lightSecondary">
          {description}
        </p>
      )}
      {IconAbsolute && (
        <IconAbsolute
          stroke="#EFEFEF3E"
          fill="#5627E1"
          strokeWidth="0.6"
          size="450"
          className="absolute -bottom-xlarge -right-xlarge z-10 hidden xl:block"
        />
      )}
      {link && (
        <Link
          href="#"
          className="mt-auto inline-flex w-fit items-center text-lg text-light"
        >
          {link} <ArrowRight className="ml-2 h-8 w-8" />
        </Link>
      )}
    </div>
  );
}

export default Card;
