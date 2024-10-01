import React, {useEffect, useState} from "react";
import TodoCard from "../../common/todoCard";
import {
    PageContainer,
    PageContainerSafeArea,
    ButtonsContainer
} from "./styled";
import Button from "../../common/Button";
import { useNavigate, useLocation } from "react-router-dom";

import EmptyList from "../EmptyList";

import api from "../../services/api";

const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [TodoList, setTodoList] = useState([]);

    const getListTodos = async () => {
        try{
            const todoResponse = await api.get("/todo");

            const {data = []} = todoResponse;

            setTodoList(data);

            console.log("list todos", data);
        }catch(err){
            console.error(err);
        }
    };

    useEffect(() => {
        getListTodos();
    }, [location]);

    return (
        <>  
            <PageContainer>
                <PageContainerSafeArea>
                    <ButtonsContainer>
                        <Button
                            text="Add Task"
                            onClick={() => navigate(`/createCard`)}
                        />
                        {/*<Button
                            text="Filter"
                        />*/}
                    </ButtonsContainer>
                    {!TodoList.length ? <EmptyList /> : TodoList.map((card) => <TodoCard {...card} setTodoList={setTodoList} key={card._id} /> )}
                </PageContainerSafeArea>
            </PageContainer>
        </>
    );
};

export default Home;