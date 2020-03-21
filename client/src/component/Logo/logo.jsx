import React from 'react';
import logo from '../Images/OriginalLogo.png';
import style from './logo.module.css';

const Logo = () => (
    <div>
        <img src={logo} className={style.main}></img>
    </div>
);

export default Logo;