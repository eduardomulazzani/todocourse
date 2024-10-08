import styled from "styled-components";

export const ButtonStyled = styled.button`
    border: 0;
    background-color: #8bc97b;
    padding: 0.5%;
    margin: 2%;
    border-radius: 3px;
    color: white;
    cursor: pointer;
    font-size: 18px;

    @media (max-width: 992px) {
        padding: 2%;
        margin-top: 4%;
        font-size: 15px;
    }
`;
