import React from "react";
import Style from "./Header.module.css"
import Logo from "../../assert/img/logo.png"
const Header = () => {
  return (
    <header className={Style.header}>
      <img src ={Logo} alt="logo"/>
    </header>
  );
};
export default Header;
