import { SearchOutlined } from "@ant-design/icons";
import React from "react";

const Search = ({ setSearch, setType }) => {
  const handdleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value.trim().toLowerCase());
    setType("All");
    e.target.search.value = "";
  };

  return (
    <form onSubmit={handdleSubmit} className="search__input">
      <input
        id="search"
        type="text"
        className="input__style"
        placeholder="Search Pokemon"
      />
      <button className="search__btn">
        <SearchOutlined />
      </button>
    </form>
  );
};

export default Search;
