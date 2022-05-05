import styled from "styled-components";

export const DivButton = styled.div`
  height: 50px;
  margin: 5px;
  margin-left: 20px;
`;

export const FilterButton = styled.div`
  background-color: white;
  border: none;
  color: black;
  padding: 3px 40px;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;

  font-size: 12px;
  cursor: pointer;
  border-radius: 7px;
`;
export const SearchButton = styled.div`
  background-color: white;
  border: none;
  color: black;
  padding: 5px 100px;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  cursor: pointer;
  border-radius: 7px;
`;

export const Group = styled.div`
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  max-width: 190px;
`;

export const SidebarList = styled.div`
  list-style: none;
  background-color: white;
  margin: 5px 0px;

  padding: 5px;
  border-radius: 5px 5px;
  cursor: pointer;
  flex: 1;
`;
