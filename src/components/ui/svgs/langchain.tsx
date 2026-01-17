import type { SVGProps } from "react";

const LangChain = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2L4 6v12l8 4 8-4V6l-8-4z"
      fill="#1C3C3C"
    />
    <path
      d="M12 2l8 4v12l-8 4-8-4V6l8-4z"
      stroke="#10A37F"
      strokeWidth="1.5"
      fill="none"
    />
    <circle cx="12" cy="8" r="2" fill="#10A37F" />
    <circle cx="8" cy="14" r="2" fill="#10A37F" />
    <circle cx="16" cy="14" r="2" fill="#10A37F" />
    <path
      d="M12 8v3M10 13l-1.5-1M14 13l1.5-1"
      stroke="#10A37F"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export { LangChain };
