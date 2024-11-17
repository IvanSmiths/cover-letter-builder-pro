import { ArrowRight } from "lucide-react";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  color: "brand" | "dark";
  size: "small" | "large";
  link?: string;
}

function Card({ title, description, icon, color, size, link }: CardProps) {
  const bgColor = color === "brand" ? "bg-brand" : "bg-[#1F2937]";
  const textColor = "text-white";

  return (
    <div
      className={`${bgColor} ${textColor} ${size === "small" ? "items-center justify-center gap-smallest p-large" : "p-regular"} flex min-h-[20rem] flex-col rounded-3xl`}
    >
      {icon && icon}
      <h2 className={`${size === "small" ? "text-7xl" : "text-4xl"} font-bold`}>
        {title}
      </h2>
      <p
        className={`${size === "small" ? "text-center text-sm text-darkSecondary dark:text-lightSecondary" : "text-xl"}`}
      >
        {description}
      </p>
      {link && (
        <div className="mt-auto">
          <a href="#" className="inline-flex items-center text-sm font-medium">
            {link} <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      )}
    </div>
  );
}

export default Card;
