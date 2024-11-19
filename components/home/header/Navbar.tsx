import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <span className="fixed left-small top-small z-20 sm:hidden">
        Cover letter builder
      </span>
      <nav className="fixed bottom-small left-small z-20 block sm:hidden">
        <Link prefetch={false} href="/dashboard">
          <Button variant="outline" size="sm">
            Go to Dashboard
          </Button>
        </Link>
      </nav>
      <nav className="fixed left-0 top-0 z-20 hidden w-full items-center justify-between bg-light/40 bg-clip-padding px-small py-smallest backdrop-blur-xl backdrop-filter dark:bg-dark/40 sm:flex md:px-medium lg:px-xlarge xl:px-xxlarge">
        <span>Cover letter builder</span>
        <Link prefetch={false} href="/dashboard">
          <Button variant="outline" size="sm">
            Go to Dashboard
          </Button>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
