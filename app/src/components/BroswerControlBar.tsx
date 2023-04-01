import BrowserTabWithPlus from "components/BrowserTabWithPlus";

export default function BroswerControlBar(props: BroswerControlBarProps) {
  return (
    <div className="inset-x-0 absolute top-0 bottom-[47.5%]">
      <div className="inset-0 absolute overflow-clip w-[764px] h-[42px]">
        <div
          className="inset-0 rounded-t-lg absolute drop-shadow-lg bg-[rgba(32,33,36,1)]"
         />
        <div
          className="absolute w-[167px] h-[34px] left-[72px] top-[calc(50%_-_17px_+_4px)]"
        >
          <BrowserTabWithPlus />
        </div>
        <div
          className="h-3 absolute w-[52px] left-[calc(50%_-_26px_+_-343px)] top-[calc(50%_-_6px_+_0.5px)] overflow-clip"
        >
          <div
            className="w-3 h-3 absolute rounded-full border-solid left-[calc(50%_-_6px_+_20px)] top-[calc(50%_-_6px_+_0px)] bg-[rgba(39,202,64,1)] border-[0.5px] border-[rgba(62,175,63,1)]"
           />
          <div
            className="w-3 h-3 absolute rounded-full border-solid left-[calc(50%_-_6px_+_0px)] top-[calc(50%_-_6px_+_0px)] bg-[rgba(255,193,48,1)] border-[0.5px] border-[rgba(225,163,37,1)]"
           />
          <div
            className="w-3 h-3 absolute rounded-full border-solid left-[calc(50%_-_6px_+_-20px)] top-[calc(50%_-_6px_+_0px)] bg-[rgba(255,96,88,1)] border-[0.5px] border-[rgba(225,73,66,1)]"
           />
        </div>
      </div>
    </div>
  );
}

BroswerControlBar.defaultProps = {
  className: "",
};

interface BroswerControlBarProps {
  className: string;
}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
