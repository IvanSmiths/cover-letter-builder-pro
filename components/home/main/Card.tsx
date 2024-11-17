import { ArrowRight } from "lucide-react";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  color: "purple" | "dark";
  size: "small" | "large";
  link?: string;
}

function Card({ title, description, icon, color, size, link }: CardProps) {
  const bgColor = color === "purple" ? "bg-[#7C3AED]" : "bg-[#1F2937]";
  const textColor = "text-white";
  const sizeClass =
    size === "large" ? "col-span-2 row-span-1" : "col-span-1 row-span-1";

  return (
    <div
      className={`${bgColor} ${textColor} ${sizeClass} flex flex-col justify-between rounded-3xl p-8`}
    >
      {icon && <div className="mb-4">{icon}</div>}
      <div>
        <h2
          className={`mb-2 font-bold ${size === "small" ? "text-5xl" : "text-3xl"}`}
        >
          {title}
        </h2>
        <p className={`${size === "small" ? "text-sm" : "text-xl"} mb-4`}>
          {description}
        </p>
      </div>
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
