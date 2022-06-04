import React from "react";
import Article from "./Article";
function Asset({ columns, data }) {
  return <Article data={data} columns={columns}></Article>;
}

export default Asset;
