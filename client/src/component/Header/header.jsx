import React from "react";
import style from "./header.module.css";
import logo from '../Images/OriginalLogo.png';

const Header = () => (
<div>
    <img src={logo} className={style.main}></img>
    <h1 className={style.header}>Call us! (123) 456-7890</h1>
    </div>
);

export default Header;