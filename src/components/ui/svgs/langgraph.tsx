import type { SVGProps } from "react";

const LangGraph = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="3" fill="#1C3C3C" />
    <circle cx="7" cy="7" r="2" fill="#10A37F" />
    <circle cx="17" cy="7" r="2" fill="#10A37F" />
    <circle cx="7" cy="17" r="2" fill="#10A37F" />
    <circle cx="17" cy="17" r="2" fill="#10A37F" />
    <circle cx="12" cy="12" r="2.5" fill="#10A37F" />
    <path
      d="M9 7h6M9 17h6M7 9v6M17 9v6M9.5 9.5l2 2M14.5 9.5l-2 2M9.5 14.5l2-2M14.5 14.5l-2-2"
      stroke="#10A37F"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

export { LangGraph };
