import React, { useState } from "react";
import Asset from "./Asset";
import Table from "./Table";
import EditComponent from "./EditComponent";
function Assets({
  data,
  columns,
  handleEdit,
  showForm,
  onUpdateCustomer,
  editMode,
}) {
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

  function handleCustomerUpdate(updatedCustomer) {
    onUpdateCustomer(updatedCustomer);
  }

  // needed logic for conditional rendering of the form - shows the asset you want when you want them, and hides it when you don't

  return (
    <>
      {showForm ? (
        <EditComponent
          editForm={editForm}
          handleChange={handleChange}
          data={data}
          columns={columns}
          handleEdit={handleEdit}
          handleCustomerUpdate={handleCustomerUpdate}
          editMode={editMode}
        />
      ) : (
        <Table data={data} columns={columns}></Table>
      )}
    </>
  );
}

export default Assets;
