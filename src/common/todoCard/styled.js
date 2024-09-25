import styled from "styled-components";

export const CardContainer = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;
    border: 2px solid grey;
    padding: 2%;
    margin-top: 1%;
    border-radius: 10px;
    background-color: white;
    font-size: 18px;

    &:hover {
        border: 2px solid white;
        background-color: #8bc97b;
        color: white;
        transition: 0.4s ease;
    }

    @media (max-width: 992px) {
        padding: 4%;
        margin-top: 4%;
        font-size: 15px;
    }
`;
