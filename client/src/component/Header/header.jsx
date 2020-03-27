import React from "react";
import style from "./header.module.css";
import logo from '../Images/OriginalLogo.png';

const Header = () => (
<div className={style.header}>
    
    <img src={logo} className={style.image}></img>
    {/* <h1 className={style.text}>Call us! (123) 456-7890</h1> */}
    </div>
);

export default Header;