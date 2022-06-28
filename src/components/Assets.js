import React, { useState, useEffect } from "react";

import Table from "./Table";
import EditComponent from "./EditComponent";
import FormComponent from "./FormComponent";
import { useSelector } from "react-redux";

function Assets({ data, columns }) {
  const [editForm, setEditForm] = useState({
    serialNum: "",
    studName: "",
    location: "",
    status: "",
    compType: "",
    date: "",
  });

  // capture user input in edit form inputs
  function handleChange(e) {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    });
  }

  const showForm = useSelector((state) => state.assets.value);
  useEffect(() => {
    console.log(showForm);
  }, [showForm]);

  return (
    <>
      {!showForm ? (
        <Table data={data} columns={columns}></Table>
      ) : (
        <FormComponent
          editForm={editForm}
          handleChange={handleChange}
          data={data}
          columns={columns}
        ></FormComponent>
      )}
    </>
  );
}

export default Assets;
