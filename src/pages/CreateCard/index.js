import React, {useState, useContext} from "react";
import {
    PageContainer,
    PageContainerSafeArea,
    ButtonsContainer
} from "./styled";
import Input from "../../common/Input";
import Label from "../../common/Label";
import Button from "../../common/Button";
import { GlobalContext } from "../../context/GlobalContext";
import api from "../../services/api";

const CreateCard = () => {
    const {
        toast = () => {}
    } = useContext(GlobalContext);

    const [ToDo, setToDo] = useState({
        title: "",
        description: ""
    });

    const createTodo = async () => {
        try{
            const {title = "", description = ""} = ToDo;

            if(title && description) {
                const payload = {};

                if(title) payload.title = title;
                if(description) payload.description = description;

                const createResponse = await api.post("/todo", payload);

                const {status = 500} = createResponse;

                if(status === 200) {
                    toast.success(`Todo created success`, {
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
            } else {
                toast.warn(`Title or Subscription empty`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        }catch(err){
            console.error(err);
        }
    }

    return (
        <>  
            <PageContainer>
                <PageContainerSafeArea>
                    <ButtonsContainer>
                        <Label text="Title" />
                        <Input
                            value={ToDo.title}
                            onChange={(event) => {
                                setToDo({...ToDo, title: event.target.value});
                            }}
                        />
                    </ButtonsContainer>
                    <ButtonsContainer>
                        <Label text="Description" />
                        <Input
                            value={ToDo.description}
                            onChange={(event) => {
                                setToDo({...ToDo, description: event.target.value});
                            }}
                        />
                    </ButtonsContainer>
                    
                    <Button text="Create Todo" onClick={() => createTodo()}/>
                </PageContainerSafeArea>
            </PageContainer>
        </>
    );
};

export default CreateCard;