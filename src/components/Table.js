import React from "react";
import styled from "styled-components";
import FilterBox from "./FilterBox";
import { Wrapper } from "./style/Table.styled";
import { TableStyled } from "./style/Table.styled";

function Table() {
  return (
    <Wrapper>
      <FilterBox></FilterBox>

      <TableStyled>
        {" "}
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Savings</th>
          <th>Names</th>
          <th>Las</th>
        </tr>
        <tr>
          <td>Joe</td>
          <td>Swanson</td>
          <td>$300</td>
          <td>$300</td>
          <td>$300</td>
        </tr>
        <tr>
          <td>Joe</td>
          <td>Swanson</td>
          <td>$300</td>
          <td>$300</td>
          <td>$300</td>
        </tr>
      </TableStyled>
    </Wrapper>
  );
}

export default Table;
