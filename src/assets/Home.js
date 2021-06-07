import * as React from "react";

function SvgHome(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M1 6.222L9 0l8 6.222V16c0 .982-.796 1.778-1.778 1.778H2.778A1.778 1.778 0 011 16V6.222z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.333 17.778v-8.89h5.334v8.89"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgHome;
