import React from "react";
import Search from "./Search";

function Header({ setSearchFunct }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearchFunct={setSearchFunct} />
    </header>
  );
}

export default Header;
