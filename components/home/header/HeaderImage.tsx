const HeaderImage = () => {
  return (
    <div className="relative w-full">
      <img
        className="absolute left-1/2 top-[20%] z-0 w-full -translate-x-1/2 -translate-y-1/2 transform"
        src="/background-2.svg"
        alt="background"
      />
      <img
        src="/dashboard.png"
        alt="cover letter builder screenshot"
        width="1584"
        height="773"
        className="relative z-10 mt-large w-full border-darkSecondary dark:border-lightSecondary"
      />
    </div>
  );
};

export default HeaderImage;
