import { SearchOutlined } from "@ant-design/icons";
import React from "react";

export const Search = ({ setSearch }) => {
  const handdleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value.trim().toLowerCase());
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
