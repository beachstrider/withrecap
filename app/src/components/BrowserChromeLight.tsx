import ToolbarUrlControls from "components/ToolbarUrlControls";
import BroswerControlBar from "components/BroswerControlBar";

export default function BrowserChromeLight(props: BrowserChromeLightProps) {
  return (
    <div className="inset-0 absolute">
      <div
        className="inset-x-0 rounded-b-lg top-20 bottom-0 absolute bg-white [background:linear-gradient(0deg,_white,_white),url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/57af2ab9e47e670baa6b84c9d199175558adc1fa.webp)_no-repeat_center_/_contain,linear-gradient(0deg,_white,_white)]"
       />
      <div className="inset-x-0 h-20 absolute top-0 overflow-clip w-[764px]">
        <ToolbarUrlControls />
        <BroswerControlBar />
      </div>
      <div className="inset-0 absolute rounded-lg" />
    </div>
  );
}

BrowserChromeLight.defaultProps = {
  className: "",
};

interface BrowserChromeLightProps {
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
