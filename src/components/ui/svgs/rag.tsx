import type { SVGProps } from "react";

const RAG = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="3" fill="#6366F1" />
    <path
      d="M6 7h5M6 10h4M6 13h5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="16" cy="10" r="4" stroke="white" strokeWidth="1.5" fill="none" />
    <path
      d="M19 13l2 2"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M11 16l5-3"
      stroke="white"
      strokeWidth="1"
      strokeLinecap="round"
      strokeDasharray="2 1"
    />
  </svg>
);

export { RAG };
