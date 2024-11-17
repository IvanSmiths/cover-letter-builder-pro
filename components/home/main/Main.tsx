import React from "react";
import Card from "../cards/Card";
import { ActivitySquare } from "lucide-react";
import BigCard from "@/components/home/cards/BigCard";
import HeaderText from "@/components/home/header/HeaderText";

const Main = () => {
  const title = "Impress hiring managers.";
  const paragraph =
    "Applying for a job has never been easier or faster. With our cutting-edge AI-powered platform, " +
    "all you need to do is copy and paste the job description, fill in a few details, and let our system handle the rest. " +
    "Our tool creates polished, professional, and perfectly tailored cover letters designed to showcase your qualifications, " +
    "save you time, and impress hiring managers.";

  return (
    <main>
      <HeaderText title={title} paragraph={paragraph} isHero={false} />
      <div className="mt-large flex flex-col gap-small">
        <div className="flex gap-small">
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
        <div className="flex gap-small">
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