import BrowserChromeLight from "components/BrowserChromeLight";

export default function BrowserChromeDark(props: BrowserChromeDarkProps) {
  return (
    <div className="relative w-[764px] h-[319px]">
      <BrowserChromeLight />
    </div>
  );
}

BrowserChromeDark.defaultProps = {
  className: "",
};

interface BrowserChromeDarkProps {
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
