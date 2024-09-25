
import React from "react";
import {
    CardContainer,
    ButtonsContainer,
    CardButtonStyled
} from "./styled";
import { IoMdClose } from "react-icons/io";
import { FiEdit2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const TodoCard = ({id = "", title = ""}) => {
    const navigate = useNavigate();

    return (
        <CardContainer key={id}>
            {title}
            <ButtonsContainer>
                <CardButtonStyled>
                    <FiEdit2 onClick={() => navigate(`/cardDetails/${id}`)} />
                </CardButtonStyled>
                <CardButtonStyled>
                    <IoMdClose />
                </CardButtonStyled>
            </ButtonsContainer>
        </CardContainer>
    );
};

export default TodoCard;