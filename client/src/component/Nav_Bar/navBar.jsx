import React from "react";
import style from "./Nav_Bar.module.css";

const Nav_Bar = () => (
  <div>
      <span>
    <ul>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#news">News</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      <li style={{float:"right"}}>
        <a className={style.active} href="#about">
          About
        </a>
      </li>
    </ul>
      </span>
  </div>
);

export default Nav_Bar;
