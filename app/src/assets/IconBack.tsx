export default function IconBack(props: IconBackProps) {
  return (
    <div className="inset-y-0 left-0 absolute right-[85.32%]">
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
          d="M 13.23 7.077 H 4.628 L 8.386 3.319 C 8.686 3.018 8.686 2.526 8.386 2.225 C 8.086 1.925 7.601 1.925 7.3 2.225 L 2.225 7.3 C 1.925 7.601 1.925 8.086 2.225 8.386 L 7.3 13.461 C 7.601 13.761 8.086 13.761 8.386 13.461 C 8.686 13.161 8.686 12.675 8.386 12.375 L 4.628 8.617 H 13.23 C 13.654 8.617 14 8.271 14 7.847 C 14 7.423 13.654 7.077 13.23 7.077 Z"
          fill="white"
         />
      </svg>
    </div>
  );
}

IconBack.defaultProps = {
  className: "",
};

interface IconBackProps {
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
