import React from "react";
import Link from "next/link";

const SimpleInternalButton = () => {
  return (
    <Link prefetch={false} href="/dashboard">
      <button className="rounded-md bg-light px-8 py-3 text-base font-semibold text-dark transition-all hover:bg-dark hover:text-light">
        Create Cover Letter
      </button>
    </Link>
  );
};

export default SimpleInternalButton;
