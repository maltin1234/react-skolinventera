import { StyledHeader } from "./style/Header.styled";
import React, { useState } from "react";
import { FcMenu } from "react-icons/fc";
const Header = ({ onShow }) => {
  return (
    <>
      <StyledHeader>
        {" "}
        <FcMenu onClick={onShow}></FcMenu>
      </StyledHeader>
    </>
  );
};
export default Header;
