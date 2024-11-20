import Link from "next/link";
import { Button } from "@/components/ui/button";

const CardCta = () => {
  return (
    <div className="3xl:h-[40rem] mt-xlarge flex h-[28rem] w-full flex-col items-center justify-center gap-small rounded-3xl bg-brand p-small">
      <h4 className="3xl:text-8xl text-center text-4xl font-semibold text-light md:text-6xl">
        Stand Out in the <br />
        Crowd of Applicants.
      </h4>
      <Link prefetch={false} href="/dashboard">
        <Button size="lg" className="3xl:text-2xl bg-light text-dark">
          Create cover letter
        </Button>
      </Link>
    </div>
  );
};

export default CardCta;
