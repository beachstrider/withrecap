export default function IconForward(props: IconForwardProps) {
  return (
    <div className="inset-y-0 absolute left-[28.44%] right-[56.88%]">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 2.77 8.617 H 11.372 L 7.614 12.375 C 7.314 12.675 7.314 13.168 7.614 13.469 C 7.914 13.769 8.399 13.769 8.7 13.469 L 13.775 8.394 C 14.075 8.093 14.075 7.608 13.775 7.308 L 8.708 2.225 C 8.407 1.925 7.922 1.925 7.622 2.225 C 7.321 2.526 7.321 3.011 7.622 3.311 L 11.372 7.077 H 2.77 C 2.347 7.077 2 7.423 2 7.847 C 2 8.271 2.347 8.617 2.77 8.617 Z"
          fill="#86888A"
         />
      </svg>
    </div>
  );
}

IconForward.defaultProps = {
  className: "",
};

interface IconForwardProps {
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
