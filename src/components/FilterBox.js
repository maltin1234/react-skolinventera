import React from "react";

import {
  Filter,
  LineBreak,
  BoxContainer,
  GridItem,
} from "./style/FilterBox.styled";
import {
  DivButton,
  SearchButton,
  FilterButton,
  Group,
} from "./style/Button.styled";

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
        <GridItem>Enheter</GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem>
          <SearchButton>Search...</SearchButton>
        </GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
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
