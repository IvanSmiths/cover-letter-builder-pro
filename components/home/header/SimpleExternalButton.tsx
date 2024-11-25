import React from "react";

const SimpleExternalButton = () => {
  return (
    <a
      href="https://github.com/IvanSmiths/cover-letter-builder-pro"
      target="_blank"
      rel="noreferrer noopener"
    >
      <button className="rounded-md border-2 border-dark px-8 py-3 text-base font-semibold transition-all hover:bg-dark hover:text-light dark:border-light hover:dark:border-dark">
        Star it on GitHub
      </button>
    </a>
  );
};

export default SimpleExternalButton;
