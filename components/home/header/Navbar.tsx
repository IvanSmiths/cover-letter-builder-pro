import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 z-20 flex w-full items-center justify-between bg-light/40 bg-clip-padding px-small py-smallest backdrop-blur-xl backdrop-filter dark:bg-dark/40 md:px-medium lg:px-xlarge xl:px-xxlarge">
      <span>Cover letter builder</span>
      <Button variant="outline" size="sm">
        Go to Dashboard
      </Button>
    </nav>
  );
};

export default Navbar;
