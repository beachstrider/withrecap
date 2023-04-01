import Group2 from "assets/Group2";
import Group from "assets/Group";
import Group1 from "assets/Group1";

export default function Google(props: GoogleProps) {
  return (
    <>
      <div className="w-4 h-4 relative overflow-clip">
        {props.type === "TYPE2" && <Group2 />}
        {props.type === "TYPE" && <Group />}
        {props.type === "TYPE1" && <Group1 />}
      </div>
    </>
  );
}

Google.defaultProps = {
  className: "",
  type: "TYPE",
};

interface GoogleProps {
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
