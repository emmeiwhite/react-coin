import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./Detail.css";

const Detail = ({ id, match, location, history }) => {
  console.log("****************** LOCATION.PATHNAME ***************");
  console.log(location.pathname);
  const [currencyData, setCurrencyData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pathName, setPathName] = useState(location.pathname);

  useEffect(() => {
    fetch(
      `https://api.udilia.com/coins/v1/cryptocurrencies/${match.params.currencyId}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Success", data);
        setCurrencyData(data);
      })
      .catch((error) => {
        console.log("Error", error);
        setError(true);
      });
  }, [pathName]);

  return (
    <div className="detail-wrapper">
      {Object.keys(currencyData).length > 0 && (
        <section className="detail-card">
          <h1>Currencies Data</h1>
          <p>
            <strong>Name : </strong>
            {currencyData.name}
          </p>
          <p>
            <strong>Symbol: </strong>
            {currencyData.symbol}
          </p>
          <p>
            <strong>Rank:</strong> {currencyData.rank}
          </p>
          <p>
            <strong>Volume24h: </strong>
            {currencyData.volume24h}
          </p>
          <p>
            <strong>MarketCap: </strong>
            {currencyData.marketCap}
          </p>
          <p>
            <strong>TotalSupply:</strong> {currencyData.totalSupply}
          </p>
          <p>
            <strong>PercentChange24h:</strong> {currencyData.percentChange24h}
          </p>

          <h2 style={{ color: "#ff0000" }}>Styling is Pending ...</h2>
        </section>
      )}
    </div>
  );
};

export default withRouter(Detail);
