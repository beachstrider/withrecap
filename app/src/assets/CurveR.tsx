export default function CurveR(props: CurveRProps) {
  return (
    <div className="w-1.5 h-2 flex">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 6 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 6 8 C 4.615 7.059 1.385 6.588 0 0 C 0 0 0 8 0 8 C 0 8 6 8 6 8 Z"
          fill="#35363A"
         />
      </svg>
    </div>
  );
}

CurveR.defaultProps = {
  className: "",
};

interface CurveRProps {
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
