import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <Link to ="/"> Profile</Link>
            </div>
            <div className={style.item}>
                <Link to="/dialogs"> Messages</Link>
            </div>
            <div className={style.item}>
                <Link to="/"> News</Link>
            </div>
            <div className={style.item}>
                <Link to="/"> Music</Link>
            </div>
            <div className={style.item}>
                <Link to="/"> Settings</Link>
            </div>

        </nav>
    );
  };
  export default Navbar;