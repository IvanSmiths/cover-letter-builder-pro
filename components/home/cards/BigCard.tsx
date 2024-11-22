const BigCard = () => {
  const stats = [
    {
      percentage: "78%",
      description:
        "Of recruiters prefer applications that follow standard formatting guidelines.",
    },
    {
      percentage: "78%",
      description:
        "Of recruiters prefer applications that follow standard formatting guidelines.",
    },
  ];

  const benefits = [
    {
      headline: "Be Memorable.",
      paragraph:
        "Make the difference between landing your dream job or being overlooked.",
    },
    {
      headline: "Get Noticed.",
      paragraph:
        "Increase your chances of getting called for an interview with a cover letter that grabs the hiring manager's attention",
    },
    {
      headline: "Build hundreds of cover letters effortlessly.",
      paragraph:
        "Cover Letter Builder Pro`s powerful AI engine generates high-quality, customized cover letters at lightning speed. No more agonizing over wording - let AI do the heavy lifting.",
    },
    {
      headline: "Stand Out in the Crowd.",
      paragraph:
        "In a competitive, hiring managers receive hundreds of applications. A personalized, well-written, tailored cover letter immediately sets you apart.",
    },
  ];

  return (
    <div className="mt-large flex w-full flex-col gap-large rounded-3xl border border-background bg-background p-small dark:bg-[#111316] md:flex-row md:gap-0 md:p-12">
      <div className="flex flex-col justify-between gap-regular md:gap-0 md:pr-8">
        <h3 className="text-3xl font-bold md:text-4xl lg:text-5xl 3xl:text-6xl">
          Make the difference between landing your dream job or being
          overlooked.
        </h3>
        <div className="flex flex-wrap gap-small">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex w-full flex-col items-center justify-center rounded-xl border border-lightSecondary bg-white p-6 text-center dark:border-darkSecondary dark:bg-[#111316] md:w-52 3xl:w-72"
            >
              <span className="text-5xl font-bold 3xl:text-7xl">
                {stat.percentage}
              </span>
              <p className="text-sm text-darkSecondary dark:text-lightSecondary 3xl:text-xl">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8 md:border-l md:border-gray-700 md:pl-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-xl font-semibold 3xl:text-4xl">
              {benefit.headline}
            </h3>
            <p className="text-darkSecondary dark:text-lightSecondary 3xl:text-2xl">
              {benefit.paragraph}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BigCard;
