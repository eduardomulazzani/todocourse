import React from "react";
import {
    CardContainer
} from "./styled";

const TodoCard = ({id = "", title = ""}) => {
    return (
        <CardContainer key={id}>
            {title}
        </CardContainer>
    );
};

export default TodoCard;