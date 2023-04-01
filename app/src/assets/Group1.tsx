export default function Group1(props: Group1Props) {
  return (
    <div className="inset-y-0 left-0 absolute right-[-6.25%]">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 8.501 6.546 V 9.644 H 12.808 C 12.619 10.64 12.051 11.484 11.2 12.051 L 13.797 14.066 C 15.31 12.669 16.183 10.619 16.183 8.182 C 16.183 7.615 16.132 7.069 16.037 6.546 L 8.501 6.546 Z"
          fill="#4285F4"
         />
        <path
          d="M 4.017 9.523 L 3.431 9.971 L 1.358 11.586 C 2.675 14.196 5.373 16 8.501 16 C 10.662 16 12.473 15.287 13.797 14.066 L 11.2 12.051 C 10.487 12.531 9.578 12.822 8.501 12.822 C 6.421 12.822 4.653 11.418 4.02 9.527 L 4.017 9.523 Z"
          fill="#34A853"
         />
        <path
          d="M 1.358 4.414 C 0.813 5.491 0.5 6.705 0.5 8 C 0.5 9.294 0.813 10.509 1.358 11.585 C 1.358 11.592 4.021 9.52 4.021 9.52 C 3.861 9.04 3.766 8.531 3.766 8 C 3.766 7.469 3.861 6.96 4.021 6.48 L 1.358 4.414 Z"
          fill="#FBBC05"
         />
        <path
          d="M 8.501 3.185 C 9.68 3.185 10.727 3.593 11.564 4.378 L 13.855 2.087 C 12.466 0.793 10.662 0 8.501 0 C 5.374 0 2.675 1.796 1.358 4.415 L 4.021 6.48 C 4.653 4.589 6.421 3.185 8.501 3.185 Z"
          fill="#EA4335"
         />
      </svg>
    </div>
  );
}

Group1.defaultProps = {
  className: "",
};

interface Group1Props {
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
