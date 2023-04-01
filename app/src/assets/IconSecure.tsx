export default function IconSecure(props: IconSecureProps) {
  return (
    <div className="w-3 h-3 top-2 absolute left-[11px]">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 9 4 H 8.5 V 3 C 8.5 1.62 7.38 0.5 6 0.5 C 4.62 0.5 3.5 1.62 3.5 3 V 4 H 3 C 2.45 4 2 4.45 2 5 V 10 C 2 10.55 2.45 11 3 11 H 9 C 9.55 11 10 10.55 10 10 V 5 C 10 4.45 9.55 4 9 4 Z M 4.5 4 V 3 C 4.5 2.17 5.17 1.5 6 1.5 C 6.83 1.5 7.5 2.17 7.5 3 V 4 H 4.5 Z"
          fill="#EAEAEA"
         />
      </svg>
    </div>
  );
}

IconSecure.defaultProps = {
  className: "",
};

interface IconSecureProps {
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
