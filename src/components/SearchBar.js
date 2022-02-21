import React from "react";

const SearchBar = ({ SearchInput }) => {
  return (
    <div className="input-group mb-3 ">
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon1"
      >
        Button
      </button>
      <input
        type="text"
        className="form-control search-input"
        placeholder=""
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
      ></input>
    </div>
  );
};

export default SearchBar;
