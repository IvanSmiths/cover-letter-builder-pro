import { faqData } from "@/components/home/faq/faqData";

const Faq = () => {
  return (
    <div className="mx-auto mt-xlarge flex max-w-2xl flex-col items-center gap-medium">
      <h3 className="text-4xl font-semibold">Frequently Asked Questions</h3>
      <div className="w-full space-y-2">
        {faqData.map((faq, index) => (
          <div key={index} className="w-full">
            <details key={index} className="w-full rounded-lg">
              <summary className="cursor-pointer p-3 text-lg">
                {faq.question}
              </summary>
              <p
                dangerouslySetInnerHTML={{ __html: faq.answer }}
                className="mt-2 pb-3 pl-3"
              />
            </details>
            <div className="w-full bg-lightSecondary pt-0.5 dark:bg-darkSecondary"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
