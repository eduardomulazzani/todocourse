import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 95.5%;
    border: 2px solid grey;
    padding: 2%;
    margin-top: 1%;
    border-radius: 10px;
    background-color: white;
    font-size: 18px;
    color: #595959;

    &:hover {
        border: 2px solid white;
        background-color: #8bc97b;
        color: white;
        transition: 0.4s ease;
    }

    @media (max-width: 992px) {
        padding: 4%;
        margin-top: 2%;
        font-size: 15px;
        width: 90%;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;


export const CardButtonStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-left: 20px;
    cursor: pointer;
`;
