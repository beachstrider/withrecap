export default function Gift(props: GiftProps) {
  return (
    <div
      className={`w-4 h-4 relative text-center font-bold overflow-clip font-['SF_Pro'] text-[rgba(105,112,122,1)]`}
    >
      <p
        className="h-4 w-4 absolute text-sm leading-5 m-0 left-[calc(50%_-_8px_+_0px)] top-[calc(50%_-_8px_+_0px)]"
      >
        􀑊
      </p>
    </div>
  );
}

Gift.defaultProps = {
  className: "",
};

interface GiftProps {
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
