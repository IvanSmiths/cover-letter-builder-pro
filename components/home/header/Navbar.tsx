import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 z-20 flex w-full items-center justify-between gap-smallest bg-light/40 bg-clip-padding px-small py-smallest backdrop-blur-xl backdrop-filter dark:bg-dark/40 md:px-medium lg:px-xlarge xl:px-xxlarge">
      <div className="flex items-center justify-center gap-smallest sm:gap-small">
        <img
          src="/logo.svg"
          alt="logo"
          height="57"
          width="56"
          className="w-10"
        />
        <span className="text-base font-semibold sm:text-xl">
          Cover letter builder
        </span>
      </div>
      <Link prefetch={false} href="/dashboard">
        <Button variant="outline" size="sm">
          Go to Dashboard
        </Button>
      </Link>
    </nav>
  );
};

export default Navbar;
