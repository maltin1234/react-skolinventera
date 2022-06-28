import React, { useState, useEffect } from "react";

import styled from "styled-components";

import Article from "./Article";
import { useSelector, useDispatch } from "react-redux";
import { assetUpdate, isEditing } from "../store/assetSlice";

export const Button = styled.button`
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

const CenterForm = styled.div`
  display: grid;
  justify-content: center;
  min-height: 500px;
  min-width: 100%;
  align-content: center;
  margin: 2rem;
`;

const StyledForm = styled.form`
  background-color: #ffffff;
  display: grid;

  justify-content: center;
  min-width: 800px;
  min-height: 600px;
  gap: 5px 5px;
  padding: 20px;

  border-radius: 15px;
  box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
`;
const Card = styled.div`
  display: grid;
  background-color: blue;

  justify-content: center;
`;
const Input = styled.input`
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  width: 300px;
  height: 30px;
`;

function FormComponent({
  handleEdit,
  data,
  columns,
  editForm,
  handleChange,
  handleCustomerUpdate,
  editMode,
}) {
  const show = useSelector((state) => state.assets.value);
  const update = useSelector((state) => state.assets.update);
  const dispatch = useDispatch();

  async function formSubmit(e) {
    e.preventDefault();

    const patchData = async () => {
      const result = await fetch(
        `http://localhost:3004/assets/${update[0].id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editForm),
        }
      );
      dispatch(isEditing());
    };
    const addData = async () => {
      const add = await fetch(`http://localhost:3004/assets`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editForm),
      });
      dispatch(isEditing());
    };
    if (update.includes(undefined)) {
      addData();
    } else {
      patchData();
    }
    // render add or edit based on if update has data or not
  }
  return (
    <>
      <CenterForm>
        <StyledForm onSubmit={formSubmit}>
          <h1> Add asset</h1>
          <label>Serial number</label>
          <Input
            type="text"
            name="serialNum"
            value={editForm.serialNum}
            onChange={handleChange}
          ></Input>
          <label>Student name</label>
          <Input
            type="text"
            name="studName"
            value={editForm.studName}
            onChange={handleChange}
          ></Input>
          <label> Location</label>
          <Input
            type="text"
            name="location"
            value={editForm.location}
            onChange={handleChange}
          ></Input>
          <label>Status</label>
          <Input
            type="text"
            name="status"
            value={editForm.status}
            onChange={handleChange}
          ></Input>
          <label>Computer type</label>
          <Input
            type="text"
            name="compType"
            value={editForm.compType}
            onChange={handleChange}
          ></Input>
          <label>Date</label>
          <Input
            type="text"
            name="date"
            value={editForm.date}
            onChange={handleChange}
          ></Input>

          <Button type="submit" value="Submit">
            Submit
          </Button>
        </StyledForm>
      </CenterForm>
    </>
  );
}

export default FormComponent;
