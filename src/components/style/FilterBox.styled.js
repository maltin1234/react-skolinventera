import styled from "styled-components";

export const Filter = styled.div`
  background: #e5e5e5;
  min-height: 100px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  border-radius: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  justify-content: space-between;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`;

export const LineBreak = styled.div`
  width: 100%;
`;

export const BoxContainer = styled.div`
  background: #e5e5e5;
  min-height: 100px;

  display: grid;
  grid-template-columns: repeat(5, 1fr);

  border-radius: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`;

export const GridItem = styled.div`
  padding: 20px;
  font-size: 30px;
  text-align: center;
  display: grid;
  align-items: center;
`;
export const GridSpan = styled.div`
  grid-column: span-2;
`;

export const FilterButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: none;
  color: black;
  padding: 7px 40px;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;

  font-size: 12px;
  cursor: pointer;
  border-radius: 7px;
`;
export const SearchButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: none;
  color: black;
  padding: 9px 100px;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  cursor: pointer;
  border-radius: 7px;
  width: 75%;
`;
export const AddButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 35px;
  border-radius: 16px;
  border: 1px solid transparent;
  color: #ffffff;
  background-color: #1dc9a0;
  font-size: 16px;
  letter-spacing: 1px;
  transition: all 0.15s linear;
  width: 40%;
  &:hover {
    background-color: rgba(29, 201, 160, 0.08);
    border-color: #1dc9a0;
    color: #1dc9a0;
    transform: translateY(-5px) scale(1.05);
  }
  &:active {
    background-color: transparent;
    border-color: #1dc9a0;
    color: #1dc9a0;
    transform: translateY(5px) scale(0.95);
    &:disabled {
      background-color: rgba(255, 255, 255, 0.16);
      color: #8e8e93;
      border-color: #8e8e93;
    }
  }
`;
