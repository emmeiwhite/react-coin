import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./Search.css";
import { ReactComponent as Loader } from "./../common/Loader.svg";
import { ReactComponent as SearchLogo } from "./../common/Search.svg";

const API_URL = `https://api.udilia.com/coins/v1/`;

const Search = ({ history }) => {
  const [currencyCoins, setCurrencyCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  /** 1) Function 1: handleSearchChange */
  const handleSearchChange = (e) => {
    const queryTyped = e.target.value;
    setSearchQuery(queryTyped);
    // Before sending API request, we will set loading to true
    setLoading(true);

    fetch(`${API_URL}autocomplete?searchQuery=${queryTyped}`)
      .then((response) => response.json())
      .then((data) => {
        setCurrencyCoins(data);
        setLoading(false);
      })
      .catch((error) => {
        // setError(true);
        setLoading(false);
      });
  };

  /** 3) Function 3: Redirecting to the Detail Page */
  const handleRedirectDetail = (currencyId) => {
    setCurrencyCoins([]);
    setSearchQuery("");
    history.push(`/details/${currencyId}`);
  };

  /** 2) Function 2:  Getting Currencies  : HELPER FUNCTION */
  const getSearchResult = () => {
    if (!searchQuery) {
      return "";
    }

    if (currencyCoins.length > 0) {
      return (
        <div className="currency-coin-wrapper">
          {currencyCoins.map((currency) => {
            return (
              <div
                className="currency-coin-data"
                key={currency.id}
                onClick={() => handleRedirectDetail(currency.id)}
              >
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
          onChange={handleSearchChange}
          value={searchQuery}
        />

        <span>{loading && <Loader height={25} />}</span>
      </div>

      {/* --- Search Result --- */}

      {getSearchResult()}
    </div>
  );
};

export default withRouter(Search);
