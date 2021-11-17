import { useLayoutEffect, useState } from "react";
import { Inbox2Icon, WalletIcon, HistoryIcon } from "../Icons";

export default function (props: any) {
  const [WinWidth, set_width] = useState(0);
  const [position, set_position] = useState(0);
  const [tabSelected, set_tabSelected] = useState(0);

  let PointerStyle = {
    width: `${WinWidth}px`,
    left: `${position}px`,
  };

  useLayoutEffect(() => {
    set_width(window.innerWidth / 3);
    set_position((window.innerWidth / 3) * tabSelected);

    window.addEventListener("resize", () => {
      const calc = window.innerWidth / 3;
      set_width(calc);
      set_position(calc * tabSelected);
    });
  }, [tabSelected]);

  function onClickHandler(key) {
    set_tabSelected(key);
    props.onTabChange ? props.onTabChange(key) : undefined;
  }

  return (
    <div className="tab_bar">
      <button
        onClick={(e) => {
          onClickHandler(0);
        }}
      >
        <Inbox2Icon className={tabSelected === 0 ? "selected" : ""} />
      </button>

      <button
        onClick={(e) => {
          onClickHandler(1);
        }}
      >
        <HistoryIcon className={tabSelected === 1 ? "selected" : ""} />
      </button>

      <button
        onClick={(e) => {
          onClickHandler(2);
        }}
      >
        <WalletIcon className={tabSelected === 2 ? "selected" : ""} />
      </button>
      <span className="pointer" style={PointerStyle}></span>
    </div>
  );
}
