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
    "Stand Out in the Crowd.",
    "Stand Out in the Crowd.",
    "Stand Out in the Crowd.",
    "Stand Out in the Crowd.",
  ];

  return (
    <div className="w-full">
      <div className="rounded-3xl bg-[#1F2937] p-8 md:p-12">
        <div className="flex">
          {/* Left Column */}
          <div className="flex flex-col justify-between">
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Make the difference between landing your dream job or being
              overlooked.
            </h2>

            <div className="flex gap-small">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-[#7C3AED]/20 bg-[#1a232c] p-6"
                >
                  <div className="mb-2 text-4xl font-bold text-white">
                    {stat.percentage}
                  </div>
                  <p className="text-sm text-gray-400">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="hidden space-y-8 border-l border-gray-700 pl-8 md:block">
            {benefits.map((benefit, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-semibold text-white">{benefit}</h3>
                <p className="text-gray-400">
                  In a competitive markets, hiring managers receive hundreds of
                  applications. A personalized, well-written, tailored cover
                  letter immediately sets you apart.
                </p>
              </div>
            ))}
          </div>

          {/* Mobile Right Column */}
          <div className="space-y-6 md:hidden">
            {benefits.slice(0, 2).map((benefit, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-semibold text-white">{benefit}</h3>
                <p className="text-gray-400">
                  In a competitive markets, hiring managers receive hundreds of
                  applications. A personalized, well-written, tailored cover
                  letter immediately sets you apart.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
