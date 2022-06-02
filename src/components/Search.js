import React, { useState } from "react";

function Search({ setSearchFunct}) {
  const [searchText, setSearchTxt] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    setSearchFunct(searchText.toLowerCase());
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchText}
        onChange={(e) => setSearchTxt(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
