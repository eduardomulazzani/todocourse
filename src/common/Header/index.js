import React from "react";
import {
    HeaderContainer,
    AvatarStyled,
    TitleStyled
} from "./styled";
import {useNavigate} from "react-router-dom";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";


const Header = (props) => {
    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <AvatarStyled>
                <IoCheckmarkDoneSharp size={"100%"} />
            </AvatarStyled>
            <TitleStyled>To-Do List</TitleStyled>
            <AvatarStyled onClick={() => {
                navigate("/login");
            }}>
                <IoLogOutOutline size={"100%"} />
            </AvatarStyled>
        </HeaderContainer>
    );
};

export default Header;