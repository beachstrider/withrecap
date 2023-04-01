export default function Text(props: TextProps) {
  return (
    <>
      <div
        className={`relative text-center font-bold overflow-clip font-['SF_Pro_Rounded'] text-[rgba(105,112,122,1)] transition-all ${
          props.type === "TYPE1" ? "w-[16.61px] h-[16.61px]" : ""
        } ${props.type === "TYPE" ? "w-4 h-4" : ""}`}
      >
        <p
          className={`left-0 top-0 absolute m-0 transition-all ${
            props.type === "TYPE1"
              ? "h-[16.61px] w-[16.61px] text-[14.53px] leading-[20.762575149536133px]"
              : ""
          } ${props.type === "TYPE" ? "h-4 w-4 text-sm leading-5" : ""}`}
        >
          {props.text}
        </p>
      </div>
    </>
  );
}

Text.defaultProps = {
  className: "",
  type: "TYPE",
  text: "􀌀",
};

interface TextProps {
  className: string;
  type: "TYPE" | "TYPE1";
  text: string;
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
