import React from 'react'

import "./Input.css";

const Input = ({ lable, name, value, onChange }) => {
    return (
        <div className='input-container'>
            <div className='input-lable'>{lable}</div>

            <input className='input-box'
                value={value}
                onChange={onChange}
                name={name} />
        </div>
    );
};

export default Input;
