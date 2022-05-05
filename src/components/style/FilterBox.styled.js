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

  display: flex;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  border-radius: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`;

export const GridItem = styled.div`
  border: 1px solid;
  padding: 20px;
  font-size: 30px;
  text-align: center;
`;
