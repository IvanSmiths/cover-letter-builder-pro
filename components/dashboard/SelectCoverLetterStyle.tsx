import { usePdfStyleStore } from "@/lib/store";
import { coverLetterStyles } from "@/lib/Pdf/coverLetterStyles";

const SelectCoverLetterStyle = () => {
  const { setSelectedStyle } = usePdfStyleStore();

  return (
    <section className="h-full w-full p-small lg:w-3/12">
      <div className="flex h-full flex-col flex-wrap gap-small lg:flex-row">
        {coverLetterStyles.map((style) => (
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
