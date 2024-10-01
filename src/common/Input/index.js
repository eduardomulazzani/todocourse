import React from "react";
import { InputStyled } from "./styled";

const Input = ({value = "", onChange}) => {

    return <InputStyled onChange={onChange} value={value}/>;
};

export default Input;