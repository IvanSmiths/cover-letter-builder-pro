const Faq = () => {
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
    <div className="mx-auto mt-xlarge flex max-w-2xl flex-col items-center gap-medium">
      <h3 className="text-4xl font-semibold">Frequently Asked Questions</h3>
      <div className="w-full space-y-2">
        {faqData.map((faq, index) => (
          <details key={index} className="w-full rounded-lg">
            <summary className="cursor-pointer p-3 text-lg">
              {faq.question}
            </summary>
            <p className="mt-2 pl-3">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Faq;
