import React from 'react';
import './Input.css';

const Input = (props) => {

    const { label, tipo, onChange } = props;

    return (
        <div className="Input">
            <label> {label} </label>
            <input type={tipo} onChange={onChange} ></input>
        </div>
    );
}

export default Input;