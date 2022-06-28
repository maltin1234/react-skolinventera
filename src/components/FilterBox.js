import React, { useState, useEffect } from "react";
import GlobalFilter from "./GlobalFilter";
// import { useSelector, useDispatch } from "react-redux";
// import { isEditing, assetUpdate } from "../store/assetSlice";

import { useSelector, useDispatch } from "react-redux";
import {
  BoxContainer,
  GridItem,
  SearchButton,
  AddButton,
} from "./style/FilterBox.styled";

import styled from "styled-components";
import { Add } from "@styled-icons/fluentui-system-filled/Add";
import { assetUpdate, isEditing } from "../store/assetSlice";

const AddIcon = styled(Add)`
  height: 20px;
`;

function FilterBox({ preGlobalFilteredRows, setGlobalFilter, globalFilter }) {
  const dispatch = useDispatch();
  const update = useSelector((state) => state.assets.update);
  const toggle = useSelector((state) => state.assets.value);

  function form() {
    dispatch(isEditing());
    dispatch(assetUpdate());
  }
  return (
    <>
      <BoxContainer>
        <GridItem>
          <h1>Enheter</h1>
        </GridItem>

        <GridItem style={{ gridColumn: "span 2" }}>
          <AddButton button onClick={() => form()}>
            <AddIcon></AddIcon> Add
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
