import { StyledHeader } from "./style/Header.styled";
import React, { useState } from "react";

import { Navigation } from "@styled-icons/fluentui-system-filled/Navigation";
import styled from "styled-components";

export const BigIcon = styled(Navigation)`
  height: 70px;
  width: 50px;
  color: white;
  cursor: pointer;
  margin: 0 30px;
`;

const Header = ({ onShow }) => {
  return (
    <>
      <StyledHeader>
        {" "}
        <BigIcon onClick={onShow}></BigIcon>
      </StyledHeader>
    </>
  );
};
export default Header;
