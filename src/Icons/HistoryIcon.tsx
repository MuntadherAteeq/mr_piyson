import * as React from "react";

function SvgHistoryIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.103 0h7.803C15.957 0 18 2.141 18 5.327v7.353c0 3.178-2.043 5.32-5.094 5.32H5.103C2.052 18 0 15.858 0 12.68V5.327C0 2.141 2.052 0 5.103 0zm7.119 12.429c.225 0 .45-.117.576-.333a.67.67 0 00-.234-.927L9.36 9.261V5.102a.675.675 0 10-1.35 0v4.546c0 .234.126.459.333.576l3.528 2.106a.631.631 0 00.351.099z"
        fill="#BFBFBF"
      />
    </svg>
  );
}

export default SvgHistoryIcon;
