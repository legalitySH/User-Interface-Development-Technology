import React from "react";
import '../src/index.css';

type buttonProps =
    {
        'title': string,
        'callback': () => void;
        'disabled'?: boolean;
    }

const Button: React.FC<buttonProps> = ({ title, callback, disabled }) => {
    return (
        <button className="btn" onClick={callback} disabled={disabled}>{title}</button>
    );
};

export default Button;