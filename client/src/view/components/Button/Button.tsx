import React, {FC} from 'react';
import './button.scss';

interface IButtonProps {
    callback?: () => void,
    text: string
}

const Button: FC<IButtonProps> = ({callback,text}) => {
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