
import React from "react";
import {
    CardContainer,
    ButtonsContainer,
    CardButtonStyled
} from "./styled";
import { IoMdClose } from "react-icons/io";
import { FiEdit2 } from "react-icons/fi";

const TodoCard = ({id = "", title = ""}) => {
    return (
        <CardContainer key={id}>
            {title}
            <ButtonsContainer>
                <CardButtonStyled>
                    <FiEdit2 />
                </CardButtonStyled>
                <CardButtonStyled>
                    <IoMdClose />
                </CardButtonStyled>
            </ButtonsContainer>
        </CardContainer>
    );
};

export default TodoCard;