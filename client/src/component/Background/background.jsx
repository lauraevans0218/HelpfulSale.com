import React from "react";
import style from "./background.module.css";
import image from '../Images/backgroundimage.jpg';

const Background = () => (
<div>
    <span>
    <img src={image} className={style.main}></img>
    </span>
    </div>
);

export default Background;