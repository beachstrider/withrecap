export default function IconRefresh(props: IconRefreshProps) {
  return (
    <div className="inset-y-0 absolute left-[56.88%] right-[28.44%]">
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
          d="M 13.998 6.331 V 2.805 C 13.998 2.505 13.638 2.358 13.431 2.571 L 12.245 3.758 C 11.038 2.551 9.318 1.858 7.438 2.025 C 4.645 2.278 2.345 4.525 2.038 7.318 C 1.638 10.931 4.458 13.998 7.998 13.998 C 11.058 13.998 13.585 11.705 13.951 8.745 C 13.998 8.345 13.685 7.998 13.285 7.998 C 12.951 7.998 12.671 8.245 12.631 8.571 C 12.345 10.898 10.338 12.698 7.931 12.665 C 5.458 12.631 3.371 10.545 3.331 8.065 C 3.291 5.465 5.405 3.331 7.998 3.331 C 9.285 3.331 10.451 3.858 11.298 4.698 L 9.905 6.091 C 9.691 6.305 9.838 6.665 10.138 6.665 H 13.665 C 13.851 6.665 13.998 6.518 13.998 6.331 Z"
          fill="white"
         />
      </svg>
    </div>
  );
}

IconRefresh.defaultProps = {
  className: "",
};

interface IconRefreshProps {
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
