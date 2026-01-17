import type { SVGProps } from "react";

const FastAPI = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#009688" />
    <path
      d="M12.5 6L8 12.5h3.5V18l4.5-6.5H12.5V6z"
      fill="white"
    />
  </svg>
);

export { FastAPI };
