import { Button } from "@/components/ui/button";
import { Loader2, Wand2 } from "lucide-react";

type PromptButtonProps = {
  isLoading: boolean;
  stop: () => void;
};

const PromptButton = ({ isLoading, stop }: PromptButtonProps) => {
  return (
    <Button
      size="lg"
      type="submit"
      className="bg-brand text-sm text-light hover:bg-brand/70 lg:text-base"
    >
      {isLoading ? (
        <>
          Generating . . .
          <Loader2 onClick={stop} className="animate-spin" />
        </>
      ) : (
        <>
          Generate Cover Letter
          <Wand2 className="h-4" />
        </>
      )}
    </Button>
  );
};

export default PromptButton;
