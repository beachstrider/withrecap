import IconMore from "assets/IconMore";
import IconFavorite from "assets/IconFavorite";
import IconSecure from "assets/IconSecure";
import IconHome from "assets/IconHome";
import IconRefresh from "assets/IconRefresh";
import IconForward from "assets/IconForward";
import IconBack from "assets/IconBack";

export default function ToolbarUrlControls(props: ToolbarUrlControlsProps) {
  return (
    <div
      className={`inset-x-0 absolute text-left font-normal h-[38px] top-[42px] font-['Roboto']`}
    >
      <div className="inset-0 absolute overflow-clip w-[764px] h-[38px]">
        <div
          className="inset-0 absolute drop-shadow-lg bg-[rgba(53,54,58,1)]"
         />
        <div
          className="absolute w-[51px] h-[22px] left-[calc(50%_-_25.5px_+_342.5px)] top-[calc(50%_-_11px_+_0px)] overflow-clip"
        >
          <IconMore />
          <div
            className="absolute rounded-full w-[22px] h-[22px] left-[calc(50%_-_11px_+_-14.5px)] top-[calc(50%_-_11px_+_0px)] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/47874e66ab5c1678be0326b1735b30506be7c26c.webp)_center_/_cover]"
           />
        </div>
        <div
          className="h-7 absolute left-[17.54%] right-[10.6%] top-[calc(50%_-_14px_+_0px)] overflow-clip w-[549px]"
        >
          <div
            className="inset-x-0 h-7 absolute top-[calc(50%_-_14px_+_0px)] bg-[rgba(32,33,36,1)] rounded-[14px]"
           />
          <IconFavorite />
          <div className="h-4 absolute top-1.5 w-[165px] left-[33px]">
            <div
              className="absolute left-0 flex items-center right-[27.88%] top-[calc(50%_-_8px_+_0px)]"
            >
              <p className="text-sm text-white m-0 leading-[normal]">
                meet.google.com
              </p>
              <p
                className="text-sm m-0 leading-[normal] text-[rgba(134,136,138,1)]"
              >
                /
              </p>
            </div>
          </div>
          <IconSecure />
        </div>
        <div
          className="h-4 absolute w-[109px] left-[calc(50%_-_54.5px_+_-315.5px)] top-[calc(50%_-_8px_+_0px)] overflow-clip"
        >
          <IconHome />
          <IconRefresh />
          <IconForward />
          <IconBack />
        </div>
      </div>
    </div>
  );
}

ToolbarUrlControls.defaultProps = {
  className: "",
};

interface ToolbarUrlControlsProps {
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
