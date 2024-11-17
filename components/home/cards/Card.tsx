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
  const sizeClass =
    size === "large" ? "col-span-2 row-span-1" : "col-span-1 row-span-1";

  return (
    <div
      className={`${bgColor} ${textColor} ${sizeClass} flex flex-col rounded-3xl ${size === "small" ? "flex min-h-[20rem] flex-col items-center justify-center gap-smallest p-large" : "p-regular"}`}
    >
      {icon && icon}
      <h2 className={`font-bold ${size === "small" ? "text-7xl" : "text-4xl"}`}>
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
