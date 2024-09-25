import React, {useContext} from "react";
import TodoCard from "../../common/todoCard";
import {
    PageContainer,
    PageContainerSafeArea,
    ButtonsContainer
} from "./styled";
import Button from "../../common/Button";
import { GlobalContext } from "../../context/GlobalContext";

import { TodoList } from "../../mocks/todoList";
import EmptyList from "../EmptyList";

const Home = () => {
    const {
        toast = () => {}
    } = useContext(GlobalContext);

    return (
        <>  
            <PageContainer>
                <PageContainerSafeArea>
                    <ButtonsContainer>
                        <Button
                            text="Add Task"
                            onClick={() => {
                                toast.success('Task Created', {
                                    position: "bottom-left",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                });
                            }}
                        />
                        <Button
                            text="Filter"
                        />
                    </ButtonsContainer>
                    {!TodoList.length ? <EmptyList /> : TodoList.map((card) => <TodoCard {...card} key={card.id} /> )}
                </PageContainerSafeArea>
            </PageContainer>
        </>
    );
};

export default Home;