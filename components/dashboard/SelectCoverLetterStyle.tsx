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
      imgSrc: "/german-din-norm.png",
      imgAlt: "german-din-norm",
      imgWidth: 665,
      imgHeight: 945,
      label: "German DIN-Norm 5008",
    },
    {
      id: "style2",
      imgSrc: "/elegant.png",
      imgAlt: "elegant",
      imgWidth: 665,
      imgHeight: 945,
      label: "Elegant",
    },
  ];
  const { setSelectedStyle } = usePdfStyleStore();

  return (
    <div className="flex flex-row flex-wrap gap-small">
      {styles.map((style) => (
        <div
          key={style.id}
          className="relative w-1/2"
          onClick={() => setSelectedStyle(style.id)}
        >
          <img
            src={style.imgSrc}
            alt={style.imgAlt}
            className="h-fit w-full"
            width={style.imgWidth}
            height={style.imgHeight}
          />
          <h3 className="absolute bottom-small left-1/2 -translate-x-1/2 transform">
            {style.label}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default SelectCoverLetterStyle;
