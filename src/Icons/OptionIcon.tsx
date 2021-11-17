import * as React from "react";

function SvgOptionIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 4 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.912 16.044A1.956 1.956 0 000 15.99v.105a1.957 1.957 0 003.912-.052zm0-7.044A1.956 1.956 0 000 8.948v.104A1.957 1.957 0 003.912 9zm0-7.044A1.956 1.956 0 000 1.904v.105a1.958 1.958 0 001.956 1.906c1.08 0 1.956-.877 1.956-1.959z"
        fill="#BFBFBF"
      />
    </svg>
  );
}

export default SvgOptionIcon;
