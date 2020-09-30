import React from "react";
import "./Table.css";

import PropTypes from "prop-types";

const showHourChange = (change) => {
  if (change > 0) {
    return <span style={{ color: "green", fontWeight: "500" }}>Up</span>;
  } else if (change < 0) {
    return <span style={{ color: "red", fontWeight: "500" }}>Down</span>;
  }
};

const Table = ({ lists }) => {
  return (
    <div className="table-container">
      <table className="table" width="100%">
        <thead>
          <tr>
            <th>Cryptocurrency</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>24H Change</th>
          </tr>
        </thead>

        <tbody>
          {lists.map((list) => {
            return (
              <tr key={list.id}>
                <td>
                  <span style={{ marginRight: "0.5rem" }}>{list.rank}</span>
                  <span>{list.name}</span>
                </td>
                <td>
                  <span>$ {list.price}</span>
                </td>
                <td>
                  <span>{list.marketCap}</span>
                </td>
                <td>
                  <span>
                    $ {list.percentChange24h}{" "}
                    {showHourChange(list.percentChange24h)}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  lists: PropTypes.array.isRequired,
};

export default Table;