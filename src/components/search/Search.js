import React, { useState } from "react";
import "./Search.css";
import { ReactComponent as Loader } from "./../common/Loader.svg";
import { ReactComponent as SearchLogo } from "./../common/Search.svg";

const API_URL = `https://api.udilia.com/coins/v1/`;

// autocomplete?searchQuery=bit
const Search = () => {
  const [currencyCoins, setCurrencyCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setLoading(true);
    const searchQuery = e.target.value;

    setSearchQuery({ searchQuery });

    // If searchQuery isn't present, don't send request to the server
    if (!searchQuery) {
      return "";
    }

    fetch(`${API_URL}autocomplete?searchQuery=${searchQuery}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        console.log("**** Data Received from coins *****", data);
        setCurrencyCoins(data);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
        console.log("************ Error ***********", error);
      });
  };

  // The data from the 3rd API so far comes here, HELPER FUNCTION to render ELement
  const getSearchResult = () => {
    if (currencyCoins.length > 0) {
      return (
        <div className="currency-coin-wrapper">
          {currencyCoins.map((currency) => {
            return (
              <div className="currency-coin-data" key={currency.id}>
                {currency.name} ({currency.symbol})
              </div>
            );
          })}
        </div>
      );
    }

    // When currencyCoins are not present
    if (!loading) {
      return (
        <div className="currency-coin-wrapper">
          <div className="currency-coin-data">
            <span>No results found.</span>
          </div>
        </div>
      );
    }
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

        <span>{loading && <Loader height={25} />}</span>
      </div>

      {/* --- Search Result --- */}

      {searchQuery && getSearchResult()}
    </div>
  );
};

export default Search;
