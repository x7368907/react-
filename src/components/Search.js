import React, { useState } from "react";

const Search = ({ search, setInput, input }) => {
  const [error, setError] = useState("");

  const inputHandler = (e) => {
    setError("");
    setInput(e.target.value);
  };

  const handleSearch = () => {
    if (!input.trim()) {
      setError("輸入不能為空");
      return;
    }
    search();
  };
  return (
    <div className="search">
      <input className="input" onChange={inputHandler} type="text" />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
