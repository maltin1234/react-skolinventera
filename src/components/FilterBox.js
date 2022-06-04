import React from "react";
import GlobalFilter from "./GlobalFilter";

import {
  BoxContainer,
  GridItem,
  SearchButton,
  FilterButton,
  AddButton,
} from "./style/FilterBox.styled";

import styled from "styled-components";
import { Add } from "@styled-icons/fluentui-system-filled/Add";

const AddIcon = styled(Add)`
  height: 20px;
`;

function FilterBox({ preGlobalFilteredRows, setGlobalFilter, globalFilter }) {
  return (
    <>
      <BoxContainer>
        <GridItem>
          <h1>Enheter</h1>
        </GridItem>

        <GridItem style={{ gridColumn: "span 2" }}>
          <AddButton>
            <AddIcon></AddIcon>Add
          </AddButton>
        </GridItem>

        <GridItem style={{ gridColumn: "span 2" }}></GridItem>
        <GridItem style={{ gridColumn: "span 2" }}>
          <SearchButton>
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              setGlobalFilter={setGlobalFilter}
              globalFilter={globalFilter}
            ></GlobalFilter>
          </SearchButton>
        </GridItem>
        <GridItem style={{ gridColumn: "span 3" }}></GridItem>
      </BoxContainer>
    </>
  );
}

export default FilterBox;
