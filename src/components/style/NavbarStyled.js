import styled from "styled-components";

export const StyledNavbar = styled.div`
  flex: ${(props) => (props.sidebar ? 1 : 0)};
  background-color: white;
  flex-basis: 50px;
`;

export const NavBar = styled.div`
  background: white;
`;

export const MenuItemLinks = styled.li`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  font-size: 20px;
  text-decoration: none;
  background: white;

  &:hover {
    background-color: #ffffff;
    color: #000080;
    width: 100%;
    height: 45px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const MenuItems = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 90px;
  padding: 1rem 0 1.25rem;
  background: white;
`;
