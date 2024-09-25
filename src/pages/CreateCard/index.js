import React, {useEffect, useState} from "react";
import {
    PageContainer,
    PageContainerSafeArea,
    ButtonsContainer
} from "./styled";
import { useParams } from 'react-router-dom';
import Input from "../../common/Input";
import Label from "../../common/Label";
import Button from "../../common/Button";

import { TodoList } from "../../mocks/todoList";

const CreateCard = () => {
    const [ToDo, setToDo] = useState(null);

    const {cardId = ""} = useParams();

    useEffect(() => {
        const card = TodoList.find(({id = null}) => id === parseInt(cardId));

        console.log(card)

        if(card) setToDo(card);
    }, [TodoList, cardId])

    return (
        <>  
            <PageContainer>
                <PageContainerSafeArea>
                    <ButtonsContainer>
                        <Label text="Title" />
                        <Input value={ToDo ? ToDo.title : ""} />
                    </ButtonsContainer>
                    <ButtonsContainer>
                        <Label text="Description" />
                        <Input value={ToDo ? ToDo.description : ""} />
                    </ButtonsContainer>
                    
                    <Button text="Update Card"/>
                </PageContainerSafeArea>
            </PageContainer>
        </>
    );
};

export default CreateCard;