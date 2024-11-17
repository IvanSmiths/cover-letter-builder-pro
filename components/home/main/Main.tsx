import React from "react";
import Card from "../cards/Card";
import { ActivitySquare } from "lucide-react";
import BigCard from "@/components/home/cards/BigCard";

const Main = () => {
  return (
    <main className="p-4">
      <div className="flex flex-col gap-4">
        <div className="flex">
          <Card
            title="Copy the job description, enter a few details of the company, and you get the perfect cover letter."
            description=""
            color="purple"
            size="large"
            link="Go to dashboard"
          />
          <Card
            title="77%"
            description="Of possibilities to find your dream job with a well written cover letter."
            color="dark"
            size="small"
            icon={<ActivitySquare className="h-8 w-8 text-[#7C3AED]" />}
          />
        </div>
        <div className="flex">
          <Card
            title="10x"
            description="Generate up to 10 perfectly tailored cover letters per minute, saving hours of manual work."
            color="dark"
            size="small"
          />
          <Card
            title="Copy. Paste. Generate. Let AI create the best possible cover letter for your dream role."
            description=""
            color="purple"
            size="large"
            link="Go to dashboard"
          />
        </div>
        <BigCard />
      </div>
    </main>
  );
};

export default Main;
