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
      {/* <Filter>
        <DivButton></DivButton>
        <DivButton></DivButton>
        <DivButton></DivButton>
        <DivButton></DivButton>
        <DivButton></DivButton>
        <DivButton></DivButton>
        <LineBreak></LineBreak>
        <DivButton>
          {" "}
          <h2>Enheter</h2>
        </DivButton>
        <DivButton></DivButton>
        <DivButton></DivButton>
        <DivButton></DivButton>
        <DivButton></DivButton>
        <DivButton></DivButton>
        <LineBreak></LineBreak>
        <DivButton>
          <SearchButton>Search...</SearchButton>
        </DivButton>
        <DivButton></DivButton>
        <DivButton></DivButton>
        <DivButton></DivButton>
        <DivButton></DivButton>
        <DivButton></DivButton>
        <LineBreak></LineBreak>
        <DivButton>
          <FilterButton>Filter</FilterButton>
        </DivButton>
        <DivButton>
          <FilterButton>Filter</FilterButton>
        </DivButton>
        <DivButton>
          <FilterButton>Filter</FilterButton>
        </DivButton>
        <DivButton>
          <FilterButton>Filter</FilterButton>
        </DivButton>
        <DivButton>
          <FilterButton>Filter</FilterButton>
        </DivButton>
        <DivButton>
          <FilterButton>Filter</FilterButton>
        </DivButton>
      </Filter> */}

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
