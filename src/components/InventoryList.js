import React from "react";
const tasks = [
  {
    id: 1,
    serialNum: "5CDN098767",
    studName: "Jon Malkovic",
    location: "malmö",
    status: "In repair",
    compType: "hp",
    date: "date",
    edit: false,
  },
  {
    id: 2,
    serialNum: "5CDN098BHBD",
    studName: "Johan Persson",
    location: "malmo",
    status: "Returned",
    compType: "hp",
    date: "date",
    edit: false,
  },
];
const InventoryList = () => {
  return (
    <table className="table">
      <thead className="header-table">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.studName}</td>
            <td>{task.serialNum}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InventoryList;
