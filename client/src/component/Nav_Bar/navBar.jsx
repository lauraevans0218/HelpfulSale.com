import React from "react";
import style from "./Nav_Bar.module.css";

const Nav_Bar = () => (
  <div>
      <span>
      <ul id={style.menuBar}>
 {/* <li className={style.active}><a href="#">Home</a></li> */}
 <li><a href="#">Locations</a>
  <ul>
   <li><a href="#">Miami/Fort Lauderdale/South Florida</a></li>
   <li><a href="#">Orlando/Ocala</a></li>
   <li><a href="#">Tampa/Clearwater</a></li>
   <li><a href="#">Anywhere else in the State of Florida!</a></li>
  </ul>
 </li>
 <li><a href="#">About Us</a></li>
 <li><a href="#">Contact Us</a></li>
</ul>
      </span>
  </div>
);

export default Nav_Bar;
