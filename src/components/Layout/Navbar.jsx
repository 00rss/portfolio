import React from "react";

import NavbarStyle from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <ul className={NavbarStyle.container}>
      <li className={NavbarStyle.item}>
        <button>contactame</button>
      </li>
      <li className={NavbarStyle.item}>
        <button>proyectos</button>
      </li>
      <li className={NavbarStyle.item}>
        <button>sobre mi</button>
      </li>
    </ul>
  );
};

export default Navbar;
