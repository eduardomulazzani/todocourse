import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;

    max-width: 100%;
    padding: 1%;
    height: 45px;
    background-color: #e0ffea;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: #595959;
`;

export const AvatarStyled = styled.div`
    height: 100%;
    margin-left: 2%;
    margin-right: 2%;
    cursor: pointer;
`;

export const TitleStyled = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    font-size: 30px;
    font-weight: 100;

    @media (max-width: 992px) {
        font-size: 20px;
    }
`;
