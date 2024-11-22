"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "How does the free cover letter builder work?",
      answer:
        "Our AI-powered cover letter maker uses the job description you provide to generate a tailored, professional cv letter for job applications in minutes. Just paste the job details, add your information, and let AI handle the rest!",
    },
    {
      question: "Can I use this for European cover letters?",
      answer:
        "Yes, our tool is optimized to meet European cover letter standards, including German DIN-Norm 5008.",
    },
    {
      question: "Are there cover letter examples available?",
      answer:
        "Yes! Our platform provides a variety of cover letter examples that you can use or customize based on your needs.",
    },
    {
      question: "Is this service really free?",
      answer:
        "Absolutely! You can generate unlimited cover letters for job applications at no cost.",
    },
    {
      question: "How long does it take to create a cover letter?",
      answer:
        "With our free cover letter builder, you can generate a professional cover letter for a job in under a minute!",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto max-w-2xl space-y-2 p-4">
      {faqData.map((faq, index) => (
        <div key={index} className="overflow-hidden rounded-lg border">
          <div
            onClick={() => toggleAccordion(index)}
            className="relative flex cursor-pointer items-center justify-between p-4"
          >
            <span className="text-lg font-semibold">{faq.question}</span>
            <ChevronDown
              className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"} `}
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96" : "max-h-0"} `}
          >
            <p className="p-4 pt-0">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
