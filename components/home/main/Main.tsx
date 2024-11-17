import React from "react";
import Card from "./Card";
import { ActivitySquare } from "lucide-react";

const Main = () => {
  return (
    <main className="container mx-auto p-4">
      <div className="mx-auto grid max-w-4xl grid-cols-3 gap-4">
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
    </main>
  );
};

export default Main;
