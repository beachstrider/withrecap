export default function Dots(props: DotsProps) {
  return (
    <>
      <div
        className={`text-center font-bold font-['SF_Pro_Rounded'] transition-all ${
          props.type === "TYPE2" ? "w-full text-[rgba(164,170,178,1)]" : ""
        } ${
          props.type === "TYPE"
            ? "w-4 h-4 relative text-[rgba(105,112,122,1)] overflow-clip"
            : ""
        } ${
          props.type === "TYPE1"
            ? "w-4 h-4 relative text-[rgba(164,170,178,1)] overflow-clip"
            : ""
        }`}
      >
        {props.type === "TYPE2" && (
          <div className="w-4 h-4 relative overflow-clip">
            <p
              className="h-4 w-4 left-0 top-0 absolute leading-5 m-0 text-[13px]"
            >
              􀍠
            </p>
          </div>
        )}
        {props.type === "TYPE" && (
          <p
            className="h-4 w-4 left-0 top-0 absolute leading-5 m-0 text-[13px]"
          >
            􀍠
          </p>
        )}
        {props.type === "TYPE1" && (
          <p
            className="h-4 w-4 left-0 top-0 absolute leading-5 m-0 text-[13px]"
          >
            􀍠
          </p>
        )}
      </div>
    </>
  );
}

Dots.defaultProps = {
  className: "",
  type: "TYPE",
};

interface DotsProps {
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
