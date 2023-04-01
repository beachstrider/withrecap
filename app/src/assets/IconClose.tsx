export default function IconClose(props: IconCloseProps) {
  return (
    <div className="w-[18px] h-[18px]">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 12.584 5.422 C 12.362 5.2 12.003 5.2 11.782 5.422 L 9 8.198 L 6.218 5.416 C 5.997 5.195 5.638 5.195 5.416 5.416 C 5.195 5.638 5.195 5.997 5.416 6.218 L 8.198 9 L 5.416 11.782 C 5.195 12.003 5.195 12.362 5.416 12.584 C 5.638 12.806 5.997 12.806 6.218 12.584 L 9 9.802 L 11.782 12.584 C 12.003 12.806 12.362 12.806 12.584 12.584 C 12.806 12.362 12.806 12.003 12.584 11.782 L 9.802 9 L 12.584 6.218 C 12.8 6.002 12.8 5.638 12.584 5.422 Z"
          fill="white"
         />
      </svg>
    </div>
  );
}

IconClose.defaultProps = {
  className: "",
};

interface IconCloseProps {
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
