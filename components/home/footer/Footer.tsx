import SimpleExternalButton from "@/components/home/header/SimpleExternalButton";

const Footer = () => {
  return (
    <footer className="flex h-60 w-full items-center justify-center">
      <SimpleExternalButton
        link="https://www.ivansmiths.com"
        label="Powered by Ivan Smiths"
      />
    </footer>
  );
};

export default Footer;
