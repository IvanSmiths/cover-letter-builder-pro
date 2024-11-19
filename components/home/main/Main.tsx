import React from "react";
import Card from "../cards/Card";
import { ActivitySquare, Sparkles } from "lucide-react";
import BigCard from "@/components/home/cards/BigCard";
import HeaderText from "@/components/home/header/HeaderText";
import CardCta from "@/components/home/cards/CardCta";

const Main = () => {
  const title = "Impress hiring managers.";
  const paragraph =
    "Applying for a job has never been easier or faster. With our cutting-edge AI-powered platform, " +
    "all you need to do is copy and paste the job description, fill in a few details, and let our system handle the rest. " +
    "Our tool creates polished, professional, and perfectly tailored cover letters designed to showcase your qualifications, " +
    "save you time, and impress hiring managers.";

  return (
    <section className="relative z-10 mt-xxlarge">
      <HeaderText title={title} paragraph={paragraph} isHero={false} />
      <main className="mt-large flex flex-col gap-small">
        <div className="flex flex-col gap-small lg:flex-row">
          <Card
            title="Copy the job description, enter a few details of the company, and you get the perfect cover letter."
            description=""
            color="brand"
            size="large"
            link="Go to dashboard"
            iconAbsolute={Sparkles}
          />
          <Card
            title="77%"
            description="Of possibilities to find your dream job with a well written cover letter."
            color="dark"
            size="small"
            icon={ActivitySquare}
          />
        </div>
        <div className="flex flex-col gap-small lg:flex-row">
          <Card
            title="10x"
            description="Generate up to 10 perfectly tailored cover letters per minute, saving hours of manual work."
            color="dark"
            size="small"
          />
          <Card
            title="Copy. Paste. Generate. Let AI create the best possible cover letter for your dream role."
            description=""
            color="brand"
            size="large"
            link="Go to dashboard"
          />
        </div>
        <section className="mt-xlarge">
          <HeaderText title={title} paragraph={paragraph} isHero={false} />
          <BigCard />
        </section>
        <CardCta />
      </main>
    </section>
  );
};

export default Main;
