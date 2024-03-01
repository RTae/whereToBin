import React from "react";
import NavLink from "./NavLink";

function Dropdown({ isOpen, toggle }) {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center bg-gray-100"
          : "hidden"
      }
      onClick={toggle}
    >
      <NavLink to="howtouse" title="How to use" />
      <NavLink to="tips" title="Tips" />
      <NavLink to="about" title="About" />
      <NavLink to="contact" title="Contact" />
    </div>
  );
}

export default Dropdown;
