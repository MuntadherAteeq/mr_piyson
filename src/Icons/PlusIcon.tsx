import * as React from "react";

function SvgPlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.915 0a1.66 1.66 0 00-1.66 1.66v7.744H1.66a1.66 1.66 0 000 3.32h7.596v7.744a1.66 1.66 0 103.32 0v-7.744h7.595a1.66 1.66 0 000-3.32h-7.596V1.66A1.66 1.66 0 0010.915 0z"
        fill="#1C1C1C"
      />
    </svg>
  );
}

export default SvgPlusIcon;
