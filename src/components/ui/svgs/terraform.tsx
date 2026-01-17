import type { SVGProps } from "react";

const Terraform = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <path
      d="M1 5.5L8.5 10v9l-7.5-4.5v-9z"
      fill="#5C4EE5"
    />
    <path
      d="M9.5 10l7.5-4.5v9L9.5 19v-9z"
      fill="#4040B2"
    />
    <path
      d="M9.5 0.5l7.5 4.5-7.5 4.5V0.5z"
      fill="#5C4EE5"
    />
    <path
      d="M18 5.5l6 3.5v9l-6-3.5v-9z"
      fill="#4040B2"
    />
  </svg>
);

export { Terraform };
