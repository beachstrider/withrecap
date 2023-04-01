export default function IconHome(props: IconHomeProps) {
  return (
    <div className="w-4 h-4 top-0 absolute left-[93px]">
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
          d="M 8 2.008 C 7.817 1.983 7.625 2.036 7.478 2.169 L 2.211 6.936 C 1.947 7.174 1.926 7.581 2.163 7.846 C 2.402 8.113 2.813 8.134 3.078 7.894 L 3.474 7.536 V 12.705 V 13 C 3.474 13.553 3.922 14 4.474 14 H 4.763 H 11.206 H 11.495 C 12.047 14 12.495 13.553 12.495 13 V 12.705 V 7.508 L 12.922 7.894 C 13.187 8.134 13.598 8.113 13.837 7.846 C 14.074 7.581 14.053 7.174 13.789 6.936 L 8.522 2.169 C 8.375 2.036 8.183 1.983 8 2.008 Z M 4.763 6.37 V 7.228 V 8.186 V 8.228 V 10.705 V 12 V 12.043 V 12.705 H 5.43 H 5.474 H 6.763 H 9.206 H 10.495 H 10.54 H 11.206 V 12.043 V 12 V 10.705 V 8.228 V 8.186 V 7.228 V 6.342 L 8 3.44 L 4.763 6.37 Z"
          fill="white"
         />
      </svg>
    </div>
  );
}

IconHome.defaultProps = {
  className: "",
};

interface IconHomeProps {
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
