import { StyledArticle } from "./style/Article.styled";
import Table from "./Table";
import React, { useMemo, useState, useEffect } from "react";

import axios from "axios";

function Article() {
  const columns = useMemo(
    () => [
      {
        Header: "Header",
        columns: [
          {
            Header: "Language",
            accessor: "serialNum",
          },
          {
            Header: "Genre(s)",
            accessor: "studName",
          },
          {
            Header: "Runtime",
            accessor: "location",
          },
          {
            Header: "Status",
            accessor: "date",
          },
          {
            Header: "Language",
            accessor: "compType",
          },
        ],
      },
    ],
    []
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:3004/assets");
      setData(result.data);
    })();
  }, []);
  return (
    <StyledArticle>
      <Table columns={columns} data={data} />
    </StyledArticle>
  );
}

export default Article;
