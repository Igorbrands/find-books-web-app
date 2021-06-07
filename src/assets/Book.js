import * as React from "react";

function SvgBook(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 17 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 15.75a2.25 2.25 0 012.25-2.25H15.4"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M3.25 0H15.4v18H3.25A2.25 2.25 0 011 15.75V2.25A2.25 2.25 0 013.25 0z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgBook;
