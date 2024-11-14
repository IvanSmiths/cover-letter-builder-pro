import React from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Send } from "lucide-react";

type PromptButtonProps = {
  isLoading: boolean;
  stop: () => void;
};

const PromptButton = ({ isLoading, stop }: PromptButtonProps) => {
  return (
    <Button type="submit">
      {isLoading ? (
        <>
          Generating . . .
          <Loader2 onClick={stop} className="animate-spin" />
        </>
      ) : (
        <>
          Generate PDF
          <Send className="h-4 w-60" />
        </>
      )}
    </Button>
  );
};

export default PromptButton;
