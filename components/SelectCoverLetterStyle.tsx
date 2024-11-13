import { usePdfStyleStore } from "@/lib/store";

const SelectCoverLetterStyle = () => {
  const { setSelectedStyle } = usePdfStyleStore();
  return (
    <div>
      <div onClick={() => setSelectedStyle("style1")}>
        Style 1 (Black Helvetica)
      </div>
      <div onClick={() => setSelectedStyle("style2")}>
        Style 2 (Blue Times New Roman)
      </div>
      <div onClick={() => setSelectedStyle("style3")}>
        Style 3 (Green Courier)
      </div>
    </div>
  );
};

export default SelectCoverLetterStyle;
