import React from 'react'

import './Button.css';


const Button = ({ disabled, onclick, lable }) => {
    return <button
        className='Login-btn'
        disabled={disabled}
        onClick={onclick}>
        {lable}
    </button>
};

export default Button;
