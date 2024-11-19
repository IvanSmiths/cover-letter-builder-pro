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
      headline: "Stand Out in the Crowd.",
      paragraph:
        "In a competitive markets, hiring managers receive hundreds of applications. A personalized, well-written, tailored cover letter immediately sets you apart.",
    },
    {
      headline: "Stand Out in the Crowd.",
      paragraph:
        "In a markets, hiring managers receive hundreds of applications. A personalized, well-written, tailored cover letter immediately sets you apart.",
    },
    {
      headline: "Stand Out in the Crowd.",
      paragraph:
        "In a competitive, hiring managers receive hundreds of applications. A personalized, well-written, tailored cover letter immediately sets you apart.",
    },
    {
      headline: "Stand Out in the Crowd.",
      paragraph:
        "In a competitive, hiring managers receive hundreds of applications. A personalized, well-written, tailored cover letter immediately sets you apart.",
    },
  ];

  return (
    <div className="w-full">
      <div className="rounded-3xl bg-[#1F2937] p-8 md:p-12">
        <div className="flex">
          {/* Left Column */}
          <div className="flex flex-col justify-between pr-8">
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Make the difference between landing your dream job or being
              overlooked.
            </h2>

            <div className="flex gap-small">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex w-52 flex-col items-center justify-center rounded-xl border border-lightSecondary bg-white p-6 text-center dark:border-darkSecondary dark:bg-[#111316]"
                >
                  <span className="text-4xl font-bold">{stat.percentage}</span>
                  <p className="text-sm text-darkSecondary dark:text-lightSecondary">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="hidden space-y-8 border-l border-gray-700 pl-8 md:block">
            {benefits.map((benefit, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-semibold text-white">
                  {benefit.headline}
                </h3>
                <p className="text-gray-400">{benefit.paragraph}</p>
              </div>
            ))}
          </div>

          {/* Mobile Right Column */}
          <div className="space-y-6 md:hidden">
            {benefits.slice(0, 2).map((benefit, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-semibold text-white">
                  {benefit.headline}
                </h3>
                <p className="text-gray-400">{benefit.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
