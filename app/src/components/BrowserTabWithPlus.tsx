import CurveL from "assets/CurveL";
import IconClose from "assets/IconClose";
import CurveR from "assets/CurveR";
import IconPlus from "assets/IconPlus";

export default function BrowserTabWithPlus(props: BrowserTabWithPlusProps) {
  return (
    <div
      className={`absolute left-2 top-0 text-white text-left font-normal w-[131px] h-[34px] font-['Roboto']`}
    >
      <div>
        <div
          className="absolute -left-1.5 top-0 gap-2 flex items-center w-[259px]"
        >
          <div className="flex items-start w-[231px]">
            <CurveL />
            <div
              className="rounded-t-lg flex items-center p-2 w-[219px] bg-[rgba(53,54,58,1)] overflow-clip gap-[9px]"
            >
              <div
                className="w-4 h-4 [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/0c96ccfbda7bda53f39c1437cf5bb8dbdf5b6a60.webp)_center_/_cover]"
               />
              <p className="text-xs m-0 leading-[normal]">
                Meditation App Kickoff Call
              </p>
              <IconClose />
            </div>
            <CurveR />
          </div>
          <IconPlus />
        </div>
      </div>
    </div>
  );
}

BrowserTabWithPlus.defaultProps = {
  className: "",
};

interface BrowserTabWithPlusProps {
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
