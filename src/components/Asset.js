import React from "react";
import Table from "./Table";
function Asset({ columns, data }) {
  return <Table data={data} columns={columns}></Table>;
}

export default Asset;
