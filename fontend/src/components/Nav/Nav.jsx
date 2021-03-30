import React from "react";
import { Link } from "react-scroll";
import NavLink from "./NavLink";
import NavSvg from "../../static/svg/NavSvg";

function Nav({ toggle }) {
  return (
    <nav className="flex justify-between h-32 shadow items-center font-kanit font-semibold">
      <Link
        to="/"
        className="pl-8 font-extrabold cursor-pointer relative flex flex-row"
      >
        <span>WhereToBin</span>
      </Link>
      <div className="px-4 md:hidden cursor-pointer">
        <NavSvg toggle={toggle} />
      </div>
      <div className="pr-8 md:block hidden">
        <NavLink title="How to use" to="howtouse" />
        <NavLink title="Tips" to="tips" />
        <NavLink title="About" to="about" />
      </div>
    </nav>
  );
}

export default Nav;
