export default function MeetingBrainstorm(props: MeetingBrainstormProps) {
  return (
    <div
      className={`px-2 py-1 gap-2.5 inline-flex items-start text-left font-bold bg-[rgba(241,243,245,1)] rounded-[44px] font-['Inter'] text-[rgba(105,112,122,1)]`}
    >
      <p className="text-xs leading-4 uppercase m-0 tracking-[0.5px]">
        In 2 mins
      </p>
    </div>
  );
}

MeetingBrainstorm.defaultProps = {
  className: "",
};

interface MeetingBrainstormProps {
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
