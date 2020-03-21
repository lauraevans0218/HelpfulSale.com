import React from 'react';
import style from './Lead_Form.module.css';

const Lead_Form = () => (
    <div>
        <br></br>
        <form>
            <span>
            <label>Name:</label>
            <input></input>
            </span>
            <br></br>
            <span>
                <label>Home Address:</label>
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