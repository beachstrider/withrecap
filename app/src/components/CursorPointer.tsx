import Pointing1 from "assets/Pointing1";
import Pointing from "assets/Pointing";
import Pointing2 from "assets/Pointing2";

export default function CursorPointer(props: CursorPointerProps) {
  return (
    <>
      <div
        className={`transition-all ${props.type === "TYPE1" ? "w-full" : ""} ${
          props.type === "TYPE"
            ? "w-6 h-6 absolute left-[1042px] top-[52px] overflow-clip"
            : ""
        } ${
          props.type === "TYPE2"
            ? "w-6 h-6 absolute left-48 top-32 overflow-clip"
            : ""
        }`}
      >
        {props.type === "TYPE1" && (
          <div
            className="w-6 h-6 absolute left-[722px] top-[18px] overflow-clip"
          >
            <Pointing1 />
          </div>
        )}
        {props.type === "TYPE" && <Pointing />}
        {props.type === "TYPE2" && <Pointing2 />}
      </div>
    </>
  );
}

CursorPointer.defaultProps = {
  className: "",
  type: "TYPE",
};

interface CursorPointerProps {
  className: string;
  type: "TYPE" | "TYPE1" | "TYPE2";
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
