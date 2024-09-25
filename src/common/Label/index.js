import React from "react";
import { LabelStyled } from "./styled";

const Label = ({text = ""}) => {

    return <LabelStyled>{text}</LabelStyled>;
};

export default Label;