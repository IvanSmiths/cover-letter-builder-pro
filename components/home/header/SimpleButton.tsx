import React from "react";
import Link from "next/link";

const SimpleButton = () => {
  return (
    <Link prefetch={false} href="/dashboard">
      <button className="rounded-md bg-light px-5 py-3 text-lg font-semibold text-dark transition-all hover:bg-dark hover:text-light">
        Create Cover Letter
      </button>
    </Link>
  );
};

export default SimpleButton;
