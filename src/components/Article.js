import { StyledArticle } from "./style/Article.styled";

import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import Assets from "./Assets";
import { useSelector, useDispatch } from "react-redux";
import { isEditing, assetUpdate } from "../store/assetSlice";

function Article() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.assets.value);
  const update = useSelector((state) => state.assets.update);

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
            accessor: "status",
          },
          {
            Header: "Computer type",
            accessor: "compType",
          },
          {
            Header: "Date",
            accessor: "date",
          },

          {
            Header: "Action",
            accessor: "action",
            Cell: ({ row }) => (
              <div>
                <button onClick={() => form(row.original)}>Edit</button>
                <button onClick={() => form(row.original)}>View</button>
              </div>
            ),
          },
        ],
      },
    ],
    [update, show]
  );

  const [data, setData] = useState([]);
  function form(payload) {
    dispatch(isEditing());
    dispatch(assetUpdate(payload));
    console.log(payload, "payload");
  }

  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:3004/assets");
      setData(result.data);
    })();
  }, [show]);
  useEffect(() => {
    console.log(show, "hahah");
  }, [show]);

  return (
    <StyledArticle>
      <Assets data={data} columns={columns} />
    </StyledArticle>
  );
}

export default Article;
