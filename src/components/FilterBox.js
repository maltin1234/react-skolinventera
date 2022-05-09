import React from "react";

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

function FilterBox() {
  return (
    <>
      <BoxContainer>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
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
          <SearchButton>Search...</SearchButton>
        </GridItem>
        <GridItem style={{ gridColumn: "span 3" }}></GridItem>
        <GridItem>
          <FilterButton>Filter</FilterButton>
        </GridItem>
        <GridItem>
          <FilterButton>Filter</FilterButton>
        </GridItem>
        <GridItem>
          <FilterButton>Filter</FilterButton>
        </GridItem>
        <GridItem>
          <FilterButton>Filter</FilterButton>
        </GridItem>
        <GridItem>
          <FilterButton>Filter</FilterButton>
        </GridItem>
      </BoxContainer>
    </>
  );
}

export default FilterBox;
