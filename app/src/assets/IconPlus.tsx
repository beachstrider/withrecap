export default function IconPlus(props: IconPlusProps) {
  return (
    <div className="w-5 h-5">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 15.714 10.953 H 10.952 V 15.714 C 10.952 16.238 10.524 16.667 10 16.667 C 9.476 16.667 9.048 16.238 9.048 15.714 V 10.953 H 4.286 C 3.762 10.953 3.333 10.524 3.333 10 C 3.333 9.476 3.762 9.048 4.286 9.048 H 9.048 V 4.286 C 9.048 3.762 9.476 3.334 10 3.334 C 10.524 3.334 10.952 3.762 10.952 4.286 V 9.048 H 15.714 C 16.238 9.048 16.667 9.476 16.667 10 C 16.667 10.524 16.238 10.953 15.714 10.953 Z"
          fill="#BDC1C6"
         />
      </svg>
    </div>
  );
}

IconPlus.defaultProps = {
  className: "",
};

interface IconPlusProps {
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
