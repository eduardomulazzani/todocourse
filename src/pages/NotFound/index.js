import React from "react";
import { TbError404 } from "react-icons/tb";
import {
    NotFoundContainer
} from "./styled";

const NotFound = () => {
    return <NotFoundContainer><TbError404 size="30%" color="#8bc97b"/></NotFoundContainer>;
};

export default NotFound;