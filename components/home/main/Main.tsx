import React from "react";
import Card from "../cards/Card";
import { ActivitySquare, Sparkles } from "lucide-react";
import BigCard from "@/components/home/cards/BigCard";
import HeaderText from "@/components/home/header/HeaderText";
import CardCta from "@/components/home/cards/CardCta";

const Main = () => {
  const title = "Impress hiring managers.";
  const paragraph =
    "A cover letter written specifically for a company/role is the cherry on top of a perfect application. " +
    "Use Cover Letter Builder Pro`s AI-driven cover letter builder to create professional," +
    " customized documents that showcase your qualifications and passion for the role and the company you are applying to.";

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
            title="53%"
            description="Of hiring managers consider a great cover letter as important as a strong resume."
            color="dark"
            size="small"
            icon={ActivitySquare}
          />
        </div>
        <div className="flex flex-col gap-small lg:flex-row">
          <Card
            title="10x"
            description="Speed up the process of creating a cover letter by using Cover Letter Builder Pro`s AI-driven cover letter builder."
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
        <BigCard />
        <CardCta />
      </main>
    </section>
  );
};

export default Main;
