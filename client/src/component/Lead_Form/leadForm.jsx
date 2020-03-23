import React from 'react';
import style from './Lead_Form.module.css';

const Lead_Form = () => (
    <div className={style.content}>
        <br></br>
        <h1 className={style.mainText}>Need to sell you home fast? Together, we can do this!</h1>
        <form className={style.form}>
        <p>Please fill out this form and we will contact you to discuss how we can help you:</p>
            <span className={style.text}>
            <label>Name:</label>
            <input></input>
            </span>
            <br></br>
            <span>
                <label>Home Address:</label>
                <input></input>
                <label>City:</label>
                <input></input>
                <label>State:</label>
                <input></input>
                <label>Zip Code</label>
                <input></input>
            </span>
            <br></br>
            <span>
                <label>Phone Number:</label>
                <input></input>
            </span>
            <br></br>
            <span>
                <label>E-mail:</label>
                <input></input>
            </span>
        </form>
    </div>
);

export default Lead_Form;