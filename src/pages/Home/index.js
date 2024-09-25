import React from "react";
import TodoCard from "../../common/todoCard";
import {
    PageContainer,
    PageContainerSafeArea
} from "./styled";

import { TodoList } from "../../mocks/todoList";

const Home = () => {
    const renderTodoList = () => {
        return TodoList.map((card) => <TodoCard {...card} key={card.id} /> )
    }

    return (
        <>  
            <PageContainer>
                <PageContainerSafeArea>
                    {renderTodoList()}
                </PageContainerSafeArea>
            </PageContainer>
        </>
    );
};

export default Home;