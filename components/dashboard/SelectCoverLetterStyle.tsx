import { PdfStyle, usePdfStyleStore } from "@/lib/store";

type StyleOption = {
  id: PdfStyle;
  imgSrc: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
  label: string;
};

const SelectCoverLetterStyle = () => {
  const styles: StyleOption[] = [
    {
      id: "germanDINNorm",
      imgSrc:
        "https://ik.imagekit.io/ivansmiths/cover%20letter%20builder/german-din-norm.png?updatedAt=1732383542392",
      imgAlt: "german-din-norm",
      imgWidth: 665,
      imgHeight: 945,
      label: "German DIN-Norm 5008",
    },
    {
      id: "elegant",
      imgSrc:
        "https://ik.imagekit.io/ivansmiths/cover%20letter%20builder/elegant.png?updatedAt=1732383542426",
      imgAlt: "elegant",
      imgWidth: 665,
      imgHeight: 945,
      label: "Elegant",
    },
  ];
  const { setSelectedStyle } = usePdfStyleStore();

  return (
    <section className="h-full w-full p-small lg:w-3/12">
      <div className="flex h-full flex-col flex-wrap gap-small lg:flex-row">
        {styles.map((style) => (
          <div
            key={style.id}
            className="group relative w-full cursor-pointer rounded-md lg:w-[calc(50%-10px)]"
            onClick={() => setSelectedStyle(style.id)}
          >
            <img
              src={style.imgSrc}
              alt={style.imgAlt}
              className="h-fit w-full"
              width={style.imgWidth}
              height={style.imgHeight}
            />
            <div className="absolute top-0 h-full w-full bg-gradient-to-t from-white/90 to-transparent transition-all duration-200 group-hover:bg-dark/40 dark:from-black/90" />
            <h3 className="absolute bottom-small left-1/2 -translate-x-1/2 transform text-center text-sm">
              {style.label}
            </h3>
          </div>
        ))}
        <a
          href="https://github.com/IvanSmiths/cover-letter-builder-pro"
          target="_blank"
          rel="noreferrer noopener"
          className="fixed bottom-small right-large rounded-md border-2 border-dark px-6 py-2 text-sm dark:border-light/60"
        >
          Star it on GitHub
        </a>
      </div>
    </section>
  );
};

export default SelectCoverLetterStyle;
