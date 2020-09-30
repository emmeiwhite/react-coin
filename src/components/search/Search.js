import React, { useState } from "react";
import "./Search.css";
import { ReactComponent as Loader } from "./../common/Loader.svg";
import { ReactComponent as SearchLogo } from "./../common/Search.svg";

const API_URL = `https://api.udilia.com/coins/v1/`;

// autocomplete?searchQuery=bit
const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  // The data from the 3rd API so far comes here
  const getSearchResult = () => {
    return (
      <div>
        <p>Data from Backend</p>
      </div>
    );
  };
  return (
    <div className="search-wrapper">
      <div className="search-wrapper-input">
        <span>
          <SearchLogo height={35} />
        </span>

        <input
          type="text"
          placeholder="Currency name"
          onChange={handleChange}
        />

        <span>
          <Loader height={25} />
        </span>
      </div>

      {/* --- Search Result --- */}

      {/* {getSearchResult()} */}
    </div>
  );
};

export default Search;
