import * as React from "react";

function SvgInboxIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M155.911 19.822L143.556 4.89C141.156 1.867 137.511 0 133.333 0H26.667c-4.178 0-7.823 1.867-10.311 4.889L4.089 19.822C1.51 22.844 0 26.844 0 31.112v111.11C0 152 8 160 17.778 160h124.444C152 160 160 152 160 142.222V31.112c0-4.268-1.511-8.268-4.089-11.29zM80 128.89L31.111 80h31.111V62.222h35.556V80h31.111L80 128.889zM18.844 17.778l7.2-8.89h106.667l8.356 8.89H18.844z"
        fill="#000"
        fillOpacity={0.5}
      />
    </svg>
  );
}

export default SvgInboxIcon;
