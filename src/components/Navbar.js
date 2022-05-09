import React from "react";

import { StyledNavbar, MenuItemLinks, MenuItems } from "./style/NavbarStyled";

import { SidebarData } from "../components/SidebarData";
import { Link } from "react-router-dom";

const Navbar = ({ sidebar }) => {
  return (
    <>
      <StyledNavbar sidebar={sidebar}>
        {SidebarData.map((item, index) => {
          return (
            <MenuItems key={index}>
              <MenuItemLinks>
                <Link to={item.path}>
                  {item.icon}
                  <span style={{ marginLeft: "16px" }}>{item.title}</span>
                </Link>
              </MenuItemLinks>
            </MenuItems>
          );
        })}
      </StyledNavbar>
    </>
  );
};

export default Navbar;
