import React from "react";
import { TbError404 } from "react-icons/tb";
import {
    NotFoundContainer
} from "./styled";

const NotFound = () => {
    return <NotFoundContainer><TbError404 size="30%"/></NotFoundContainer>;
};

export default NotFound;