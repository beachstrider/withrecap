export default function Add(props: AddProps) {
  return (
    <>
      <div
        className={`absolute text-center font-bold overflow-clip font-['SF_Pro'] text-[rgba(164,170,178,1)] transition-all ${
          props.type === "TYPE"
            ? "w-4 h-4 left-[calc(50%_-_8px_+_0px)] top-[calc(50%_-_8px_+_0px)]"
            : ""
        } ${
          props.type === "TYPE1"
            ? "w-[21.77px] h-[21.77px] left-[calc(50%_-_10.89px_+_0px)] top-[calc(50%_-_10.89px_+_0px)]"
            : ""
        }`}
      >
        {props.type === "TYPE" && (
          <p
            className="h-4 w-4 absolute text-sm leading-5 m-0 left-[calc(50%_-_8px_+_0px)] top-[calc(50%_-_8px_+_0px)]"
          >
            􀅼
          </p>
        )}
        {props.type === "TYPE1" && (
          <div>
            <p
              className="absolute m-0 h-[21.774436950683594px] w-[21.774436950683594px] left-[calc(50%_-_10.89px_+_0.11px)] top-[calc(50%_-_10.89px_+_0.11px)] text-[19.05px] leading-[27.218046188354492px]"
            >
              􀅼
            </p>
          </div>
        )}
      </div>
    </>
  );
}

Add.defaultProps = {
  className: "",
  type: "TYPE",
};

interface AddProps {
  className: string;
  type: "TYPE" | "TYPE1";
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
