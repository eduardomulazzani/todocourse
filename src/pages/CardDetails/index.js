import React, {useEffect, useState, useContext, useCallback} from "react";
import {
    PageContainer,
    PageContainerSafeArea,
    ButtonsContainer
} from "./styled";
import Input from "../../common/Input";
import Label from "../../common/Label";
import Button from "../../common/Button";
import { useParams } from 'react-router-dom';
import { GlobalContext } from "../../context/GlobalContext";

import api from "../../services/api";

const CardDetails = () => {
    const {
        toast = () => {}
    } = useContext(GlobalContext);
    
    const {cardId = ""} = useParams();

    const [todo, setTodo] = useState({
        title: "",
        description: ""
    })

    const getTodo = useCallback(async () => {
        try{
            const todoResponse = await api.get(`/todo/${cardId}`);

            const {status = 500, data = []} = todoResponse;

            if(status === 200) setTodo(data[0]);
        }catch(err){
            console.error(err);
        }
    }, [cardId]);

    const updateTodo = async () => {
        try{
            const todoResponse = await api.put(`/todo/${cardId}`, {
                title: todo.title,
                description: todo.description
            });

            const {status = 500} = todoResponse;

            if(status === 200) {
                toast.success(`Todo update success`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                setTimeout(() => window.location.href = "/", 2000);
            }
        }catch(err){
            console.error(err);
        }
    }

    useEffect(() => {
        getTodo();
    }, [getTodo]);


    return (
        <>  
            <PageContainer>
                <PageContainerSafeArea>
                    <ButtonsContainer>
                        <Label text="Title" />
                        <Input
                            value={todo.title}
                            onChange={evt => {
                                setTodo({...todo, title: evt.target.value})
                            }}
                        />
                    </ButtonsContainer>
                    <ButtonsContainer>
                        <Label text="Description" />
                        <Input
                            value={todo.description}
                            onChange={evt => {
                                setTodo({...todo, description: evt.target.value})
                            }}
                        />
                    </ButtonsContainer>
                    
                    <Button text="Update Todo" onClick={() => updateTodo()}/>
                </PageContainerSafeArea>
            </PageContainer>
        </>
    );
};

export default CardDetails;