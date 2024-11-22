"use client";

import React from "react";

const Faq: React.FC = () => {
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

  return (
    <div className="mx-auto max-w-2xl space-y-2 p-4">
      {faqData.map((faq, index) => (
        <details
          key={index}
          className="rounded-lg border p-2 transition-colors duration-200"
        >
          <summary className="cursor-pointer select-none text-lg font-semibold">
            {faq.question}
          </summary>
          <p className="mt-2 pl-2">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
};

export default Faq;
