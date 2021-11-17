import { LogoIcon, OptionIcon, SearchIcon } from "../Icons";
import React from "react";

export default function TopBar(props) {
  return (
    <div className="top-bar">
      <div className="logo-container">
        <span>
          <LogoIcon />
        </span>
        <span className="logo-title">mr.piyson</span>
      </div>
      <div className="tools">
        <span>
          <SearchIcon />
        </span>
        <span>
          <OptionIcon />
        </span>
      </div>
    </div>
  );
}
