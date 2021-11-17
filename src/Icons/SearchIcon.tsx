import * as React from "react";

function SvgSearchIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M7.351 14.563a7.397 7.397 0 004.273-1.364l4.531 4.489c.21.208.488.312.774.312.622 0 1.071-.473 1.071-1.08 0-.284-.096-.549-.306-.757l-4.502-4.47a7.208 7.208 0 001.51-4.412C14.702 3.276 11.395 0 7.351 0 3.298 0 0 3.276 0 7.281c0 4.006 3.298 7.282 7.351 7.282zm0-1.572c-3.164 0-5.764-2.585-5.764-5.71 0-3.124 2.6-5.71 5.764-5.71 3.155 0 5.764 2.586 5.764 5.71 0 3.125-2.61 5.71-5.764 5.71z"
        fill="#BFBFBF"
      />
    </svg>
  );
}

export default SvgSearchIcon;
