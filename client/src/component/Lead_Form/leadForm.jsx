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
            <input id={style.inputs}></input>
            </span>
            <br></br>
            <span>
                <span>
                <label>Home Address:</label>
                <input id={style.inputs}></input>
                </span>
                <br></br>
                <label>City:</label>
                <input id={style.inputSmall}></input>
               
                <label>State:</label>
                <input id={style.inputSmall}></input>
                
                <label>Zip Code:</label>
                <input id={style.inputSmall}></input>
            </span>
            <br></br>
            <span>
                <label>Phone Number:</label>
                <input id={style.inputSmall}></input>
            </span>
            <br></br>
            <span>
                <label>E-mail:</label>
                <input id={style.inputs}></input>
            </span>
            <br></br>
            <div style={{textAlign: "center"}}>
            <button className={style.button}>Submit</button>
            </div>
        </form>
    </div>
);

export default Lead_Form;