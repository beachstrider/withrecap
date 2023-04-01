export default function IconMore(props: IconMoreProps) {
  return (
    <div className="w-4 h-4 absolute left-[35px] top-[3px]">
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
          d="M 8.167 5 C 8.992 5 9.667 4.325 9.667 3.5 C 9.667 2.675 8.992 2 8.167 2 C 7.342 2 6.667 2.675 6.667 3.5 C 6.667 4.325 7.342 5 8.167 5 Z M 8.167 6.5 C 7.342 6.5 6.667 7.175 6.667 8 C 6.667 8.825 7.342 9.5 8.167 9.5 C 8.992 9.5 9.667 8.825 9.667 8 C 9.667 7.175 8.992 6.5 8.167 6.5 Z M 8.167 11 C 7.342 11 6.667 11.675 6.667 12.5 C 6.667 13.325 7.342 14 8.167 14 C 8.992 14 9.667 13.325 9.667 12.5 C 9.667 11.675 8.992 11 8.167 11 Z"
          fill="#5F6368"
         />
      </svg>
    </div>
  );
}

IconMore.defaultProps = {
  className: "",
};

interface IconMoreProps {
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
