import React, { useState } from "react";
import "./Search.css";
import { ReactComponent as Loader } from "./../common/Loader.svg";
import { ReactComponent as SearchLogo } from "./../common/Search.svg";

const API_URL = `https://api.udilia.com/coins/v1/`;

const Search = () => {
  const [currencyCoins, setCurrencyCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  /** Function */
  const handleChange = (e) => {
    const queryTyped = e.target.value;
    setSearchQuery({ searchQuery: queryTyped });
    // Before sending API request, we will set loading to true
    setLoading(true);

    fetch(`${API_URL}autocomplete?searchQuery=${queryTyped}`)
      .then((response) => response.json())
      .then((data) => {
        setCurrencyCoins(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  };

  // The data from the 3rd API so far comes here, HELPER FUNCTION to render ELement on condition
  const getSearchResult = () => {
    if (!searchQuery) {
      return "";
    }

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
    if (!loading && currencyCoins.length === 0) {
      return (
        <div className="currency-coin-wrapper">
          <div className="currency-coin-data">
            <span>No results found.</span>
          </div>
        </div>
      );
    }
  };

  // Component's return Function
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

      {getSearchResult()}
    </div>
  );
};

export default Search;
