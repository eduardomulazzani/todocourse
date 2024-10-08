import React from "react";
import { ButtonStyled } from "./styled";

const Button = ({text = "", onClick = () => {}}) => {

    return <ButtonStyled onClick={onClick}>{text}</ButtonStyled>;
};

export default Button;