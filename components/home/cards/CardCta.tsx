import Link from "next/link";
import { Button } from "@/components/ui/button";

const CardCta = () => {
  return (
    <div className="mt-xlarge flex h-96 w-full flex-col items-center justify-center gap-small rounded-3xl bg-brand">
      <h4 className="text-center text-6xl font-semibold text-light">
        Stand Out in the <br />
        Crowd of Applicants.
      </h4>
      <Link href="/dashboard">
        <Button size="lg">Create cover letter</Button>
      </Link>
    </div>
  );
};

export default CardCta;
