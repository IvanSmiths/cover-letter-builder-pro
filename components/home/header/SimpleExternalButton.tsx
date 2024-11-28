type SimpleExternalButtonProps = {
  link: string;
  label: string;
};

const SimpleExternalButton = ({ link, label }: SimpleExternalButtonProps) => {
  return (
    <a href={link} target="_blank" rel="noreferrer noopener">
      <button className="rounded-md border-2 border-dark px-8 py-3 text-base font-semibold transition-all hover:bg-dark hover:text-light dark:border-light hover:dark:border-dark">
        {label}
      </button>
    </a>
  );
};

export default SimpleExternalButton;
