import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
`;

export const PageContainerSafeArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    margin-left: 10%;
    margin-right: 10%;
    padding: 2%;

    //border: 2px solid blue;

    @media (max-width: 992px) {
        margin-left: 0;
        margin-right: 0;
        padding: 4%;
    }

`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 20%;
`;
