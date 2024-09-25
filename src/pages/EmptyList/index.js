import React from "react";
import { FaListCheck } from "react-icons/fa6";
import {
    EmptyListContainer,
    TextStyled
} from "./styled";

const EmptyList = () => {
    return (
        <EmptyListContainer>
            <FaListCheck size="10%" color="#8bc97b"/>
            <TextStyled>
                Empty List
            </TextStyled>
        </EmptyListContainer>
    );
};

export default EmptyList;