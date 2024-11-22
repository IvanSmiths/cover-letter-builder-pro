import SimpleButton from "@/components/home/header/SimpleButton";

const CardCta = () => {
  return (
    <div className="mt-xlarge flex h-[28rem] w-full flex-col items-center justify-center gap-small rounded-3xl bg-brand p-small 3xl:h-[40rem]">
      <h4 className="text-center text-4xl font-semibold text-light md:text-6xl 3xl:text-8xl">
        Stand Out in the <br />
        Crowd of Applicants.
      </h4>
      <SimpleButton />
    </div>
  );
};

export default CardCta;
