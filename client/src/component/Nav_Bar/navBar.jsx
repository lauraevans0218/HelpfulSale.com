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
        <li className={style.dropdown}>
          <a className={style.dropbtn}>
            Dropdown
          </a>
          <div className={style.dropdownContent}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
      </ul>
    </span>
  </div>
);

export default Nav_Bar;
