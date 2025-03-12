import React from "react";
import "./Button_Css.css"
const Button = ({ label, onClick}) => {
    return <button onClick={() => onClick(label)}>{label}</button>;
};

export default Button;
