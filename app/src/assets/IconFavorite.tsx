export default function IconFavorite(props: IconFavoriteProps) {
  return (
    <div className="w-4 h-4 top-1.5 absolute left-[523px]">
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
          d="M 13.362 5.84 L 9.969 5.546 L 8.644 2.426 C 8.406 1.858 7.592 1.858 7.354 2.426 L 6.029 5.553 L 2.643 5.84 C 2.026 5.889 1.774 6.66 2.243 7.067 L 4.816 9.296 L 4.045 12.605 C 3.905 13.208 4.557 13.685 5.09 13.363 L 7.999 11.61 L 10.908 13.37 C 11.441 13.692 12.093 13.215 11.953 12.612 L 11.182 9.296 L 13.755 7.067 C 14.224 6.66 13.979 5.889 13.362 5.84 Z M 7.999 10.299 L 5.363 11.89 L 6.064 8.89 L 3.737 6.871 L 6.807 6.604 L 7.999 3.779 L 9.198 6.611 L 12.269 6.878 L 9.941 8.897 L 10.642 11.897 L 7.999 10.299 Z"
          fill="#5F6368"
         />
      </svg>
    </div>
  );
}

IconFavorite.defaultProps = {
  className: "",
};

interface IconFavoriteProps {
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
