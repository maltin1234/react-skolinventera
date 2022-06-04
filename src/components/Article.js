import { StyledArticle } from "./style/Article.styled";
import Table from "./Table";
import React, { useMemo, useState, useEffect } from "react";

import axios from "axios";

import Assets from "./Assets";

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
                <button onClick={() => handleEdit(row.original)}>Edit</button>
                <button onClick={() => handleAdd()}>View</button>
              </div>
            ),
          },
        ],
      },
    ],
    [handleEdit]
  );

  const [data, setData] = useState([]);
  const [updData, updateData] = useState([]);
  const [showForm, setForm] = useState(false);
  const [editMode, setMode] = useState(true);

  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:3004/assets");
      setData(result.data);
    })();
  }, []);

  function handleEdit(row) {
    updateData(row);
    setMode(true);
    setForm(true);
  }
  function handleAdd(row) {
    setMode(false);
    setForm(true);
  }
  // update customers on page after edit
  // update customers on page after edit
  function onUpdateCustomer(updatedCustomer) {
    const updatedCustomers = data.map((obj) => {
      if (obj.id === updatedCustomer.id) {
        return updatedCustomer;
      } else {
        return obj;
      }
    });
    setData(updatedCustomers);
  }
  return (
    <StyledArticle>
      <Assets
        data={data}
        columns={columns}
        handleEdit={updData}
        showForm={showForm}
        onUpdateCustomer={onUpdateCustomer}
        editMode={editMode}
      />
    </StyledArticle>
  );
}

export default Article;
