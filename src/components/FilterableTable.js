import React from "react";
import "../components/FilterableTable.css";
import Header from "./Header";

import SearchBar from "./SearchBar";
import FilterBox from "./FilterBox";
import InventoryList from "./InventoryList";

function FilterableTable() {
  return (
    <div>
      <div className="card filter-card">
        <div className="card-body ">
          <div className="row">
            <div className="col-12">
              <Header title="Enheter" />
            </div>
            {/* searchfield */}
            <div className="col-3">
              <SearchBar />
            </div>
            <div className="col-12">{/* filterboxes */}</div>
            <div className="col-2">
              <FilterBox />
            </div>
            <div className="col-2">
              <FilterBox />
            </div>
            <div className="col-2">
              <FilterBox />
            </div>
            <div className="col-2">
              <FilterBox />
            </div>
            <div className="col-2">
              <FilterBox />
            </div>
            <div className="col-2">
              <FilterBox />
            </div>
          </div>
        </div>
      </div>
      <div className=" inventory-list">
        <InventoryList />
      </div>
    </div>
  );
}

export default FilterableTable;
