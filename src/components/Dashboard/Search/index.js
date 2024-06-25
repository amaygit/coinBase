import React, { useState } from "react";
import "./styles.css";
import SearchIcon from "@mui/icons-material/Search";

function Search({ search, handleChange }) {
    // const [search, setSearch] = useState("")
  return (
    <div className="search-flex">
      <SearchIcon sx={{ color: "var(--grey)", fontSize: "1.2rem" }} />
      <input
        className="search-input"
        placeholder="Search"
        value={search}
        // onChange={(e) => setSearch(e.target.value)}
        onChange={(e)=>handleChange(e)}
      />
    </div>
  );
}

export default Search;