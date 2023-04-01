export default function Group(props: GroupProps) {
  return (
    <div className="inset-0 absolute">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 8.001 6.546 V 9.644 H 12.308 C 12.119 10.64 11.551 11.484 10.7 12.051 L 13.297 14.066 C 14.81 12.669 15.683 10.619 15.683 8.182 C 15.683 7.615 15.632 7.069 15.537 6.546 L 8.001 6.546 Z"
          fill="#4285F4"
         />
        <path
          d="M 3.517 9.523 L 2.931 9.971 L 0.858 11.586 C 2.175 14.196 4.873 16 8.001 16 C 10.162 16 11.973 15.287 13.297 14.066 L 10.7 12.051 C 9.987 12.531 9.078 12.822 8.001 12.822 C 5.921 12.822 4.153 11.418 3.52 9.527 L 3.517 9.523 Z"
          fill="#34A853"
         />
        <path
          d="M 0.858 4.414 C 0.313 5.491 0 6.705 0 8 C 0 9.294 0.313 10.509 0.858 11.585 C 0.858 11.592 3.521 9.52 3.521 9.52 C 3.361 9.04 3.266 8.531 3.266 8 C 3.266 7.469 3.361 6.96 3.521 6.48 L 0.858 4.414 Z"
          fill="#FBBC05"
         />
        <path
          d="M 8.001 3.185 C 9.18 3.185 10.227 3.593 11.064 4.378 L 13.355 2.087 C 11.966 0.793 10.162 0 8.001 0 C 4.873 0 2.175 1.796 0.858 4.415 L 3.52 6.48 C 4.153 4.589 5.921 3.185 8.001 3.185 Z"
          fill="#EA4335"
         />
      </svg>
    </div>
  );
}

Group.defaultProps = {
  className: "",
};

interface GroupProps {
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
