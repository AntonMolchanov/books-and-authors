import React from 'react';
import './button.scss';

const Button = ({callback,text}) => {
    return (
        <button
            className="custom-btn"
            onClick={callback}
        >
            {text}
        </button>
    );
};

export default Button;