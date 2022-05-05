import styled from "styled-components";

export const Wrapper = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  margin-right: 20px;
  background-color: white;
`;
export const TableStyled = styled.div`
  overflow-y: scroll;
  border-collapse: collapse;
  width: 100%;

  & > tbody,
  td,
  tfoot,
  th,
  thead,
  tr {
    border-bottom: 1px solid #f9eded;
    width: 1000px;
    padding: 15px;
  }
`;
// tbody, td, tfoot, th, thead, tr {
//     border-color: inherit;
//     border-style: solid;
//     border-width: 2px;
//     width: 1000px;
// }
