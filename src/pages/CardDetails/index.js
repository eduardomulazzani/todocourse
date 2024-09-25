import React from "react";
import {
    PageContainer,
    PageContainerSafeArea,
    ButtonsContainer
} from "./styled";
import Input from "../../common/Input";
import Label from "../../common/Label";
import Button from "../../common/Button";

const CardDetails = () => {

    return (
        <>  
            <PageContainer>
                <PageContainerSafeArea>
                    <ButtonsContainer>
                        <Label text="Title" />
                        <Input value={""} />
                    </ButtonsContainer>
                    <ButtonsContainer>
                        <Label text="Description" />
                        <Input value={""} />
                    </ButtonsContainer>
                    
                    <Button text="Create Card"/>
                </PageContainerSafeArea>
            </PageContainer>
        </>
    );
};

export default CardDetails;