export default function Tick(props: TickProps) {
  return (
    <>
      <div
        className={`relative text-center font-bold overflow-clip font-['SF_Pro_Rounded'] text-[rgba(64,163,255,1)] transition-all ${
          props.type === "TYPE" ? "w-4 h-4" : ""
        } ${props.type === "TYPE1" ? "w-[21.77px] h-[21.77px]" : ""}`}
      >
        <p
          className={`left-0 top-0 absolute m-0 transition-all ${
            props.type === "TYPE" ? "h-4 w-4 leading-5 text-[13px]" : ""
          } ${
            props.type === "TYPE1"
              ? "h-[21.77px] w-[21.77px] text-[17.69px] leading-[27.218046188354492px]"
              : ""
          }`}
        >
          {props.text}
        </p>
      </div>
    </>
  );
}

Tick.defaultProps = {
  className: "",
  type: "TYPE",
  text: "􀆅",
};

interface TickProps {
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
