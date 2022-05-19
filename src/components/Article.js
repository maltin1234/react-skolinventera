import { StyledArticle } from "./style/Article.styled";
import Table from "./Table";
import React, { useMemo, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAssetsAsync } from "../redux/assetSlice";

import axios from "axios";

function Article() {
  const columns = useMemo(
    () => [
      {
        Header: "Header",
        columns: [
          {
            Header: "Serial Number",
            accessor: "serialNum",
          },
          {
            Header: "Student name",
            accessor: "studName",
          },
          {
            Header: "Location",
            accessor: "location",
          },
          {
            Header: "Status",
            accessor: "date",
          },
          {
            Header: "Computer type",
            accessor: "compType",
          },

          {
            Header: "Status",
            accessor: "status",
          },
        ],
      },
    ],
    []
  );

  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const assets = useSelector((state) => state.assets);

  useEffect(() => {
    dispatch(getAssetsAsync());
  }, [dispatch]);
  return (
    <StyledArticle>
      <Table columns={columns} data={assets} />
    </StyledArticle>
  );
}

export default Article;
