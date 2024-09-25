import styled from "styled-components";

export const InputStyled = styled.input`
    border: 0;
    outline: none;
    background-color: #8bc97b;
    padding: 4%;
    border-radius: 3px;
    color: white;
    font-size: 20px;
    width: 100%;

    @media (max-width: 992px) {
        padding: 2%;
        margin-top: 4%;
        font-size: 15px;
    }
`;
