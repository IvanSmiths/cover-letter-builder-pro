const HeaderImage = () => {
  return (
    <div className="relative w-full">
      <img
        className="absolute left-1/2 top-[20%] z-0 w-full -translate-x-1/2 -translate-y-1/2 transform"
        src="/background-2.svg"
        alt="background"
      />
      <img
        src="https://ik.imagekit.io/ivansmiths/cover%20letter%20builder/dashboard.png?updatedAt=1732383542546"
        alt="cover letter builder screenshot"
        width="1584"
        height="773"
        className="relative z-10 mt-large rounded-lg border-2 border-lightSecondary dark:border-darkSecondary"
      />
    </div>
  );
};

export default HeaderImage;
