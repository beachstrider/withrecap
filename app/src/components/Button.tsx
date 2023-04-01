import Share from "components/Share";
import Dots from "components/Dots";
import Search from "components/Search";
import Video from "components/Video";
import Google from "components/Google";
import Left from "components/Left";
import Gift from "components/Gift";

export default function Button(props: ButtonProps) {
  return (
    <>
      <div
        className={`py-1.5 inline-flex justify-center items-center transition-all ${
          props.type === "SECONDARY_NORMAL_ICON_TYPE"
            ? "px-3 w-10 h-10 relative gap-1.5 rounded-3xl bg-[rgba(241,243,245,1)]"
            : ""
        } ${
          props.type === "SECONDARY_SMALL_ICON_TYPE"
            ? "px-2 w-8 h-8 gap-1.5 bg-[rgba(241,243,245,1)] rounded-[28px]"
            : ""
        } ${
          props.type === "SECONDARY_SMALL_ICON_TYPE1"
            ? "px-2 w-8 h-8 gap-1.5 bg-[rgba(241,243,245,1)] rounded-[28px]"
            : ""
        } ${
          props.type === "PRIMARY_NORMAL_TEXT_ICON_TYPE"
            ? "px-3.5 h-10 gap-1.5 text-white text-left font-semibold w-[110px] bg-[rgba(18,19,22,1)] rounded-[14px] drop-shadow-lg font-['Inter']"
            : ""
        } ${
          props.type === "SECONDARY_MEDIUM_TEXT_ICON_TYPE"
            ? "px-4 h-12 gap-2.5 text-left font-semibold w-[164px] bg-[rgba(241,243,245,1)] rounded-[14px] font-['Inter'] text-[rgba(34,39,52,1)]"
            : ""
        } ${
          props.type === "SECONDARY_MEDIUM_TEXT_ICON_TYPE1"
            ? "px-4 h-12 gap-2.5 text-left font-semibold bg-[rgba(241,243,245,1)] rounded-[14px] font-['Inter'] text-[rgba(34,39,52,1)]"
            : ""
        } ${
          props.type === "SECONDARY_SMALL_TEXT_ICON_TYPE3"
            ? "h-8 gap-1.5 rounded-xl text-left font-semibold font-['Inter'] text-[rgba(105,112,122,1)]"
            : ""
        } ${
          props.type === "SECONDARY_SMALL_TEXT_TYPE"
            ? "px-2.5 h-8 gap-1.5 rounded-xl text-left w-[125px] bg-[rgba(241,243,245,1)] font-['Inter']"
            : ""
        } ${
          props.type === "SECONDARY_SMALL_TEXT_ICON_TYPE2"
            ? "px-2.5 h-8 gap-1.5 rounded-xl text-left font-semibold bg-[rgba(241,243,245,1)] font-['Inter'] text-[rgba(34,39,52,1)]"
            : ""
        } ${
          props.type === "SECONDARY_SMALL_TEXT_ICON_TYPE"
            ? "px-2.5 h-8 gap-1.5 rounded-xl text-left font-semibold w-[148px] bg-[rgba(241,243,245,1)] font-['Inter'] text-[rgba(34,39,52,1)]"
            : ""
        } ${
          props.type === "SECONDARY_SMALL_TEXT_ICON_TYPE1"
            ? "px-2.5 h-8 gap-1.5 rounded-xl text-left font-semibold w-[83px] bg-[rgba(241,243,245,1)] font-['Inter'] text-[rgba(34,39,52,1)]"
            : ""
        }`}
      >
        {props.type === "SECONDARY_NORMAL_ICON_TYPE" && (
          <Share text="􀰟" />
        )}
        {props.type === "SECONDARY_SMALL_ICON_TYPE" && (
          <Dots type="TYPE" />
        )}
        {props.type === "SECONDARY_SMALL_ICON_TYPE1" && <Search />}
        {props.type === "PRIMARY_NORMAL_TEXT_ICON_TYPE" && <Video />}
        {props.type === "SECONDARY_MEDIUM_TEXT_ICON_TYPE" && (
          <Google type="TYPE1" />
        )}
        {props.type === "SECONDARY_MEDIUM_TEXT_ICON_TYPE1" && (
          <Google type="TYPE2" />
        )}
        {props.type === "SECONDARY_SMALL_TEXT_ICON_TYPE3" && <Left />}
        {props.type === "SECONDARY_SMALL_TEXT_ICON_TYPE2" && <Gift />}
        {props.type === "SECONDARY_SMALL_TEXT_ICON_TYPE" && (
          <Google type="TYPE" />
        )}
        {props.type === "SECONDARY_SMALL_TEXT_ICON_TYPE1" && (
          <Share text="􀰟" />
        )}
        {props.type === "SECONDARY_SMALL_TEXT_TYPE" && (
          <div className="leading-none relative">
            <p
              className="font-semibold leading-5 inline m-0 text-[15px] text-[rgba(34,39,52,1)]"
            >
              {"Tue 21 "}
            </p>
            <p
              className="font-thin leading-5 inline m-0 text-[15px] text-[rgba(164,170,178,1)]"
            >
              {"• "}
            </p>
            <p
              className="font-semibold leading-5 inline m-0 text-[15px] text-[rgba(34,39,52,1)]"
            >
              Today
            </p>
          </div>
        )}
        {props.type === "SECONDARY_SMALL_TEXT_ICON_TYPE1" && (
          <p className="leading-5 m-0 text-[15px]">Share</p>
        )}
        {props.type === "PRIMARY_NORMAL_TEXT_ICON_TYPE" && (
          <p className="leading-5 m-0 text-[15px]">Join Call</p>
        )}
        {props.type === "SECONDARY_MEDIUM_TEXT_ICON_TYPE" && (
          <p className="leading-5 m-0 text-[15px]">Add to Chrome</p>
        )}
        {props.type === "SECONDARY_MEDIUM_TEXT_ICON_TYPE1" && (
          <p className="leading-5 m-0 text-[15px]">Add to Chrome</p>
        )}
        {props.type === "SECONDARY_SMALL_TEXT_ICON_TYPE3" && (
          <p className="leading-5 m-0 text-[15px]">Back</p>
        )}
        {props.type === "SECONDARY_SMALL_TEXT_ICON_TYPE2" && (
          <p className="leading-5 m-0 text-[15px]">
            Help a friend save time
          </p>
        )}
        {props.type === "SECONDARY_SMALL_TEXT_ICON_TYPE" && (
          <p className="leading-5 m-0 text-[15px]">Add to Chrome</p>
        )}
      </div>
    </>
  );
}

Button.defaultProps = {
  className: "",
  type: "SECONDARY_SMALL_TEXT_TYPE",
};

interface ButtonProps {
  className: string;
  type:
    | "SECONDARY_SMALL_TEXT_TYPE"
    | "SECONDARY_SMALL_TEXT_ICON_TYPE"
    | "SECONDARY_MEDIUM_TEXT_ICON_TYPE"
    | "SECONDARY_MEDIUM_TEXT_ICON_TYPE1"
    | "PRIMARY_NORMAL_TEXT_ICON_TYPE"
    | "SECONDARY_NORMAL_ICON_TYPE"
    | "SECONDARY_SMALL_ICON_TYPE"
    | "SECONDARY_SMALL_ICON_TYPE1"
    | "SECONDARY_SMALL_TEXT_ICON_TYPE1"
    | "SECONDARY_SMALL_TEXT_ICON_TYPE2"
    | "SECONDARY_SMALL_TEXT_ICON_TYPE3";
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
