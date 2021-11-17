import * as React from "react";

function SvgLogoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 25 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity={0.8}>
        <path
          d="M13.315.048L.013 21.125l8.796-7.33L13.315.048z"
          fill="url(#Logo_Icon_svg__paint0_linear_129_230)"
        />
        <path
          d="M12.792 12.985l-3.978.793L13.314 0l-.522 12.985z"
          fill="url(#Logo_Icon_svg__paint1_linear_129_230)"
        />
        <path
          d="M12.797 12.983l-3.972.791L0 21.14l12.797-8.156z"
          fill="#8D8D8D"
        />
        <path
          d="M12.796 12.983L.02 21.136l24.958-8.153H12.796z"
          fill="url(#Logo_Icon_svg__paint2_linear_129_230)"
        />
        <path
          d="M12.226 21.136l12.772-8.15-24.95 8.15h12.178z"
          fill="#939393"
        />
        <path
          d="M11.7 33.998L25 12.988l-8.78 7.32-4.52 13.69z"
          fill="url(#Logo_Icon_svg__paint3_linear_129_230)"
        />
        <path
          d="M12.201 21.133l4.014-.798L11.7 34l.502-12.867z"
          fill="url(#Logo_Icon_svg__paint4_linear_129_230)"
        />
        <path
          d="M12.223 21.128l3.958-.793 8.81-7.33-12.768 8.123z"
          fill="#BFBFBF"
        />
      </g>
      <defs>
        <linearGradient
          id="Logo_Icon_svg__paint0_linear_129_230"
          x1={4.083}
          y1={28.713}
          x2={-13.673}
          y2={8.879}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8D8D8D" />
          <stop offset={0.475} stopColor="#939393" />
          <stop offset={1} stopColor="#BFBFBF" />
        </linearGradient>
        <linearGradient
          id="Logo_Icon_svg__paint1_linear_129_230"
          x1={4.318}
          y1={4.574}
          x2={13.324}
          y2={4.471}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#939393" />
          <stop offset={1} stopColor="#BFBFBF" />
        </linearGradient>
        <linearGradient
          id="Logo_Icon_svg__paint2_linear_129_230"
          x1={12.499}
          y1={12.983}
          x2={12.499}
          y2={21.136}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BFBFBF" />
          <stop offset={1} stopColor="#939393" />
        </linearGradient>
        <linearGradient
          id="Logo_Icon_svg__paint3_linear_129_230"
          x1={-6.669}
          y1={14.984}
          x2={17.523}
          y2={37.919}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#939393" />
          <stop offset={0.188} stopColor="#939393" />
          <stop offset={1} stopColor="#BFBFBF" />
        </linearGradient>
        <linearGradient
          id="Logo_Icon_svg__paint4_linear_129_230"
          x1={13.957}
          y1={20.335}
          x2={13.957}
          y2={34}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#939393" />
          <stop offset={1} stopColor="#BFBFBF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgLogoIcon;
