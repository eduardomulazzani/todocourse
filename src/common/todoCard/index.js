
import React, {useContext} from "react";
import {
    CardContainer,
    ButtonsContainer,
    CardButtonStyled
} from "./styled";
import { IoMdClose } from "react-icons/io";
import { FiEdit2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

import api from "../../services/api";

const TodoCard = ({_id = "", title = "", setTodoList}) => {
    const navigate = useNavigate();
    const {
        toast = () => {}
    } = useContext(GlobalContext);

    const deleteToDo = async () => {
        try{
            const deleteResponse = await api.delete(`/todo/${_id}`);

            const {status = 500} = deleteResponse; 

            if(status === 200) {
                toast.success(`Todo ${title} deleted success`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                const todoResponse = await api.get("/todo");

                const {data = []} = todoResponse;
    
                setTodoList(data);
            }

            console.log(deleteResponse);
        }catch(err){
            console.error(err);
        }
    };

    return (
        <CardContainer key={_id}>
            {title}
            <ButtonsContainer>
                <CardButtonStyled>
                    <FiEdit2 onClick={() => navigate(`/cardDetails/${_id}`)} />
                </CardButtonStyled>
                <CardButtonStyled>
                    <IoMdClose onClick={() => deleteToDo()} />
                </CardButtonStyled>
            </ButtonsContainer>
        </CardContainer>
    );
};

export default TodoCard;