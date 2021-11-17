import { Props } from "react";
import { DarkBackground, InboxIcon } from "../Icons/index";

export default function Background(props) {
  const users = [
    { name: "Ali", phone: "36860504", total: "+8.000", date: "2021/12/12" },
    { name: "john", phone: "35860504", total: "+3.000", date: "2021/12/5" },
    { name: "Jak", phone: "36890504", total: "+90.000", date: "2021/9/5" },
    { name: "Dewan", phone: "360504", total: "+15.000", date: "2021/5/3" },
    { name: "Showman", phone: "66860504", total: "+0.000", date: "2021/7/9" },
    { name: "Sara", phone: "76860504", total: "+5.000", date: "2021/2/1" },
  ];
  return (
    <div className="scroll-viewBox">
      <ActiveUser user={users[0]} />
    </div>

    // <div className="background">
    //   {true ? <InboxIcon /> : null}
    //   <span>There is no Deals yet</span>
    // </div>
  );
}

const ActiveUser = (user) => {
  const { name, phone, total, date } = user;
  return (
    <div>
      <div className="active-user">
        <div className="right">
          <img src="" alt="" />
          <div className="name">{name}</div>
          <div className="phone">{phone}</div>
        </div>
        <div className="left">
          <div className="date">{date}</div>
          <div className="total">{total}</div>
        </div>
      </div>
    </div>
  );
};
