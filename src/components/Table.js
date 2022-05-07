import React from "react";
import styled from "styled-components";
import FilterBox from "./FilterBox";
import { Wrapper } from "./style/Table.styled";
import { TableStyled } from "./style/Table.styled";
import { useEffect, useState } from "react";
import axios from "axios";

function Table() {
  const [arrAssets, setAsset] = useState([]);
  useEffect(() => {
    fetchAssets();
  }, []);

  async function fetchAssets() {
    try {
      const data = await axios.get(`http://localhost:3004/assets`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      console.log(data.data, "data");
      setAsset(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Wrapper>
      <FilterBox></FilterBox>

      <TableStyled>
        <tr>
          <th>Student name</th>
          <th>Serialnumber</th>
          <th>Computer type</th>
          <th>Status</th>
          <th>Borrowed computer</th>
          <th>Last updated</th>
        </tr>
        {arrAssets.map((asset) => (
          <tr key={asset.id}>
            <th>{asset.studName}</th>
            <th>{asset.serialNum}</th>
            <th>{asset.compType}</th>
            <th>{asset.status}</th>
            <th>{asset.location}</th>
            <th>{asset.date}</th>
          </tr>
        ))}
      </TableStyled>
    </Wrapper>
  );
}

export default Table;
